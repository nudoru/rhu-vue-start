<script type="text/jsx">
export default {
  name      : "GridAuto",
  functional: true,
  props     : {
      mode  : {
        type     : String,
        default  : 'fill',
      },
  },
  render(h, context) {
    const cls = ["grid-auto", context.props.mode === 'fill' ? 'fill' : 'fit'].join(' ');
    let contents = context.slots().default.map((child,index) => {
      return (<div class="cell" key={index}>{child}</div>)
    });
    return (<section class={cls}>{contents}</section>);
  },
};
</script>
