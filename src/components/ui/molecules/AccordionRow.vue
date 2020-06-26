<style lang="scss" scoped></style>

<template>
  <Box :class="cls()" tag="section">
    <div
      class="header"
      @click="onHeaderClick"
      role="button"
      :aria-expanded="isOpen"
      tabindex="0"
    >
      <ToggleChevron :open="isOpen" />
      <div class="label">
        <span v-if="label.length">{{ label }}</span>
        <slot v-else name="label"></slot>
      </div>
    </div>
    <AnimateExpand>
      <Box
        v-if="isOpen"
        class="accordion-row-content"
        tag="section"
        :aria-hidden="!isOpen"
      >
        <slot></slot>
      </Box>
    </AnimateExpand>
  </Box>
</template>

<script>
import AnimateExpand from "../atoms/micro/AnimateHeight";
import ToggleChevron from "../atoms/micro/ToggleChevron";
import Box from "../atoms/Box";

export default {
  name: "AccordionRow",
  components: { Box, ToggleChevron, AnimateExpand },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
    scroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  watch: {
    expanded: function (newVal, oldVal) {
      this.isOpen = newVal;
    },
  },
  computed: {},
  methods: {
    onHeaderClick() {
      this.isOpen = !this.isOpen;
      let evt = this.isOpen ? "opened" : "closed";
      this.$emit(evt);
    },
    cls() {
      return [
        "accordion-row",
        this.scroll ? "scroll" : "",
        this.isOpen ? "open" : "closed",
      ].join(" ");
    },
  },
};
</script>
