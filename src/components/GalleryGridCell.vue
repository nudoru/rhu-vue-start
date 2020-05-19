<style lang="scss">
    .cell {
        position: relative;
        padding: 1rem;
        background-color: #eee;
        text-align: center;
        overflow: hidden;
        place-items: center;
        &::before {
            content: "";
            padding-top: 100%;
            display: block;
        }
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            max-width: 100%;
            transform: translate(-50%, -50%);
        }
        .component-varient {
            margin-bottom: 0;
        }
    }
</style>

<template>
    <div class='cell'>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'GalleryGridCell',
    components: {},
    props: {},
    data() {
      return {};
    },
    methods: {}
  };
</script>