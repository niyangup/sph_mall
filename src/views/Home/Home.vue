<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floorList" :key="item.id" :floor="item"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer/ListContainer";
import Recommend from "@/views/Home/Recommend/Recommend";
import Rank from "@/views/Home/Rank/Rank";
import Like from "@/views/Home/like/like";
import Floor from "@/views/Home/Floor/Floor";
import Brand from "@/views/Home/Brand/Brand";
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer},
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },
  created() {
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style scoped>

</style>
