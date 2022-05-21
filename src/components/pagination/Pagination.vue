<template>
  <div class="pagination">
    <button @click="handleClick(pageNo-1)" v-if="pageNo!==1">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="handleClick(1)">1</button>
    <button v-if="startNumAndEndNum.start>2">...</button>


    <template v-for="item in startNumAndEndNum.end">
      <button
          :key="item"
          v-if="item>=startNumAndEndNum.start"
          @click="handleClick(item)"
          :class="{active:item===pageNo}"
      >
        {{ item }}
      </button>
    </template>

    <button v-if="startNumAndEndNum.end<totalPage-1">...</button>
    <button v-if="startNumAndEndNum.end<totalPage" @click="handleClick(totalPage)">{{ totalPage }}</button>
    <button @click="handleClick(pageNo+1)" v-if="pageNo!==totalPage">下一页</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      let start = 0
      let end = 0

      if (this.totalPage < this.continues) {
        //不足最小页数
        start = 1
        end = this.totalPage
      } else {
        const step = Math.floor(this.continues / 2)
        start = this.pageNo - step
        end = this.pageNo + step
        if (start < 1) {
          start = 1
          end = this.continues
        }
        if (end > this.totalPage) {
          end = this.totalPage
          start = end - this.continues
        }
      }

      return {start, end}
    },
  },
  methods: {
    handleClick(i) {
      if (i === this.pageNo) {
        return
      }
      this.$emit('pageChange', i)
    }
  },
}
</script>


<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background: skyblue;
}
</style>

