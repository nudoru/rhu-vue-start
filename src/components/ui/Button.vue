<template>
  <button v-on="$listeners" :class="cls">
    <i v-if="glyph.length > 0" :class="glyphCls"></i>
    <slot />
  </button>
</template>

<script>
import { validateStatus } from "@/libs/uiComponentPropValidation.js";

export default {
  name: "Button",
  components: {},
  props: {
    status: {
      type: String,
      default: "info",
      validator: validateStatus,
    },
    glyph: {
      type: String,
      default: "",
    },
    large: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cls() {
      return [
        this.status,
        this.large ? "large" : "",
        this.pill ? "pill" : "",
        this.block ? "block" : "",
        this.outline ? "outline" : "",
        this.link ? "outline link" : "",
      ].join(" ");
    },
    glyphCls() {
      return [this.glyph, "left"].join(" ");
    },
  },
};
</script>
