<style lang="scss" scoped>
    .Hero{}
</style>

<template>
    <section class="app-hero">
        <div class="container">
            <h1>Hero</h1>
            <p>Something Important will go here of course</p>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Hero',
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