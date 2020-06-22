<script type="text/jsx">
  export default {
    name      : "Loading",
    functional: true,
    props     : {
      visible: {
        type   : Boolean,
        default: true
      },
      label  : {
        type   : String,
        default: "Loading ..."
      }
    },
    render(h, context) {
      let label = context.props.label.length ?
        <span class="label">{context.props.label}</span> : null,
        loader = context.props.visible ? (<div class="loading">
          <div class="spinner"></div>
          {label}</div>) : null;

      return (
        <transition name="fade">
          {loader}
        </transition>
      );
    },
  };
</script>