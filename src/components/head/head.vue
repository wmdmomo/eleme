<template>
  <div id="head">
    <div class="nav" :style ="note">
      <div class="shaw">
        <div class="contnet">
      <ul>
        <li v-for="zhuti in zhutis" :key="zhuti.id">
          <i v-if="zhuti.name=='饿了么'" class=" eee icon-changyonglogo40"></i>
          {{zhuti.name}}
        </li>
      </ul>
      <ul class="right">
        <li v-for="zhuti in zhuti2s" :key="zhuti.id">
          <i v-if="zhuti.name=='手机应用'" class="phone icon-44"></i>
          {{zhuti.name}}
        </li>
      </ul>
      </div>
      </div>
      <div class="shop-info">
        <div class="simg">
          <img :src="pic">
          <div class="zi">
            <p>{{storename}}</p>
            <div class="xing">
              <i class="icon-shoucangfill" v-for="n in score"  :key="n.id"></i>
              <span>{{score}}分</span>
            </div>
          </div>
        </div>
        <div class="mes">
          <ul>
            <li>
              起送价
              <span>{{sprice}}元</span>
            </li>
            <li>
              配送费
              <span>配送费￥{{fee}}</span>
            </li>
            <li>
              平均送达速度
              <span>{{speed}}分钟</span>
            </li>
          </ul>
          <div class="xin">
            <i class="icon-xiangqufill" v-on:click="gaibian=!gaibian" v-bind:class="{change:gaibian}"></i>
            <span>收藏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      note: {
        backgroundImage: 'url(' + '../../static/img/beijing.jpg' + ') ',
        backgroundRepeat: 'no-repeat'
      },
      gaibian: false,
      zhutis: [
        {name: '饿了么'},
        {name: '首页'},
        {name: '我的订单'},
        {name: '加盟合作'},
        {name: '我的客服'}
      ],
      zhuti2s: [
        {name: '规则中心'},
        {name: '手机应用'}
      ],
      storename: '叫个沙拉',
      pic: '../../static/img/store.png',
      sprice: 15,
      fee: 3,
      speed: 37,
      score: 5
    }
  }
}

</script>

<style scoped>
  .nav{
    color: #fff;
  }
  .shaw{
    background-color: rgba(0, 0, 0, 0.4);
  }
  .phone{
    font-size: 25px;
    position: relative;
    top:5px;
  }
  .eee{
    font-size: 30px;
    position: relative;
    top:5px;
  }
  .contnet{
    margin:0 20% 20px 20%;
  }
  ul{
    display: inline-block;
  }
  ul li{
    display: inline-block;
    margin-left: 25px;
  }
  .right{
    float:right;
  }
  .shop-info{
    margin: 0 20% 0 20%;
    padding-bottom: 22px;
  }
  .simg{
    display: inline-block;
  }
  .simg img{
    border-radius: 50%;
    border: 2px solid rgba(139, 69, 19, 0.71);
    vertical-align: middle;
  }
  .zi{
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
  }
  .zi p{
    font-size: 20px;
  }
  .xing i{
    color: #ffc30c;
  }
  .mes{
    display: inline-block;
    float:right;
  }
  .mes ul li{
    margin-left: 40px;
  }
  .mes span{
    display: block;
    font-size: 21px;
    margin-top: 10px;
  }
  .xin{
    float: right;
    display: inline-block;
    background-color: rgba(150, 152, 150, 0.25);
    margin-top: -20px;
    margin-left: 40px;
    width:85px;
    height: 85px;
  }
  .xin i{
    position: relative;
    left:30px;
    top:20px;
    cursor: pointer;
  }
  .xin span{
    font-size: 13px;
    display: block;
    position: relative;
    left:25px;
    top:15px;
  }
  .change{
    color:red;
  }
</style>
