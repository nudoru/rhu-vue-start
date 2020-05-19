<style lang="scss">
    // Trick from https://www.youtube.com/watch?v=8bhKjoowr4c
    .square-grid {
        display: grid;
        grid-gap: .2rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .square-grid-dark {
        @extend .square-grid;
        .cell {
            background-color: #666;
            .component-varient {
                color: white !important;
            }
        }
    }
</style>

<template>
    <div :class="[dark ?  'square-grid-dark' : 'square-grid']">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'GalleryGrid',
    props: {
      dark:{
        type:Boolean,
        default: false
      }
  },
    data() {
      return {};
    },
    methods: {}
  };
</script>

