<template>
  <div class="index">
    <mt-swipe :auto="0">
      <mt-swipe-item><img src="../assets/images/topimg.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/topimg.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/topimg.jpg" /></mt-swipe-item>
    </mt-swipe>
    <div class="title">
      <h1>花串串</h1>
      <p>
火锅<br />花串串，一家专门做火锅的串串店
      </p>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">优惠</mt-tab-item>
      <mt-tab-item id="2">商家</mt-tab-item>
      <mt-tab-item id="3">我的</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="再优惠" value="无可有优惠卷" is-link to="/"></mt-cell>
        <ListPic title="积分兑换" ftitle="无可兑换" items="[1,2]" link="/"></ListPic>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        3
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import ListPic from './common/listpic.vue'

export default {
  name: 'index',
  components: {
    ListPic
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style>
.mint-swipe,.mint-swipe-item,.mint-swipe-item img{
  height: 3.2rem;
}
.mint-swipe-indicator{background: #e7decf}
.mint-swipe-item img{width: 100%}

.index .title{
  padding: 0rem 0.4rem;
  background-color: #fff;
  overflow: hidden;
}
.index .title h1{color:#3d4959}
.index .title p{color: #929699; margin-bottom: 0.4rem}
.mint-tab-container-item{ padding: 0.15rem}
.mint-navbar{margin-top: 0.1rem}
</style>
