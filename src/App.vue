<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    <Footer v-show="$route.meta['showFooter']"></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  created() {
    this.$store.dispatch("getCategory")
  },
}
</script>

<style>
</style>
