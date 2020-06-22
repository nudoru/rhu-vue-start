<script type="text/jsx">
import AppNavigation from "../ui/organisms/AppNavigation";

export default {
  name      : "Header",
  functional: true,
  props   : {
    p: {
      type   : Boolean,
      default: false
    }
  },
  render(h, context) {
    return (
            <section role="banner" class="app-header">
              <div class="container-horizontal">
                <div>
                  {context.children}
                </div>
                <div class="end">
                  <AppNavigation/>
                </div>
              </div>
            </section>
    );
  },
};
</script>
