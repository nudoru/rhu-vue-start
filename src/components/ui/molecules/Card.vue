<script type="text/jsx">
import Box from '../atoms/Box';
import {validateStatus} from "../../libs/uiComponentUtilities";


  const cls = props => ['card',
    props.status,
    props.active ? 'active' : '',
    props.stackRight ? 'stack-right' : '',
    props.stackBottom ? 'stack-bottom' : ''].join(' ');

  export default {
    name      : 'Card',
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
      shadow: {
        type   : String,
        default: 'sm'
      },
      active: {
        type: Boolean,
        default: false
      },
      stackBottom: {
        type: Boolean,
        default: false
      },
      stackRight: {
        type: Boolean,
        default: false
      }
    },
    render(h, context) {
      const props = context.props;

      const header = context.scopedSlots.hasOwnProperty('header') ? <div class="header">{context.scopedSlots.header()}</div> : null;
      const content = context.scopedSlots.hasOwnProperty('content') ? <div
          class="content">{context.scopedSlots.content()}</div> : null;
      const footer = context.scopedSlots.hasOwnProperty('footer') ? <div
            class="footer">{context.scopedSlots.footer()}</div> : null;

      return (
        <Box class={cls(props)} shadow={props.shadow}>
          {header}
          {content}
          {footer}
        </Box>
      );
    },
  };
</script>