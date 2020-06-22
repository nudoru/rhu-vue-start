/*
Vue usage ...

data() {
  return {
    removeLinkEvents: [],
  };
},
mounted() {
  let ids = createAnchors(buildSelectorList('.fluid'));
  this.removeLinkEvents = attachClickEvents();
  this.outline = ids;
  scrollToURLAnchor();
},
beforeDestroy() {
  this.removeLinkEvents.forEach((fn) => fn());
},
*/

import throttle from "lodash/throttle";

const anchorClass = "anchor-heading";
const anchorScrollOffsetY = 25;

export const buildSelectorList = (container, tags) => {
  tags = tags || ["h1", "h2", "h3", "h4", "h5", "h6"];
  return tags
    .reduce((acc, tag) => {
      acc.push(`${container} ${tag}`);
      return acc;
    }, [])
    .join(", ");
};

export const createAnchors = (selectors) => {
  let links = [];

  document.querySelectorAll(selectors).forEach(($heading) => {
    let id =
      $heading.getAttribute("id") ||
      $heading.innerText
        .toLowerCase()
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
        .replace(/ +/g, "-");

    $heading.setAttribute("id", id);
    $heading.classList.add(anchorClass);

    let $anchor = document.createElement("a");
    $anchor.className = "anchor-link";
    $anchor.href = "#" + id;
    $anchor.innerText = "#";

    $heading.appendChild($anchor);

    links.push({
      tag: $heading.tagName.toLowerCase(),
      text: $heading.innerText,
      id,
      anchor: "#" + id,
    });
  });
  return links;
};

// Override default click events to smoothly scroll to an offset position
// May not be needed with scroll-margin-top on targets:
// https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/
export const attachClickEvents = (_) => {
  let unsubscribeEvents = [];
  document.querySelectorAll("a.anchor-link").forEach(($anchor) => {
    const onClick = (e) => (e) => {
      e.preventDefault();
      let top = $anchor.parentNode.offsetTop - anchorScrollOffsetY;
      console.log("scrolling");
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
      history.pushState({}, "", $anchor.getAttribute("href"));
    };

    $anchor.addEventListener("click", onClick);

    unsubscribeEvents.push(() => $anchor.removeEventListener("click", onClick));
  });

  return unsubscribeEvents;
};

// Document needs to load and script needs to run.
// Call this on load or mounted
export const scrollToURLAnchor = (_) => {
  if (window.location.hash.length > 0) {
    setTimeout(function () {
      let targetAnchor = document.querySelector(window.location.hash);
      let top = targetAnchor.offsetTop - anchorScrollOffsetY;
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }, 150);
  }
};

export const observeScroll = (
  documentRoot,
  documentHeaderSelectors,
  updateCallBack
) => {
  let documentRootEl = document.querySelector(documentRoot),
    documentHeaders = [...document.querySelectorAll(documentHeaderSelectors)],
    topoffset = documentRootEl.getBoundingClientRect().top + window.scrollY;

  const isElFullyVisibleY = (rect) =>
    rect.top >= topoffset && rect.bottom <= window.innerHeight;

  const isElPartiallyVisibleY = (rect) =>
    rect.top < window.innerHeight && rect.bottom >= topoffset;

  const scrollFn = (_) => {
    // Reduce bottom -> top
    let highest = documentHeaders.reduceRight((acc, header, i) => {
      let headerRect = header.getBoundingClientRect(),
        headerVisible = isElFullyVisibleY(headerRect),
        headerPartially = isElPartiallyVisibleY(headerRect);

      if (headerVisible || headerPartially) {
        acc = i;
      }
      return acc;
    }, 0);

    updateCallBack(highest);
  };

  const throttledScrollFn = throttle(scrollFn, 100);
  window.addEventListener("scroll", throttledScrollFn);

  // Call it once to update nav
  scrollFn();

  // return a function to stop the listener
  return () => {
    window.removeEventListener("scroll", throttledScrollFn);
  };
};
