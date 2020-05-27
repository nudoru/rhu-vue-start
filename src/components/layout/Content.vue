<style lang="scss" scoped>
    .Content{}
</style>

<template>
    <section class='app-content'>
        <slot></slot>
    </section>
</template>

<script>
  export default {
    name: 'Content',
    components: {},
    props: {
      p: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>