//https://github.com/maoberlehner/transition-to-height-auto-with-vue/blob/master/src/components/TransitionExpand.vue
//https://css-tricks.com/using-css-transitions-auto-dimensions/

<script>
  export default {
    name: `AnimateExpand`,
    functional: true,
    render(createElement, context) {
      const data = {
        props: {
          name: `expand`,
        },
        on: {
          afterEnter(element) {
            element.style.height = `auto`;
          },
          enter(element) {
            let height = element.scrollHeight;
            element.style.height = height + 'px';
          },
          leave(element) {
            let height = element.scrollHeight;
            requestAnimationFrame(function() {
              element.style.height = height + 'px';
              requestAnimationFrame(function() {
                element.style.height = 0 + 'px';
              });
            });
          },
        },
      };
      return createElement(`transition`, data, context.children);
    },
  };
</script>

<style scoped>
    * {
        will-change: height;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
</style>

<style>
    .expand-enter-active,
    .expand-leave-active {
        transition: height .3s ease-out;
        overflow: hidden;
    }

    .expand-enter,
    .expand-leave-to {
        height: 0;
    }
</style>
