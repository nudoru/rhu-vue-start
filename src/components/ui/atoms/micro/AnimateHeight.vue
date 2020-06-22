<script>
import { gsap } from 'gsap';

export default {
  name: 'AnimateExpand',
  functional: true,
  props: {
    collapsedHeight: {
      type: Number,
      default: 0,
    },
    openHeight: {
      type: String,
      default: 'auto',
    },
  },
  render(createElement, context) {
    const data = {
      props: {
        name: 'animateexpand',
      },
      on: {
        // beforeEnter(element) {},
        enter(el, done) {
          gsap.fromTo(
            el,
            {
              height: context.props.collapsedHeight,
              opacity: context.props.collapsedHeight === 0 ? 0 : 100,
            },
            {
              height: el.scrollHeight,
              opacity: 1,
              duration: 0.5,
              ease: 'circ.out',
              onComplete: done,
            }
          );
        },
        afterEnter(el) {
          el.style.height = 'auto';
        },
        // enterCancelled(el) {},
        // beforeLeave(el) {},
        leave(el, done) {
          gsap.fromTo(
            el,
            {
              height: el.scrollHeight,
              opacity: 1,
            },
            {
              height: context.props.collapsedHeight,
              opacity: context.props.collapsedHeight === 0 ? 0 : 100,
              duration: 0.5,
              ease: 'circ.in',
              onComplete: done,
            }
          );
        },
        // afterLeave(el) {},
        // leaveCancelled(el) {},
      },
    };
    return createElement('transition', data, context.children);
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
