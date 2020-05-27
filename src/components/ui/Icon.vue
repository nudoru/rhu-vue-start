<template>
    <div :class="cls"><i :class="glyph"></i></div>
</template>

<script>
  import {
    validateSize,
    validateStatus
  } from '@/libs/uiComponentPropValidation.js';

  export default {
    name      : 'Icon',
    components: {},
    props     : {
      size  : {
        type     : String,
        default  : 'xs',
        validator: validateSize
      },
      status: {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
      glyph : {
        type   : String,
        default: 'fa fa-air-freshener'
      }
    },
    computed  : {
      cls() {
        return ['icon', this.status, this.size].join('-');
      }
    }
  };
</script>