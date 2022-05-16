<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/ListContainer";
import Recommend from "@/pages/Home/Recommend/Recommend";
import Rank from "@/pages/Home/Rank/Rank";
import Like from "@/pages/Home/like/like";
import Floor from "@/pages/Home/Floor/Floor";
import Brand from "@/pages/Home/Brand/Brand";

export default {
  name: "Home",
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer}
}
</script>

<style scoped>

</style>
