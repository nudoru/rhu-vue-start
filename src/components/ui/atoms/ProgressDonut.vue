<script type="text/jsx">
import {
  createId,
  checkPercent,
  getStatusColor,
  getStatusHueShiftColor,
  sizeStringToPixel,
  validateSize,
  validateStatus,
} from '../../libs/uiComponentUtilities.js';

const gradColorA = (props) => getStatusColor(props.status);
const gradColorB = (props) => getStatusHueShiftColor(props.status);
// props.expanded = true if there are children in the slot
const sizePx = (props) => sizeStringToPixel(props.size) + (props.expanded ? props.stroke * 2 + 6 : 0);
const halfsize = (props) => sizePx(props) * 0.5;
const radius = (props) => halfsize(props) - props.stroke * 0.5;
const circumference = (props) => 2 * Math.PI * radius(props);
const strokeval = (props) => (checkPercent(props.percent) * circumference(props)) / 100;
const dashval = (props) => strokeval(props) + ' ' + circumference(props);
const trackstyle = (props) => ({strokeWidth: props.stroke});
const indicatorstyle = (props) => ({
  strokeWidth    : props.stroke,
  strokeDasharray: dashval(props),
  strokeLinecap  : 'round',
});
const rotateval = (props) => 'rotate(-90 ' + halfsize(props) + ',' + halfsize(props) + ')';
const wrappedCompOffset = (props) => props.stroke + 3 + "px";
const cls = (props) => ['progress-donut',`label-${props.labelPosition}`].join(' ');
const chartCls = (props) => ['donut-chart',props.status].join(' ');

export default {
  name      : "ProgressDonut",
  functional: true,
  props     : {
    size       : {
      type     : String,
      default  : 'xl',
      validator: validateSize,
    },
    stroke     : {
      type   : Number,
      default: 10,
    },
    rotate: {
      type: Number,
      default: 0
    },
    status     : {
      type     : String,
      default  : 'info',
      validator: validateStatus,
    },
    label      : {
      type   : String,
      default: '',
    },
    labelPosition: {
      type   : String,
      default: 'bottom',
    },
    percent    : {
      type   : Number,
      default: 0,
    },
    center: {
      type   : String,
      default: '',
    },
  },
  render(h, context) {
    let props = {expanded: context.children ? true : false, ...context.props},
      id = createId('donut'),
      labelEl = props.label.length ?
        <span class="label">{props.label}</span> : null,
      centerEl = props.center.length ? (<text
        class="center"
        x={halfsize(props)}
        y={halfsize(props)+5}
        style={{ textAnchor: 'middle' }}>
        <tspan class="text-percent">{props.center}</tspan>
      </text>) : null,
      centerComponent = context.children ? <div class="wrapped-component" style={{ top: wrappedCompOffset(props)}}>{context.children}</div> : null,
      centerCircleEl = context.children || props.center.length ?  <circle
              r={radius(props) - (props.stroke/2) - 2}
              cx={halfsize(props)}
              cy={halfsize(props)}
              class="center-circle"/> : null;

    return (
      <div class={cls(props)}>
        <div class={chartCls(props)}>
          {centerComponent}
          <svg width={sizePx(props)} height={sizePx(props)} style={`transform: rotate(${props.rotate}deg);`}>
            <defs>
                <linearGradient id={id} gradientTransform="rotate(0)">
                    <stop offset="5%" stop-color={gradColorA(props)} />
                    <stop offset="95%" stop-color={gradColorB(props)} />
                </linearGradient>
            </defs>
            {centerCircleEl}
            <circle
              r={radius(props)}
              cx={halfsize(props)}
              cy={halfsize(props)}
              transform={rotateval(props)}
              style={trackstyle(props)}
              class="track"/>
            <circle
              r={radius(props)}
              cx={halfsize(props)}
              cy={halfsize(props)}
              transform={rotateval(props)}
              style={indicatorstyle(props)}
              stroke={`url(#${id})`}
              class="indicator"/>
              {centerEl}
          </svg>
        </div>
        {labelEl}
      </div>
    );
  },
};
</script>
