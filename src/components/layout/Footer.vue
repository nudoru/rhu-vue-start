<script type="text/jsx">
  export default {
    name      : "Footer",
    functional: true,
    props   : {
      p: {
        type   : Boolean,
        default: false
      }
    },
    render(h, context) {
      return (
        <section class="app-footer">
          <div class="container-horizontal">
            <div class="end">
              <p>Copyright ©2020</p>
            </div>
          </div>
        </section>
      );
    },
  };
</script>