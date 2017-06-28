<template>
  <footer v-show="footerShow">
    <div class="close"  @click="footerShow=0" >
      <svg class="icon"aria-hidden="true">
          <use xlink:href="#icon-close"></use>
      </svg>
    </div>
    <div class="weixin"><img src="../../assets/images/weixin.png" align="center" /></div>
    <router-link to="/pay"><mt-button type="primary">立即买单</mt-button></router-link>
  </footer>
</template>
<script>
  import store from '../../store'
  export default{
    name:'footer',
    data() {
      return {
        footerShow:store.state.showFooter
      }
    }
  }
</script>
<style>
footer{position: fixed; bottom: 0;height: 1.3rem; opacity: 0.8;background-color: #fff;width: 100%;box-shadow: 0px -0.02rem 0.1rem #929699;}
footer .close,footer .weixin{display: inline-block;}
footer .close{ margin: 0.1rem 0 0 0.4rem}
footer .weixin{margin: 0rem 0 0 0.2rem}
footer .weixin img{ width: 2.2rem;}
footer .mint-button--normal{margin: 0.25rem 0 0 1rem; background-color: #00c800}
</style>
