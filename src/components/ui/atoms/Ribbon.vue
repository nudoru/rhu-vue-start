<script type="text/jsx">
  import {validateStatus} from '../../libs/uiComponentUtilities.js';

  export default {
    name      : "Ribbon",
    functional: true,
    props     : {
      status  : {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
      position: {
        type   : String,
        default: 'left'
      },
      glyph   : {
        type   : String,
        default: 'fa fa-air-freshener'
      }
    },
    render(h, context) {
      let cls = ['ribbon', context.props.position, context.props.status].join('-');

      return (
        <div class={cls}><span><i class={context.props.glyph}></i></span></div>
      );
    },
  };
</script>
