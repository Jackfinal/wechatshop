<template>
  <div class="contents">
    <mt-popup
    v-model="popupVisible"
    popup-transition="popup-fade">
    ...
  </mt-popup>
  </div>
</template>
<script>
import ListPic from './common/listpic.vue'
import Footer from './common/footer.vue'
import Shop from './common/shop.vue'
export default {
  name: 'coupon',
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
.footer{padding: 0.5rem 0}
.mint-cell{ background-color: #f3f4f8;background: linear-gradient(#e1e8f0, #f3f4f8);}
.b a{ display: inline-block;width: 50%; text-align: center; margin-top: 0.5rem}
.b a span{ color: red}
</style>
