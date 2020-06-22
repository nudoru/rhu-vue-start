<script type="text/jsx">
export default {
  name      : "Hero",
  functional: true,
  props   : {
    p: {
      type   : Boolean,
      default: false
    }
  },
  render(h, context) {
    return (
      <section class="app-hero">
        <div class="container">
          {context.children}
        </div>
      </section>
    );
  },
};
</script>
