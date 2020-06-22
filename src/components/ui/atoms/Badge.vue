<script type="text/jsx">
  import {validateStatus} from "../../libs/uiComponentUtilities";

  export default {
    name      : "Badge",
    functional: true,
    props     : {
      status: {
        type     : String,
        default  : "info",
        validator: validateStatus,
      },
      glyph : {
        type   : String,
        default: "",
      },
      large : {
        type   : Boolean,
        default: false,
      },
    },
    render(h, context) {
      let cls = ["badge", context.props.status, context.props.large ? "large" : ""].join(" "),
        glyphCls = [context.props.glyph, "left"].join(" ");

      return (
        <span class={cls}>
          {context.props.glyph.length > 0 ? <i class={glyphCls}></i> : null}
          {context.children}
        </span>
      );
    },
  };
</script>