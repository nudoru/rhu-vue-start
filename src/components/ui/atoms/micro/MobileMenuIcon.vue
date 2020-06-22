<script type="text/jsx">
  export default {
    name      : "MobileMenuIcon",
    functional: true,
    props   : {
      open: {
        type   : Boolean,
        default: false
      },
    },
    render(h, context) {
      let cls = ['mobile-menu-icon', context.props.open ? 'open' : 'closed'].join(' ');

      return (
        <div class="mobile-menu">
          <div class={cls}>
          <svg class="icon" viewBox="0 0 100 100" aria-hidden="true">
            <polyline points="0 30, 100 30" />
            <polyline points="0 50, 100 50" />
            <polyline points="0 70, 100 70" />
          </svg>
        </div>
    </div>
      );
    },
  };
</script>