<style lang="scss" scoped>
    .drop-down-button {
        button {
            display: flex;
            align-items: center;
        }
    }
</style>

<template>
    <div :class="cls">
        <Button v-bind="$attrs" ref="button" toggle :toggled="isOpen" v-on:toggleOn="onToggleOn"  v-on:toggleOff="onToggleOff" :aria-expanded="isOpen">
            <span>{{label}}</span><ToggleChevron :open="isOpen"/></Button>
        <transition name="fadedown">
            <div class="drop-down-content" v-if="isOpen" @click="onContentClick" :style="{paddingTop: contentTopPadding}"  :aria-hidden="!isOpen">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
  import Button from "../atoms/Button";
  import ToggleChevron from "../atoms/micro/ToggleChevron";
  export default {
    name: 'DropDown',
    components: {ToggleChevron, Button},
    props: {
      label: {
        type: String,
        default: "Drop down"
      }
    },
    data() {
      return {
        isOpen: false,
      };
    },
    computed: {
      cls() {
        return [
          'drop-down',
          'drop-down-button',
          this.isOpen ? "open" : "closed",
        ].join(" ");
      },
      contentTopPadding() {
        let button = this.$refs.button.$el;
        return button.offsetHeight + 'px';
      }
    },
    methods: {
      onContentClick(evt) {
        if(evt.target.nodeName.toLowerCase() === 'button') {
          this.onToggleOff();
        }
      },
      onToggleOn() {
        this.isOpen = true;
      },
      onToggleOff() {
        this.isOpen = false;
      },
    }
  };
</script>