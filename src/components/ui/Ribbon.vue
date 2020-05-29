<template>
    <div :class="cls"><span><i :class="glyph"></i></span></div>
</template>

<script>
  import {
    validateStatus
  } from '@/libs/uiComponentPropValidation.js';

  export default {
    name      : 'Ribbon',
    components: {},
    props     : {
      status  : {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
      position: {
        type     : String,
        default  : 'left'
      },
      glyph : {
        type   : String,
        default: 'fa fa-air-freshener'
      }
    },
    computed  : {
      cls() {
        return ['ribbon', this.position, this.status].join('-');
      }
    }
  };
</script>