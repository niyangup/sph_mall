<template>
  <div class="spec-preview" v-if="skuImageList">
    <img :src="skuImageList[selectImgIndex].imgUrl"/>
    <div class="event" @mousemove="handleMouseMove"></div>
    <div class="big">
      <img :src="skuImageList[selectImgIndex].imgUrl"/>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ['skuImageList', 'selectImgIndex'],
  methods: {
    handleMouseMove(e) {
      const {offsetX, offsetY} = e
      const mask = document.querySelector('.mask')
      const big = document.querySelector('.big>img')
      const maxOffsetX = mask.offsetParent.clientWidth - mask.clientWidth / 2
      const maxOffsetY = mask.offsetParent.clientHeight - mask.clientHeight / 2
      let left = offsetX - mask.clientWidth / 2
      let top = offsetY - mask.clientHeight / 2
      if (top <= 0) {
        top = 0
      }
      if (left <= 0) {
        left = 0
      }
      if (offsetX >= maxOffsetX) {
        left = maxOffsetX - mask.clientWidth / 2
      }
      if (offsetY >= maxOffsetY) {
        top = maxOffsetY - mask.clientHeight / 2
      }
      mask.style.left = left + "px"
      mask.style.top = top + "px"
      big.style.left = -2 * left + "px"
      big.style.top = -2 * top + "px"
    }
  },
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
