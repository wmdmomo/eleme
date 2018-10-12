<template>
  <div id="app">
    <v-head></v-head>
    <div class="zong">
      <div class="show">
        <div class="tab" v-on:click="r1=true,r2=r3=false" v-bind:class="{changec:r1}">
          <router-link to="/food">所有商品</router-link>
        </div>
        <div class="tab" v-on:click="r2=true,r1=r3=false" v-bind:class="{changec:r2}">
          <router-link to="/common">评价</router-link>
        </div>
        <div class="tab" v-on:click="r3=true,r1=r2=false" v-bind:class="{changec:r3}">
          <router-link to="/common">商家资质</router-link>
        </div>
      </div>
      <div class="show2">
        <ul>
          <li v-for="biaoti in biaotis" :key="biaoti.id">
            {{biaoti.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="piao">
      <piaofu></piaofu>
    </div>
    <router-view/>
  </div>
</template>

<script>
import head from './components/head/head.vue'
import piaofu from './components/piaofu/piaofu'
export default {
  name: 'App',
  data () {
    return {
      r1: true,
      r2: false,
      r3: false,
      biaotis: [
        {name: '默认排序'},
        {name: '评分'},
        {name: '销量'},
        {name: '价格'}
      ]
    }
  },
  components: {
    'v-head': head,
    'piaofu': piaofu
  }
}
</script>

<style>
  .zong{
    margin:0 30% 0 20%;
  }
  .show{
    display: inline-block;
    margin-top: 15px;
  }
  .show2{
    float:right;
    display: inline-block;
    margin-top: 0;
  }
  .show2 ul li{
    display: inline-block;
    margin-left: 20px;
  }
  .tab{
    display:inline-block;
    font-size: 20px;
    cursor: pointer;
  }
  .tab a{
    margin-left: 30px;
    text-decoration: none;
    color: black;
    padding-right: 45px;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
  .changec a{
    color:#0089dc;
  }
  .changec{
    padding-bottom: 20px;
    border-bottom: 3px solid #0089dc;
  }
  .piao{
    position: fixed;
    right:1%;
    top:40%;
  }
</style>
