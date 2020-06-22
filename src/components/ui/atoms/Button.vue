<template>
  <button v-on="$listeners" @click="onClick" :class="cls" :disabled="disabled" :aria-disabled="disabled" role="button" :aria-pressed="toggle && toggled" :data-label="label" tabindex="0">
    <i v-if="glyph.length > 0" :class="glyphCls"></i>
    <slot />
  </button>
</template>

<script>
import { validateStatus } from "../../libs/uiComponentUtilities.js";

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
    disabled: {
      type: Boolean,
      default: false,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    toggled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isToggled: this.toggled
    };
  },
  watch: {
    toggled: function (newVal, oldVal) {
      this.isToggled = newVal;
    },
  },
  computed: {
    cls() {
      return [
        this.status,
        this.large ? "large" : "",
        this.pill ? "pill" : "",
        this.block ? "block" : "",
        this.disabled ? "disabled" : "",
        this.outline ? "outline" : "",
        this.link ? "outline link" : "",
              this.toggle ? "toggle" : "",
        this.isToggled ? "toggled-on" : "toggled-off",
      ].join(" ");
    },
    glyphCls() {
      return [this.glyph, "left"].join(" ");
    },
    label() {
      return this.$slots.default[0].text;
    }
  },
  mounted() {
  },
  methods: {
    onClick() {
      // This fires before the @click handler on the component's usage
      if(this.toggle) {
        this.isToggled = !this.isToggled;
        let evt = this.isToggled ? 'toggleOn' : 'toggleOff';
        this.$emit(evt);
      }
    }
  }
};
</script>
