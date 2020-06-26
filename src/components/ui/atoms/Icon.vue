<script type="text/jsx">
import {validateSize, validateStatus} from "../../libs/uiComponentUtilities";

export default {
  name      : "Icon",
  functional: true,
  props     : {
    size  : {
      type     : String,
      default  : 'xs',
      validator: validateSize
    },
    status: {
      type     : String,
      default  : 'info',
      validator: validateStatus
    },
    glyph : {
      type   : String,
      default: 'fa fa-air-freshener'
    }
  },
  render(h, context) {
    let cls = ['icon', context.props.status, context.props.size].join('-');

    return (
      <span class="icon" aria-hidden="true" focusable="false" >
          <span class={cls}><i class={context.props.glyph}></i></span>
      </span>
    );
  },
};
</script>
