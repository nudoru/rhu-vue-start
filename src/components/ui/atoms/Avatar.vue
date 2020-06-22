<script type="text/jsx">
  import {
    validateSize,
    validateStatus
  } from '../../libs/uiComponentUtilities.js';

  export default {
    name      : "Avatar",
    functional: true,
    props   : {
      imgUrl: {
        type: String,
        default: null
      },
      altText: {
        type: String,
        default: 'User avatar image'
      },
      initials: {
        type: String,
        default: null
      },
      size  : {
        type     : String,
        default  : 'md',
        validator: validateSize
      },
      status: {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
    },
    render(h, context) {
        let cls = ['avatar', context.props.status, context.props.size].join('-'),
        image = context.props.imgUrl ? <img src={context.props.imgUrl} alt={context.props.altText}/> : null,
        initials =  context.props.initials ?<span class="initials">{context.props.initials}</span> : null;

      return (
        <span class="avatar">
            <span class={cls}>
              {image}
              {initials}
            </span>
        </span>
      );
    },
  };
</script>