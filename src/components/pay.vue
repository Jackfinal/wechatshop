<template>
  <div class="pay">
    <h1 v-text="site.SITE_TITLE"></h1>
    <div class="paynumber">
      <mt-field label="消费金额" placeholder="请输入消费金额" :attr="{max: 10000, min: 1 }" type="number" v-model="total"></mt-field>
      <mt-field label="不参与优惠金额" placeholder="如果有，请输入" type="number" v-model="ntotal"></mt-field>
      <mt-field label="积分抵扣(可用积分100)" placeholder="如果有，请输入" type="number" v-model="jtotal"></mt-field>
      <mt-checklist
        align="right"
        title="优惠券"
        v-model="value"
        :options="options" >
      </mt-checklist>
      <p>如果有疑问请查看<span>《支付说明》</span></p>


      <div class="button-div"><mt-button type="danger" size="large">微信支付</mt-button></div>
    </div>
  </div>

</template>
<script>
import store from '../store'
export default {
  name: 'pay',
  data() {
    return {
      site: store.state.site,
      user: store.state.user,
      options: [],
      value: [0],
      number: '',
      total: '',
      ntotal: '',
      jtotal: ''
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
    this.options = options
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
