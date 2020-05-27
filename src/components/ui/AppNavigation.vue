<style lang="scss" scoped></style>

<template>
  <div class="app-navigation-primary">
    <button class="mobile-toggle" @click="toggleMobileNav">
      <i class="fa fa-bars"></i>
    </button>
    <nav :class="navCls">
      <div class="nav-mobile-header">
        <button class="nav-mobile-toggle" @click="toggleMobileNav">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <ul>
        <li class="note">
          <i class="fa fa-info-circle"></i>Nav is for dev only
        </li>
        <li
          :class="{ active: routeRoot === splitRoute(route.path) }"
          v-for="(route, idx) in this.$router.options.routes"
          :key="idx"
          @click="routeClick"
        >
          <router-link class="" :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    splitRoute(r) {
      // get the "root" without any params
      return r.split("/")[1];
    },
    routeClick() {
      this.mobileNavOpen = false;
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
  computed: {
    // get the "root" without any params
    routeRoot: function () {
      return this.splitRoute(this.$route.path);
    },
    navCls: function () {
      return ["navigation-list", this.mobileNavOpen ? "open" : "closed"].join(
        " "
      );
    },
  },
};
</script>
