<template>
  <div id="common">
    <div class="neirong">
      <div class="title">
          <span v-for="(title,index) in titiles" :key="title.id" class="biaoti" v-on:click="read(index)"
                v-bind:class="{ch: changeR == index}">
            {{title.name}}
          </span>
      </div>
      <div class="tab">
        <div class="tabinfo" v-for="comment in comments" :key="comment.id">
          <div class="tu">
            <img v-if="comment.type==0" src="./33.jpg">
            <img v-if="comment.type==1" src="./1.png">
          </div>
          <div class="jiben">
            <span>{{comment.username}}</span>
            <i v-for="n in comment.rate" class="hao icon-hua" :key="n.id"></i>
            <span>{{comment.speed}}分钟送达</span>
          </div>
          <div class="atime">{{comment.time}}</div>
          <div class="waiinfo">
            <div v-for="cai in comment.cais" :key="cai.id" class="waimai">
              <div class="text">
                {{cai.name}}
                <i v-for="n in cai.pd" class="hao icon-xiao" :key="n.id"></i>
                <span v-if="cai.pd>=5">惊喜</span>
                <span v-else-if="cai.pd<5&&cai.pd>=3">满意</span>
                <span v-else>差评</span>
              </div>
            </div>
          </div>
          <div class="maijia">
            <p>{{huiti}}</p>
            {{huifu}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      titiles: [
        {
          name: '全部'
        },
        {name: '满意'
        },
        {name: '不满意'
        },
        {name: '有图'}
      ],
      changeR: -1,
      huiti: '商家回复 ：',
      huifu: '亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！',
      comments: [
        {
          username: '6*********0',
          type: 0,
          rate: 6,
          speed: 30,
          cais: [
            {name: '水煮蛋',
              pd: 2},
            {name: '紫薯泥',
              pd: 5},
            {name: '底菜（不送酱汁）',
              pd: 6}
          ],
          time: '2018-10-07 12:00:00'
        },
        {
          username: '3*********0',
          type: 0,
          rate: 4,
          speed: 40,
          cais: [
            {name: '培煎芝麻酱',
              pd: 3},
            {name: '蟹肉块',
              pd: 2},
            {name: '蟹柳牛肉沙拉（新）-千岛酱',
              pd: 5}
          ],
          time: '2018-10-06 12:00:00'
        },
        {
          username: '3*********3',
          type: 0,
          rate: 4,
          speed: 20,
          cais: [
            {name: '龙利鱼&鸡胸肉&黄桃沙拉（新）-芝麻酱',
              pd: 3}
          ],
          time: '2018-10-05 12:00:00'
        },
        {
          username: '4*********e',
          type: 0,
          rate: 3,
          speed: 50,
          cais: [
            {name: '意式经典培根凯撒沙拉',
              pd: 5}
          ],
          time: '2018-10-04 12:00:00'
        },
        {
          username: '匿名',
          type: 1,
          rate: 1,
          speed: 20,
          cais: [
            {name: '虾蟹双拼营养满分沙拉',
              pd: 5}
          ],
          time: '2018-10-03 12:00:00'
        },
        {
          username: '匿名',
          type: 1,
          rate: 5,
          speed: 30,
          cais: [
            {name: '经典烟熏牛肉沙拉',
              pd: 3},
            {name: '火腿培根三明治-火腿培根三明治',
              pd: 5}
          ],
          time: '2018-10-01 12:00:00'
        }
      ]
    }
  },
  methods: {
    read: function (index) {
      this.changeR = index
    }
  }
}
</script>

<style scoped>
  .ch{
    background-color: white;
  }
  #common{
    background-color: rgba(150, 152, 150, 0.13);
  }
  .neirong{
    margin:20px 20% 0 20%;
  }
  .title span{
    margin-bottom:10px;
  }
  .biaoti{
    display: inline-block;
    width:90px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.85);
    font-size: large;
    cursor: pointer;
    height: 40px;
    padding-top: 20px;
  }
  .tu{
    display: inline-block;
    margin:20px;
  }
  .tu img{
    width:80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.22);
    display: inline-block;
  }
  .tabinfo{
    margin-bottom: 30px;
    padding-bottom: 15px;
    background-color: white;
  }
  .jiben{
    display: inline-block;
    font-size: 15px;
    position: relative;
    top:-30px;
  }
  .jiben span{
    display: block;
  }
  .atime{
    float: right;
    font-size: 14px;
    font-weight: lighter;
    margin:20px;
  }
  .hao{
    display: inline-block;
    color: #eb6643;
    margin-right: 5px;
  }
  .waiinfo{
    font-size: 15px;
  }
  .waimai{
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid #f7f7f7;
  }
  .text{
    margin-left: 12%;
  }
  .text span{
    color: indianred;
  }
  .maijia{
    font-size: 15px;
    background-color: #f7f7f7;
    padding: 10px;
    margin:20px 12% 20px 12%;
    position: relative;
    border-radius: 6px;
  }
  .maijia p{
    margin-top: 0;
  }
</style>
