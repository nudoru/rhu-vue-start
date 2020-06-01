<style lang="scss" scoped></style>

<template>
    <div :class="cls()">
        <div class="header" @click="onHeaderClick">
            <div class="glyph"><i class="fas fa-chevron-up"></i></div>
            <div class="label">{{label}}</div>
        </div>
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
    watch: {
      expanded: function (newVal, oldVal) {
        this.isExpanded = newVal;
      },
    },
    computed: {},
    methods: {
      onHeaderClick() {
        this.isExpanded = !this.isExpanded;
      },
      cls() {
        return ['accordion-row', this.isExpanded ? 'open' : 'closed'].join(' ');
      }
    }
  };
</script>