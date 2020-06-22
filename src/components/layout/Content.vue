<script type="text/jsx">
export default {
  name      : "Content",
  functional: true,
  props   : {
    p: {
      type   : Boolean,
      default: false
    }
  },
  render(h, context) {
    return (
      <section class='app-content'>
        {context.children}
      </section>
    );
  },
};
</script>
