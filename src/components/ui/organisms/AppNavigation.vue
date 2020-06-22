<style lang="scss" scoped></style>

<template>
  <div class="app-navigation-primary">
    <div class="mobile-toggle" @click="toggleMobileNav">
      <MobileMenuIcon :open="mobileNavOpen"/>
    </div>
    <nav :class="navCls">
      <div class="nav-mobile-header"></div>
      <ul>
        <li
          :class="{ active: routeRoot === splitRoute(route.path) }"
          v-for="(route, idx) in this.$router.options.routes"
          :key="idx"
          @click="routeClick"
        >
          <router-link class="" :to="route.path">
            <i :class="route.glyph" v-if="route.hasOwnProperty('glyph')"></i>
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import MobileMenuIcon from "../atoms/micro/MobileMenuIcon";
export default {
  name: "AppNavigation",
  components: {MobileMenuIcon},
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
