<style lang="scss" scoped></style>

<template>
  <div>
    <transition name="fade-slow">
      <div
        v-if="isVisible && cover"
        class="modal-cover"
        @click="() => (coverCallback ? coverCallback() : defaultClick())"
      ></div>
    </transition>
    <transition name="fade">
      <div :class="getModalCls()" v-if="isVisible">
        <div class="title" v-if="title.length > 0">{{ title }}</div>
        <div class="glyph" v-if="glyph.length > 0">
          <Icon size="lg" :status="status" :glyph="glyph" />
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="controls" v-if="controls !== null">
          <div class="button-group-expanded-horizontal">
            <button
              v-for="(button, idx) in controls"
              :key="idx"
              @click="
                () => (button.callback ? button.callback() : defaultClick())
              "
              :class="button.cls ? button.cls : 'primary'"
            >
              {{ button.label }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { validateStatus } from "@/libs/uiComponentPropValidation.js";
import Icon from "./Icon";

export default {
  name: "Modal",
  components: { Icon },
  props: {
    title: {
      type: String,
      default: "",
    },
    controls: {
      type: Array,
      default: null,
    },
    cover: {
      type: Boolean,
      default: true,
    },
    coverCallback: {
      type: Function,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    glyph: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "neutral",
      validator: validateStatus,
    },
  },
  data() {
    return {
      isVisible: this.visible,
    };
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.isVisible = newVal;
    },
  },
  computed: {},
  methods: {
    defaultClick() {
      this.isVisible = !this.isVisible;
    },
    getModalCls() {
      return [
        "modal",
        this.status === "neutral" ? "" : this.status,
        this.full ? "full" : "",
      ].join(" ");
    },
  },
};
</script>
