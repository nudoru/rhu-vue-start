<style lang="scss" scoped></style>

<template>
    <div :class="cls">
        <img v-if="imgUrl" :src="imgUrl " :alt="altText">
        <span v-if="initials" class="initials">{{initials}}</span>
    </div>
</template>

<script>
  import {
    validateSize,
    validateStatus
  } from '@/libs/uiComponentPropValidation.js';

  export default {
    name: 'Avatar',
    components: {},
    props: {
      imgUrl: {
        type: String,
        default: null
      },
      altText: {
        type: String,
        default: 'User avatar image'
      },
      initials: {
        type: String,
        default: null
      },
      size  : {
        type     : String,
        default  : 'md',
        validator: validateSize
      },
      status: {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
    },
    data() {
      return {};
    },
    computed: {
      cls() {
        return ['avatar', this.status, this.size].join('-');
      }
    }
  };
</script>