<script type="text/jsx">

/*
Based on this post https://calebporzio.com/using-inline-svgs-in-vue-compoments
Requires the webpack html-loader package to load and inline the SVG file contents
Config in vue.config.js:
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
  },
*/

import {
  createId,
  getStatusColor,
  getStatusHueShiftColor,
  sizeStringToEms,
  validateSize,
  validateStatus,
} from '../../libs/uiComponentUtilities.js';

const cls = context => [
  'svgicon',
  context.data.class ? context.data.class : '',
  context.data.staticClass ? context.data.staticClass : ''
  ].join(' ');

const spanStyle = props => {
  let styles = {};
  if(props.size.length) {
    styles.fontSize = `${sizeStringToEms(props.size)}em`;
  }
  if(props.status.length) {
    styles.color = getStatusColor(props.status);
  }
  return styles;
};

const svgPath = './icons/';



const mounted = (el, id, props) => {
  let svgEl = el.firstChild;

  // wrap all elements in a group
  let children = svgEl.querySelectorAll('*');
  let groupWrap = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  groupWrap.setAttribute('id', `group-${id}`);

  children.forEach((c,i) => {
      groupWrap.appendChild(c);
    });
  svgEl.insertBefore(groupWrap, svgEl.firstChild);

  if(props.startColor && props.endColor) {
    let defs = `<defs>
              <linearGradient id="grad-${id}" x1="0" y1="0" x2="100%" y2="100%" gradientTransform="rotate(0)">
                  <stop offset="5%" stop-color=${props.startColor}  stop-opacity="1"/>
                  <stop offset="95%" stop-color=${props.endColor}  stop-opacity="1"/>
              </linearGradient>
              <mask id="mask-${id}">
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grad-${id})"/>
              </mask>
          </defs>`;
    svgEl.insertAdjacentHTML('afterBegin', defs);
    // if(svgEl.getAttribute('stroke') && svgEl.getAttribute('stroke') !== 'none') {
    //   svgEl.setAttribute('stroke', `url(#${id})`);
    // }
    // if(svgEl.getAttribute('fill') && svgEl.getAttribute('fill') !== 'none') {
    //   svgEl.setAttribute('fill', `url(#${id})`);
    // }
    /*

     */
    // svgEl.setAttribute('mask', `url(#${"mask-"+id})`);
    svgEl.querySelector(`#group-${id}`).setAttribute('stroke', `url(#${"grad-"+id})`);
  }

  // svg-icon class set size at 1em. allows svg to scale based on font-size of container
  svgEl.removeAttribute('height');
  svgEl.removeAttribute('width');
};

export default {
  name      : 'SVGIcon',
  functional: true,
  props     : {
    icon: {
      type   : String,
      default: null,
      required: true
    },
    size       : {
      type     : String,
      default  : "",
      validator: validateSize,
    },
    status     : {
      type     : String,
      default  : "",
      validator: validateStatus,
    },
    startColor: {
      type     : String,
      default  : null,
    },
    endColor: {
      type     : String,
      default  : null,
    }
  },
  render(h, context) {
    const id = createId('svgicon');
    const props = context.props;
    let svgFile;

    try {
      svgFile = require(`${svgPath}${props.icon}.svg`);
    } catch (e) {
      console.warn(`SVGIcon: ${e}. SVG icons are loaded from the '${svgPath}' folder in '@/components/atoms/'. The '.svg' extention is automatically added.`);
      svgFile = `<strong class='text-danger'>${props.src}</strong>`;
    }

    const svgElement = <span class={cls(context)} style={spanStyle(props)} domPropsInnerHTML={svgFile} data-id={id}/>;

    return h('transition', {
      props: {
        appear: true,
      },
      class: false,
      on: {
        // appear(el,done) {
        //   done();
        // },
        afterAppear(el) {
          mounted(el, id, props);
        },
      }
    }, [svgElement]);
  },
};
</script>
