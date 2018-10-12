<template>
  <div id="food">
    <div class="sidepiao">
      <piaonav v-bind:cailans="cailans"></piaonav>
    </div>
    <div class="neirong" v-for="cailan in cailans" :key="cailan.id">
      <div class="title">
        {{cailan.name}}
      </div>
      <div class="caiinfo" v-for="caiinfo in cailan.caiinfos" :key="caiinfo.id">
        <span class="tu">
              <img :src="caiinfo.tu">
            </span>
        <div class="jie">
          <p>{{caiinfo.cname}}</p>
          <span>{{caiinfo.cway}}</span>
          <div class="start">
            <i class="icon-shoucangfill" v-for="n in caiinfo.score" :key="n.id"></i>
          </div>
          <i class="red">￥{{caiinfo.prince}}</i>
          <button v-if="caiinfo.count==0" class="car" v-on:click="seletfood(caiinfo)">加入购物车</button>
          <el-input-number v-on:click="popp(caiinfo)" class="car2" v-else v-model="caiinfo.count" @change="handleChange" ></el-input-number>
        </div>
      </div>
    </div>
    <shopcar v-bind:sprice="sprice" v-bind:selectedfood="selectedfood" v-on:empty="emptyfood"></shopcar>
  </div>
</template>

<script>
import Piaonav from '@/components/piaonav/piaonav'
import Shopcar from '@/components/shopcar/shopcar'
export default {
  name: 'food',
  data () {
    return {
      sprice: 3,
      changeE: -1,
      selectedfood: [],
      cailans: [
        {
          name: '热销',
          caiinfos: [
            {
              tu: '../../static/img/1.jpg',
              cname: '意式经典培根凯撒沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 5,
              prince: 32,
              count: 0
            },
            {
              tu: '../../static/img/2.jpg',
              cname: '经典烟熏牛肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 46,
              count: 0
            },
            {
              tu: '../../static/img/3.jpg',
              cname: '烟熏鸡胸肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 40,
              count: 0
            },
            {
              tu: '../../static/img/4.jpg',
              cname: '咖哩鸡肉饭',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 5,
              prince: 28,
              count: 0
            },
            {
              tu: '../../static/img/5.jpg',
              cname: '椰蓉球',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 3,
              prince: 27,
              count: 0
            }
          ]
        },
        {
          name: '优惠',
          caiinfos: [
            {
              tu: '../../static/img/6.jpg',
              cname: '意式经典培根凯撒沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 47,
              count: 0
            },
            {
              tu: '../../static/img/7.jpg',
              cname: '经典烟熏牛肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 5,
              prince: 15,
              count: 0
            },
            {
              tu: '../../static/img/8.jpg',
              cname: '烟熏鸡胸肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 29,
              count: 0
            },
            {
              tu: '../../static/img/9.jpg',
              cname: '咖哩鸡肉饭',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 3,
              prince: 32,
              count: 0
            },
            {
              tu: '../../static/img/10.jpg',
              cname: '椰蓉球',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 3,
              prince: 41,
              count: 0
            }
          ]
        },
        {
          name: '主食',
          caiinfos: [
            {
              tu: '../../static/img/11.jpg',
              cname: '意式经典培根凯撒沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 28,
              count: 0
            },
            {
              tu: '../../static/img/12.jpg',
              cname: '经典烟熏牛肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 2,
              prince: 24,
              count: 0
            },
            {
              tu: '../../static/img/13.jpg',
              cname: '烟熏鸡胸肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 3,
              prince: 21,
              count: 0
            },
            {
              tu: '../../static/img/14.jpg',
              cname: '咖哩鸡肉饭',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 5,
              prince: 19,
              count: 0
            },
            {
              tu: '../../static/img/15.jpg',
              cname: '椰蓉球',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 42,
              count: 0
            }
          ]
        },
        {
          name: '小食',
          caiinfos: [
            {
              tu: '../../static/img/16.jpg',
              cname: '马卡龙',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 48,
              count: 0
            },
            {
              tu: '../../static/img/17.jpg',
              cname: '经典烟熏牛肉披萨',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 2,
              prince: 26,
              count: 0
            },
            {
              tu: '../../static/img/18.jpg',
              cname: '面包丁鸡胸肉沙拉',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 3,
              prince: 39,
              count: 0
            },
            {
              tu: '../../static/img/19.jpg',
              cname: '红鱼籽寿司',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 5,
              prince: 15,
              count: 0
            },
            {
              tu: '../../static/img/20.jpg',
              cname: '香酥鸡米花',
              cway: '培根250kcal、鸡蛋50kcal、圣女果11kcal',
              score: 4,
              prince: 14,
              count: 0
            }
          ]
        }
      ]
    }
  },
  components: {
    Shopcar,
    Piaonav
  },
  methods: {
    seletfood: function (food) {
      food.count++
      if (food.count === 1) {
        this.selectedfood.push(food)
      }
    },
    emptyfood: function () {
      this.selectedfood = []
    },
    popp: function (food) {
      if (food.count === 0) {
        this.selectedfood = []
      }
    }
  }
}
</script>
<style scoped>
  #food {
    background-color: rgba(150, 152, 150, 0.13);
  }
  .neirong {
    margin: 30px 20% 0 20%;
  }
  .title {
    font-size: 23px;
    font-weight: lighter;
  }

  .caiinfo {
    width: 45%;
    height: 150px;
    border: 1px solid #eee;
    background-color: rgba(255, 255, 255, 0.81);
    margin: 10px;
    display: inline-block;
  }

  .caiinfo span img {
    width: 100%;
    height: 100%;
  }

  .tu {
    width: 180px;
    height: 150px;
    float: left;
  }

  .jie {
    display: inline-block;
    margin-left: 10px;
  }

  .jie p {
    font-weight: bold;
  }

  .jie span {
    color: #999;
  }

  .start i {
    color: #ffc30c;
    position: relative;
    top: 8px;
  }

  .red {
    color: red;
    font-weight: bold;
    position: relative;
    top: 15px;
  }

  .car {
    background-color: #0089dc;
    color: #fff;
    cursor: pointer;
    border: none;
    width: 90px;
    height: 26px;
    border-radius: 20px;
    text-align: center;
    position: relative;
    left: 120px;
    bottom: -10px;
    outline: none;
  }
  .car2{
    width: 120px;
    height: 24px;
    position: relative;
    left: 120px;
    bottom: -10px;
  }
  .sidepiao{
    position: fixed;
    left:0;
    top:32%;
  }
</style>
