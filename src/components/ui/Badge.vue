<template>
  <div :class="cls">
    <i v-if="glyph.length > 0" :class="glyphCls"></i>
    <slot />
  </div>
</template>

<script>
import { validateStatus } from "@/libs/uiComponentPropValidation.js";

export default {
  name: "Badge",
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
  },
  computed: {
    cls() {
      return ["badge", this.status, this.large ? "large" : ""].join(" ");
    },
    glyphCls() {
      return [this.glyph, "left"].join(" ");
    },
  },
};
</script>
