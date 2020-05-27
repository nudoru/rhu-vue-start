<style lang="scss" scoped></style>

<template>
  <section role="banner" class="app-header">
    <div class="container-horizontal">
      <div>
        <slot></slot>
      </div>
      <div class="end">
        <AppNavigation />
      </div>
    </div>
  </section>
</template>

<script>
import AppNavigation from "../ui/AppNavigation";

export default {
  name: "Header",
  components: { AppNavigation },
  props: [],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
