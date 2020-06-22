<template>
  <section class="document-outline">
    <div v-if="!outline || outline.length === 0">
      <Loading />
    </div>
    <div v-else>
      <div class="header" v-if="hasHeader">
        <slot/>
      </div>
      <ul>
        <li
          v-for="(heading, idx) in outline"
          :class="['level-' + heading.tag, current === idx ? 'current' : '']"
          :key="idx"
          :data-hash="heading.anchor"
        >
          <a :href="heading.anchor" @click="onOutlineClick">{{
            heading.text
          }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { observeScroll } from '../../libs/headingAnchorLinks';
import Loading from '../atoms/Loading';

export default {
  name: 'DocumentOutline',
  components: { Loading },
  props: {
    outline: {
      type: Array,
      default: [],
    },
    target: {
      type: String,
      default: null,
      required: true,
    },
    setUrlHash: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      removeScrollListener: null,
      current: 0,
    };
  },
  watch: {
    outline: function (newVal, oldVal) {
      if (newVal !== null && newVal.length > 0) {
        setTimeout(() => {
          this.setScrollWatcher();
        }, 150);
      }
    },
  },
  computed: {
    hasHeader() {
      return this.$slots.hasOwnProperty('default');
    }
  },
  methods: {
    updateCurrent(newCurrent) {
      this.current = newCurrent;
    },
    onOutlineClick(evt) {
      evt.preventDefault();
      //this.updateCurrentByHash(evt.target.getAttribute('href'));
      let targetId = evt.target.getAttribute('href'),
        targetAnchor = document.querySelector(targetId);
      let top = targetAnchor.offsetTop - 25;

      window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth',
      });

      // Set it directly w/ a delay for the scroll to finish to highlight unreachable
      // short items at the bottom of the view
      //DURATION UNKNOWN window.setTimeout(()=> this.updateCurrentByHash(targetId), 300);

      if(this.setUrlHash) {
        // add hash to url w/o scrolling
        history.pushState({}, '', targetId);
      }
    },
    updateCurrentByHash(hash) {
      this.outline.forEach((c, i) => {
        if (c.anchor === hash) {
          this.updateCurrent(i);
        }
      });
    },
    setScrollWatcher() {
      let contentHeadings = this.outline.map((h) => h.anchor).join(', ');
      this.removeScrollListener = observeScroll(
        this.target,
        contentHeadings,
        this.updateCurrent
      );
    },
  },
  mounted() {
  },
  beforeDestroy() {
    if (this.removeScrollListener) {
      this.removeScrollListener();
    }
  },
};
</script>
