<template>
  <div id="piaonav" class="sidebar">
    <div class="side" v-for="(cailan,index) in cailans" :key="cailan.id" v-on:click="reads(index)"
         v-bind:class="{chh: changeE == index}">
      {{cailan.name}}
      <i v-if="changeE == index" class="tuu2 icon-changyonglogo40"></i>
      <i v-else class="tuu icon-yuandianxiao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'piaonav',
  props: {
    cailans: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      changeE: -1
    }
  },
  methods: {
    reads: function (index) {
      this.changeE = index
    }
  }
}
</script>

<style scoped>
  .tuu {
    font-size: 15px;
  }

  .tuu2 {
    font-size: 20px;
  }

  .chh {
    color: #0089dc;
  }
  .sidebar {
    float: left;
    border-right: 1px solid rgba(150, 152, 150, 0.33);
  }

  .sidebar div {
    display: block;
    margin: 100px -9px 100px 240px;
    cursor: pointer;
  }
</style>
