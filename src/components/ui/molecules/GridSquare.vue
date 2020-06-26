<script type="text/jsx">
export default {
  name      : "GridSquare",
  functional: true,
  render(h, context) {
    let contents = context.slots().default.map((child,index) => {
      return (<div class="cell" key={index}><span>{child}</span></div>)
    });
    return (<section class="grid-square">{contents}</section>);
  },
};
</script>
