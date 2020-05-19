<style lang="scss" scoped></style>

<template>
    <section role="banner" class="app-header">
        <div class="container-horizontal">
            <div class="start">
                <h1><slot></slot></h1>
            </div>
            <div class="end">
                <nav class="app-navigation-primary">
                    <ul class="">
                        <li :class="{'active': routeRoot === splitRoute(route.path)}" v-for="(route, idx) in this.$router.options.routes" :key="idx">
                            <router-link class="" :to="route.path" >
                                {{route.name}}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

</template>

<script>
  export default {
    name   : 'Header',
    props  : [],
    data() {
      return {};
    },
    methods: {
      splitRoute(r) {
        // get the "root" without any params
        return r.split('/')[1]
      }
    },
    computed: {
      // get the "root" without any params
      routeRoot: function() {
        return this.splitRoute(this.$route.path);
      }
    },
    mounted() {
      // console.log('mount header route is',this.$router.options.routes);
      // console.log(this.$route.path, this.route);
    },
    beforeUpdate() {
      // console.log('updated header route is',this.$route);
    }
  };
</script>