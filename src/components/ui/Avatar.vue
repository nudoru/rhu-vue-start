<style lang="scss" scoped></style>

<template>
    <div :class="cls"><img :src="imgUrl " :alt="altText"></div>
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
        default: '',
        required: true
      },
      altText: {
        type: String,
        default: 'User avatar image'
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