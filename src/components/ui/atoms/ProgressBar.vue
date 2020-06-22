<script type="text/jsx">
import {
  checkPercent,
  sizeStringToPixel,
  validateSize,
  validateStatus,
} from '../../libs/uiComponentUtilities.js';

export default {
  name      : "ProgressBar",
  functional: true,
  props   : {
    size       : {
      type     : String,
      default  : 'xl',
      validator: validateSize
    },
    status     : {
      type     : String,
      default  : 'info',
      validator: validateStatus
    },
    width      : {
      type   : String,
      default: '100px'
    },
    label      : {
      type   : String,
      default: ''
    },
    percent    : {
      type   : Number,
      default: 0
    },
    showPercent: {
      type   : Boolean,
      default: true
    },
    striped    : {
      type   : Boolean,
      default: false
    },
    inlinepercent: {
      type   : Boolean,
      default: false
    }
  },
  render(h, context) {
    let percent = checkPercent(context.props.percent),
    // sizePx = sizeStringToPixel(context.props.size),
    cls = ['progress-bar-wrapper', context.props.size,
      context.props.status,
      context.props.striped ? 'striped' : '',
      context.props.inlinepercent ? 'inline-percent' : ''].join(' '),
    label = context.props.label.length ? <div class="label">{context.props.label}</div> : null,
    barStyle = { 'max-width': context.props.width },
    indicatorStyle = { width: percent + '%' },
    underPct = context.props.showPercent && !context.props.inlinepercent ? <div class="text-percent" style={indicatorStyle}>{ percent }%</div> : null,
    inlinePct = context.props.showPercent && context.props.inlinepercent ? <div class="text-percent">{percent }%</div> : null;

    return (
      <div class="progress-bar">
        <div class="progress-bar-container">
          {label}
          <div class={cls} style={barStyle}>
            <div class="track">
              <div class="indicator" style={indicatorStyle}></div>
            </div>
            {underPct}
            {inlinePct}
          </div>
        </div>
      </div>
    );
  },
};
</script>
