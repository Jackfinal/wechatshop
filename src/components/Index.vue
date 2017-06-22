<template>
  <div class="index">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item,index) in listBanner"><img :alt="item.title" :src="item.thumb" /></mt-swipe-item>
    </mt-swipe>
    <div class="title">
      <h1 v-wechat-title="siteInfo.SITE_TITLE">{{siteInfo.SITE_TITLE}}</h1>
      <p>
{{siteInfo.SITE_KEYWORDS}}<br />{{siteInfo.SITE_DESCRIPTION}}
      </p>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bullhorn"></use>
        </svg>
        优惠
      </mt-tab-item>
      <mt-tab-item id="2">
        <span class="mt-tab-item-span" v-on:click="showShops">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangjia"></use>
        </svg>
        商家</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
        </svg>
      我的
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="再优惠" v-if="Object.keys(youhuijuan).length ==0" value="无可有优惠卷" is-link to="/"></mt-cell>
        <ListPic title="再优惠" v-else ftitle="更多" :items="youhuijuan" link="/"></ListPic>
        <mt-cell title="剩余积分" value="0"></mt-cell>
        <mt-cell title="累计积分" value="0"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <Shop :title="news.title" :img="news.thumb" :ftitle="news.description" link="/#/info"></Shop>
        <Shop title="门店信息" :lnglat="siteInfo[0].content" :ftitle="siteInfo[2].content" link="/"></Shop>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="user">
          <div class="face"><img src="../assets/logo.png"></div>
          <mt-cell title="标题文字" label="13966790692" is-link to="/">
          </mt-cell>

        </div>
        <div class="footer">
          <div class="b"><a href=""><span>1</span><br />再惠卷</a><a href=""><span>2</span><br />积分</a></div>
        </div>
        <mt-cell title="入会日期" value="20170-06-06"></mt-cell>
        <mt-cell title="积分历史" to="" is-link value="0"></mt-cell>
        <mt-cell title="销卷历史" to="" is-link value="0"></mt-cell>


      </mt-tab-container-item>
    </mt-tab-container>
    <Footer></Footer>

  </div>
</template>
<script>

import ListPic from './common/listpic.vue'
import Footer from './common/footer.vue'
import Shop from './common/shop.vue'
import {GetIndexTop} from '../api';
import store from '../store';

export default {
  name: 'index',
  components: {
    ListPic,
    Footer,
    Shop
  },
  data () {
    return {
      selected: '1',
      listBanner: [],
      siteInfo:[],
      coupon:[],
      youhuijuan:[],
      news:[]
    }
  },
  created() {
    GetIndexTop().then(res => {
      this.listBanner = res.list.banner;
      this.siteInfo = res.site;
      store.dispatch('saveSite', this.siteInfo)
      this.youhuijuan = res.list.youhuijuan
      this.news = res.list.shopnews[0]
    })
  },
  methods: {
    showShops: function(){
      console.log(111);
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
  text-align: left;
}
.mt-tab-item-span{display: block;}

.index .title h1{color:#3d4959}
.index .title p{color: #929699; margin-bottom: 0.4rem}
.index .mint-tab-container .mint-tab-container-item{ padding: 0rem}
.index .mint-navbar{margin-top: 0.1rem}
.index .mint-cell{ margin-bottom: 0.1rem}
.index .mint-tab-item-label{ font-size: 0.35rem}
.index .mint-navbar .mint-tab-item.is-selected{ color: #d36a3a;border-color: #d36a3a;}
.index .user{background-color: #fff;  padding: 0.5rem 0.5rem;}
.index .user .face img{ width: 1.2rem; height: 1.2rem; float: left;}
.index .mint-tab-container-item:last-child{padding:0.15rem 0 0 0!important;}
.index .user .mint-cell,index .user .mint-cell-wrapper{ border:0px; background: none;}
.index .footer{ background-color: #fff; margin: 0.1rem 0; height: 0.6rem}
.index .footer .b a{ margin: 0}
</style>
