<script type="text/jsx">
    export default {
      name      : "ToggleChevron",
      functional: true,
      props   : {
        open: {
          type   : Boolean,
          default: false
        }
      },
      render(h, context) {
        let cls = ['toggle-chevron-icon', context.props.open ? 'open' : 'closed'].join(' ');
        return (
          <div class="toggle-chevron">
              <div class={cls}>
                  <svg class="icon" viewBox="0 0 16 16" aria-hidden="true">
                      <g class="chevronGroup" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
                          <path d="M2 2l12 12"></path>
                          <path d="M14 2L2 14"></path>
                      </g>
                  </svg>
              </div>
          </div>
        );
      },
    };
</script>