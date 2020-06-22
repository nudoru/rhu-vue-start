<!--Based on https://codepen.io/dhavidyluiz/pen/OraKRM-->

<style lang="scss" scoped></style>

<template>
    <span class="checkbox-svg">
        <input type="checkbox" name="id" :id="uniqueId" :checked="checked"  v-on="$listeners" />
        <label :for="uniqueId" v-html="labelText">
        </label>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50 L 40 86 L 90 10" stroke="#ffff" stroke-dasharray="140" stroke-dashoffset="140"></path>
        </svg>
    </span>
</template>

<script>
    import {createId} from "../../libs/uiComponentUtilities";

    export default {
    name    : 'CheckBox',
    props   : {
      checked: {
        type   : Boolean,
        default: false
      }
    },
    data() {return {};},
    computed: {
      uniqueId() {
        return this.id ? this.id : createId("cb");
      },
      labelText() {
        if(this.$slots.hasOwnProperty('default')) {
          return this.$slots.default[0].text;
        }
        return '&nbsp;';
      }
    },
  };
</script>