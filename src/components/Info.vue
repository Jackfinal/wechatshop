<template>
  <div class="contents">
    <div class="banner"><img src="http://img.home.ahrmt.com/uploads/news/2017/0605/1496651115594330.jpg"></div>
    <h1>6月2日，市民在刘铭传漫画展上进行拍摄。</h1>
    <div class="time">2017-08-20</div>
          	<p style="text-align: center;">
              <img src="http://img.home.ahrmt.com/uploads/news/2017/0605/1496651115594330.jpg"></p>
              <p style="text-align: center;">6月2日，市民在刘铭传漫画展上进行拍摄。</p>
              <p><br></p>
              <p style="text-indent: 2em;">6月1日，“铭记历史、传承精神”台湾首任巡抚刘铭传漫画展在刘铭传故乡安徽合肥的安徽名人馆开展。本次展出的99幅漫画由台湾漫画家协会理事长杨心怡创作，取材于安徽刘铭传研究会副会长孙迪编撰的刘铭传“抗法保台、建设台湾”的99个历史故事。新华社记者 郭晨 摄</p>

    <div class="footer">
      <mt-cell title="花串串" is-link to="/"></mt-cell>
      <div class="b"><a href=""><span>1</span><br />再惠卷</a><a href=""><span>2</span><br />积分</a></div>
    </div>
  </div>
</template>
<script>
import ListPic from './common/listpic.vue'
import Footer from './common/footer.vue'
import Shop from './common/shop.vue'
export default {
  name: 'info',
  components: {
    ListPic,
    Footer,
    Shop
  },
  data () {
    return {
      selected: '1'
    }
  },
  created() {
    this.init();
  },
  methods:{
    init:function(){
      console.log(this.$route.params.id);
    }
  }
}
</script>

<style>
.contents{
 background-color: #fff;
 height: 100%;
 color: #5a6470;
}
.contents h1{font-size: 0.4rem; margin: 0.3rem 0; padding: 0 0.2rem}
.contents img{width: 7.2rem!important;}
.time{ padding: 0.3rem 0.2rem}
.banner img{ }
body{  background-color: #fff;}

</style>
