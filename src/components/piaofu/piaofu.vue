<template>
    <div id="piaofu">
      <div class="two">
        <span v-if="dian==true" class="open">{{dianflag}}</span>
        <i v-on:mouseenter="enter" v-on:mouseleave="leave" class="dian icon-dianpu"></i>
        <span  v-if="ma==true" class="open2"><img :src="maflag"></span>
        <i v-on:mouseenter="enter2" v-on:mouseleave="leave2" class="ma icon-erweima"></i>
      </div>
      <div class="one">
        <i class="up icon-jiantoushang"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'piaofu',
  data () {
    return {
      dian: false,
      dianflag: '我要开店',
      ma: false,
      maflag: '../../static/img/e.png'
    }
  },
  methods: {
    enter: function () {
      this.dian = true
    },
    leave: function () {
      this.dian = false
    },
    enter2: function () {
      this.ma = true
    },
    leave2: function () {
      this.ma = false
    }
  }
}
</script>
<style scoped>
   i{
     font-size: 25px;
     display: block;
     background-color: white;
     border: 1px solid #ebebeb;
     width: 40px;
     line-height: 38px;
     text-align: center;
     color: #666666;
  }
  .one{
    margin-top: 10px;
  }
  i:hover{
    color:red;
    cursor: pointer;
  }
  .open{
    background-color: rgba(51, 51, 51, 0.55);
    color: white;
    position: fixed;
    right:80px;
    top:41%;
    font-size: 15px;
    padding: 8px;
  }
  .open2{
    position: fixed;
    right:80px;
    top:42%;
  }
  .open2 img{
    width:120px;
    height: 120px;
  }
</style>
