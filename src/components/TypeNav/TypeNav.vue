<template>
  <!-- 商品分类导航 -->
  <div class="type-nav" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="container">
      <h2 class="all" >全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2">
            <div class="item " v-for="(item) in categoryList" :key="item.categoryId">
              <h3>
                <a href="" @click.prevent="handleGoSearch('category1Id',item)">{{ item.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="child in item.categoryChild" :key="child.categoryId">
                  <dl class="fore">
                    <dt>
                      <a @click.prevent="handleGoSearch('category2Id',child)">{{ child.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="last in child.categoryChild" :key="last.categoryId">
                        <a @click.prevent="handleGoSearch('category3Id',last)">{{ last.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TypeNav",
  props: {
    show: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    })
  },
  methods: {
    handleGoSearch(type, {categoryName, categoryId}) {
      const query = {}
      query.categoryName = categoryName
      query[type] = categoryId
      this.$router.push({
        name: 'search',
        query,
        params: {
          keyword: this.$route.params.keyword || "undefined",
        },
      })
    },
    handleMouseEnter() {
      this.$emit('mouseEnter')
    },
    handleMouseLeave() {
      this.$emit('mouseLeave')
    },
  },
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background: skyblue;

            .item-list {
              display: block;
            }
          }
        }
      }
    }

    .sort-enter {
      height: 0;
    }

    .sort-leave {
      height: 461px;
    }

    .sort-enter-active {
      transition: height 0.5s;
    }
  }
}

</style>
