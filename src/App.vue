<style lang="scss" scoped></style>

<template>
  <main class="app">
    <Header><i class="far fa-lightbulb"></i>RHU Vue App Starter</Header>
<!--    <Hero/>-->
    <Content>
      <router-view />
    </Content>
    <Footer/>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Content,
    Hero,
    Header,
    Footer
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log('App mounted');
  },
};
</script>
