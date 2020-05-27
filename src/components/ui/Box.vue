<template>
    <div :class="cls">
        <slot/>
    </div>
</template>

<script>
  export default {
    name      : 'Icon',
    components: {},
    props     : {
      padded: {
        type   : Boolean,
        default: false
      },
      shadow: {
        type   : String,
        default: 'xs'
      }
    },
    computed  : {
      cls() {
        let shadow = this.shadow.length ? `shadow-${this.shadow}` : '';
        let padded = this.padded ? 'u-padding' : '';
        return ['box', shadow, padded].join(' ');
      }
    }
  };
</script>