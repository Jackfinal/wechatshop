<template>
  <div class="contents">
    <div class="banner" v-if="info.thumb"><img :src="info.thumb"></div>
    <h1 v-text="info.title"></h1>
    <div class="time" v-text="info.updatetime"></div>
    <div class="content" v-html="info.content">

    </div>

    <div class="footer">
      <mt-cell :title="site.SITE_TITLE" is-link to="/"></mt-cell>
      <div class="b"><a href=""><span>1</span><br />再惠卷</a><a href=""><span>2</span><br />积分</a></div>
    </div>
  </div>
</template>
<script>
import {GetInfo} from '../api';
import store from '../store';
export default {
  name: 'info',
  components: {
    GetInfo
  },
  data () {
    return {
      selected: '1',
      info: [],
      site: []
    }
  },
  created() {
    this.init();
    this.site = store.state.site
  },
  methods:{
    init:function(){
      let id = (this.$route.params.id);
      GetInfo({id:id,attr:'news'}).then(res=> {
        this.info = res;
      })
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
.contents img{width: 100%!important;}
.time{ padding: 0.3rem 0.2rem}
.banner img{ }
.content{ padding: 0 0.2rem; line-height: 0.5rem}

</style>
