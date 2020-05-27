<style lang="scss" scoped>
    .Footer{}
</style>

<template>
    <section class="app-footer">
        <div class="container-horizontal">
            <div class="end">
                <p>Copyright ©2020</p>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Footer',
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