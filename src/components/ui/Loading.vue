<style lang="scss" scoped></style>

<template>
    <transition name="fade">
        <div v-if="visible" class="loading">
            <div class="spinner"></div>
            <span v-if="label.length" class="label">{{label}}</span>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Loading',
    components: {},
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: "Loading ..."
      }
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>