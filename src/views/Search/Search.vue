<template>
  <div>
    <type-nav
        :show="show"
        @mouseEnter="handleMouseEnter"
        @mouseLeave="handleMouseLeave">
    </type-nav>

  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleMouseEnter() {
      this.show = true
    },
    handleMouseLeave() {
      this.show = false
    }
  },
}
</script>

<style scoped>

</style>
