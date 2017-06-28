<template>
  <div class="centerweixin">
    <mt-button icon="back" @click.native="back">返回</mt-button>
    <mt-button icon="more" @click.native="jump">首页</mt-button>

  </div>
</template>
<script>
import {weiXinRedirect} from '../api'
import { Indicator,Toast } from 'mint-ui';
import store from '../store';
export default {
  name: 'weixin',
  created() {
    this.init();
  },
  methods: {
    init: function(){
      Indicator.open('Loading...');
      let code = this.getQueryString('code');
      if(!code)
      {
        Indicator.close();
        Toast({
          message: '参数不对！',
          position: 'bottom',
          duration: 5000
        });
        Indicator.close();
        return ;
      }
      weiXinRedirect({code:code}).then(res=> {
        store.dispatch('saveUser', res);
        this.jump();
        Indicator.close();
      })

      console.log(this.$route.query.code);
    },
    back: function(){
      this.$router.back(-1)
    },
    jump: function(){
      window.location.href= '/';
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }



}
</script>

<style>
.centerweixin{
text-align: center;
margin-top: 45%;
}
</style>
