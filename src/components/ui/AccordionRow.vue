<style lang="scss" scoped></style>

//https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/

<template>
    <div class="accordion-row">
        <div class="header" @click="onHeaderClick">{{label}}</div>
        <AnimateExpand>
            <div v-if="isExpanded" class="content">
                <slot></slot>
            </div>
        </AnimateExpand>
    </div>
</template>

<script>
  import AnimateExpand from "./util/AnimateHeight";
  export default {
    name: 'AccordionRow',
    components: {AnimateExpand},
    props: {
      expanded: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: "Accordion"
      }
    },
    data() {
      return {
        isExpanded: this.expanded
      };
    },
    computed: {},
    methods: {
      onHeaderClick() {
        this.isExpanded = !this.isExpanded;
      }
    }
  };
</script>