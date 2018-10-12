<template>
  <div id="shopcar" class="bottom-car">
    <div class="cartitle">
      <span class="gou">购物车</span>
      <span class="clearc" v-on:click="clearshop">[清空]</span>
      <span><i class="jiaru icon-jiarugouwuche"></i></span>
    </div>
    <div class="shopshop" v-for="sf in selectedfood" :key="sf.id">
      {{sf.cname}}
      {{sf.count}}
    </div>
    <div class="cartu">
      <div class="tuleft">
          <span>
            <i class="peisongcar icon-gouwuche"></i>
            <el-badge v-if="totalCount!=0" :value="totalCount" class="item">
            </el-badge>
          </span>
        <span v-if="totalCount!=0"  class=" total">￥{{totalPrice}}</span>
        <span class="peisong">配送费￥{{sprice}}</span>
      </div>
      <div v-if="totalCount==0" class="turight">
        购物车是空的
      </div>
      <div v-else v-on:click="jiezhang" class="turight2">
        去结算>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcar',
  props: {
    sprice: {
      type: String,
      required: true
    },
    selectedfood: {
      type: Array,
      default () {
        return []
      }
    }
  },
  // data () {
  //   return {
  //     countnum: 0
  //   }
  // },
  methods: {
    clearshop () {
      this.selectedfood.forEach((food) => {
        food.count = 0
      })
      this.$emit('empty')
    },
    jiezhang () {
      let total = 200
      total = this.totalPrice + this.sprice
      alert('总价是' + '￥' + total)
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectedfood.forEach((food) => {
        total += food.prince * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectedfood.forEach((food) => {
        count += food.count
      })
      return count
    }
  }
}
</script>

<style scoped>
  .total{
    font-weight: bolder;
    color: white;
    font-size: 20px;
  }
  .bottom-car {
    position: fixed;
    bottom: 0;
    right: 1%;
    width:300px;
  }
  .shopshop{
    background-color: white;
    padding: 5px 2px 10px 5px;
    font-size: 13px;
    font-weight: lighter;
    border-bottom: 1px solid #fafafa;
  }
  .jiaru {
    font-size: 28px;
    float: right;
    margin-right: 20px;
    color: #0086b3;
    cursor: pointer;
    line-height: 35px;
  }

  .clearc {
    color: #0086b3;
    font-size: 15px;
    cursor: pointer;
  }

  .cartu {
    line-height: 40px;
  }

  .tuleft {
    display: inline-block;
    background-color: #333333;
    height: 40px;
    float: left;
    width:60%;
  }

  .turight {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.33);
    color: #000000;
    height: 40px;
    float: right;
    font-size: 15px;
    width:40%;
    text-align: center;
  }
  .turight2 {
    display: inline-block;
    background-color:  #51d862;
    color:  #fff;
    height: 40px;
    float: right;
    font-size: 15px;
    width:40%;
    text-align: center;
    cursor: pointer;
  }

  .peisongcar {
    font-size: 18px;
    padding-right: 12px;
    color: whitesmoke;
  }

  .peisong {
    font-size: 12px;
    border-left: 1px solid #555;
    padding-left: 5px;
    color: #999;
  }

  .cartitle {
    height: 45px;
    background-color:#fafafa;
    border-top: 3px solid #0086b3;
  }

  .gou {
    font-size: 15px;
    margin-left: 5px;
    line-height: 35px;
  }
</style>
