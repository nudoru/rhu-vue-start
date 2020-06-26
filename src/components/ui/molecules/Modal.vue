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
      <Box :class="getModalCls()" v-if="isVisible" tag="section">
        <div class="title" v-if="title.length > 0">
          <h1>{{ title }}</h1>
        </div>
        <div class="open-glyph" v-if="glyph.length > 0">
          <Icon size="lg" :status="status" :glyph="glyph" />
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="controls" v-if="controls !== null">
          <div class="button-stack-expanded-horizontal">
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
      </Box>
    </transition>
  </div>
</template>

<script>
import { validateStatus } from "../../libs/uiComponentUtilities.js";
import Icon from "../atoms/Icon";
import Box from "../atoms/Box";

export default {
  name: "Modal",
  components: { Box, Icon },
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
    nocontentpadding: {
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
        this.nocontentpadding ? "content-padding-none" : "",
      ].join(" ");
    },
  },
};
</script>
