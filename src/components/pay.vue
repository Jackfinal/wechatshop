<template>
  <div class="pay">
    <h1 v-text="site.SITE_TITLE"></h1>
    <div class="paynumber">
      <mt-field label="消费金额" placeholder="请输入消费金额" :attr="{max: 10000, min: 1 }" type="number" v-model="total"></mt-field>
      <mt-field label="不参与优惠金额" placeholder="如果有，请输入" type="number" v-model="ntotal"></mt-field>
      <mt-field label="积分抵扣(可用积分100)" :placeholder="'可使用积分：'+user.credits" type="number" :attr="{max: user.credits, min: 0 }" v-model="jtotal"></mt-field>
      <mt-checklist
        align="right"
        title="优惠券"
        v-model="value"
        :options="options" :max='1' >
      </mt-checklist>
      <p>如果有疑问请查看<span>《支付说明》</span></p>


      <div class="button-div" @click="submit"><mt-button type="danger" size="large">微信支付</mt-button></div>
    </div>
  </div>

</template>
<script>
import store from '../store'
import { Indicator,Toast } from 'mint-ui';
import {weiXinPay, weiXinPaySuccess} from '../api';
export default {
  name: 'pay',
  data() {
    return {
      site: store.state.site,
      user: store.state.user,
      options: [],
      value: [],
      number: '',
      total: '',
      ntotal: '',
      jtotal: ''
    }
  },
  computed: {
    getFrom: function(){
      if(!this.total || this.total <= 0)
      {
        Toast('请输入金额');
        return false;
      }
      if(this.jtotal > this.user.credits)
      {
        Toast('你的可用积分为：' + this.user.credits);
        return false;
      }
      if(this.value.length > 1)
      {
        Toast('优惠券不可重叠！');
        return false;
      }
      if(this.ntotal > this.total)
      {
        Toast('不参与优惠的金额不能大于总金额！');
        return false;
      }
      if(!this.user)
      {
        Toast('请登陆后，重试');
        return false;
      }
      let data = {
        total: this.total,
        ntotal: this.ntotal,
        jtotal: this.jtotal,
        value: this.value,
        userid: this.user.id,
        openid: this.user.openid
      }
      return data;
    }
  },
  created() {
    let options = [];
    for (var i in this.user.yhj) {
      options[i] = {
        label: this.user.yhj[i]['title'],
        value: this.user.yhj[i]['id']
      }
    }
    this.options = options;
  },
  methods: {
    submit: function(){


      let data = this.getFrom;
      if(!data)return false
      weiXinPay(data).then(res=> {

        if (typeof WeixinJSBridge == "undefined"){
           if( document.addEventListener ){
               document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
           }else if (document.attachEvent){
               document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
               document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
           }
        }else{
           this.onBridgeReady(res);
        }
      })
    },
    onBridgeReady:function(result) {
      let id = result.id;
      delete result.id;
      let _this = this;
      WeixinJSBridge.invoke(
       'getBrandWCPayRequest',  result,
       function(res){
           if(res.err_msg == "get_brand_wcpay_request:ok" ) {
             weiXinPaySuccess({id:id,openid:_this.user.openid}).then(res=> function(){

             })
             Toast('支付成功！');

           }else {
             Toast('支付失败，请稍后再试！');
           }
       }
   );
    }
  }
}
</script>
<style>
.pay .mint-cell-wrapper{ font-size: 0.25rem}
.pay h1{ text-align: center; font-size: 0.4rem; height: 1rem; line-height: 1rem; font-weight: normal;}
.pay .mint-cell{ border-top: 1px solid #ccc}
.pay .mint-field-core{ text-align: right;}
.pay .mint-switch{float: right; margin-top: 8px; margin-right: 10px;}
.pay .switch{ background-color: #fff; border-top: 1px solid #ccc; min-height: 48px;font-size: 0.2rem}
.pay .jifen{color: red}
.pay p{ padding: 0.5rem;font-size: 0.2rem }
.pay p span{color: #26a2ff;}
.pay .button-div{ padding: 0px 0.3rem}
.pay .mint-button--large{background-color: #00c800;}
</style>
