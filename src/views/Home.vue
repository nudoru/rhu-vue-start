<style lang="scss" scoped>
  .Home{}
</style>

<template>
  <div>
  <Hero/>
  <div class='container'>
    <h1>Hello world!</h1>
  </div>
  </div>
</template>

<script>
  import Hero from "../components/Hero";
  export default {
    name: 'Home',
    components: {Hero},
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