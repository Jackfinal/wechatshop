<template>
  <div class="pay">
    <h1>chuanchaun</h1>
    <div class="paynumber">
      <mt-field label="消费金额" placeholder="请输入消费金额" :attr="{max: 10000, min: 1 }" type="number" v-model="number"></mt-field>
      <mt-field label="不参与优惠金额" placeholder="如果有，请输入" type="number" v-model="number"></mt-field>
      <div class="switch"><mt-switch v-model="value">积分抵扣 <span class="jifen">100</span></mt-switch></div>
      <p>如果有疑问请查看<span>《支付说明》</span></p>
      <div class="list-yhj">
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="button-div"><mt-button type="danger" size="large">微信支付</mt-button></div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'pay',
  data() {
    return {

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
.pay .switch .jifen{color: red}
.pay p{ padding: 0.5rem;font-size: 0.2rem }
.pay p span{color: #26a2ff;}
.pay .button-div{ padding: 0px 0.3rem}
.pay .mint-button--large{background-color: #00c800;}
</style>
