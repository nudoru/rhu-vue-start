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

import {createElementSVG, wrapChildren, removeAllElements} from '../../libs/dom';

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

  // svg-icon class set size at 1em. allows svg to scale based on font-size of container
  svgEl.removeAttribute('height');
  svgEl.removeAttribute('width');
  svgEl.setAttribute('stroke-width', props.stroke);

  if(props.startColor && props.endColor) {
    let gradient = `<defs>
              <linearGradient id="grad-${id}" x1="0" y1="0" x2="100%" y2="100%" gradientTransform="rotate(0)">
                  <stop offset="5%" stop-color=${props.startColor}  stop-opacity="1"/>
                  <stop offset="95%" stop-color=${props.endColor}  stop-opacity="1"/>
              </linearGradient>
          </defs>
          ${svgEl.innerHTML}`;
    removeAllElements(svgEl);
    svgEl.insertAdjacentHTML('afterBegin', gradient);

    if(svgEl.getAttribute('stroke') && svgEl.getAttribute('stroke') !== 'none') {
      svgEl.setAttribute('stroke', `url(#grad-${id})`);
    }
    if(svgEl.getAttribute('fill') && svgEl.getAttribute('fill') !== 'none') {
      svgEl.setAttribute('fill', `url(#grad-${id})`);
    }
  }
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
    stroke : {
      type     : String,
      default  : "5%",
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

    const svgElement = <span class={cls(context)} style={spanStyle(props)} aria-hidden="true" focusable="false" domPropsInnerHTML={svgFile} data-id={id}/>;

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
