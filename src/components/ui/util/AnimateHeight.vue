<script>
  import {gsap} from 'gsap';

  export default {
    name      : "AnimateExpand",
    functional: true,
    render(createElement, context) {
      console.log(context);
      const data = {
        props: {
          name: "animateexpand",
        },
        on   : {
          // beforeEnter(element) {},
          enter(el, done) {
            gsap.fromTo(el, {
                height: 0
              },
              {
                height    : el.scrollHeight,
                duration  : .5,
                ease      : "circ.out",
                onComplete: done
              });
          },
          afterEnter(el) {
            el.style.height = "auto";
          },
          // enterCancelled(el) {},
          // beforeLeave(el) {},
          leave(el, done) {
            gsap.fromTo(el, {
              height: el.scrollHeight
            }, {
              height    : 0,
              duration  : .5,
              ease      : "circ.in",
              onComplete: done
            });
          },
          // afterLeave(el) {},
          // leaveCancelled(el) {},
        },
      };
      return createElement("transition", data, context.children);
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