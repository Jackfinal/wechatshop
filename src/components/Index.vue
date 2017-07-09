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
    <mt-navbar v-model="selected" value="1">
      <div class="table-tar">
      <mt-tab-item id="1">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bullhorn"></use>
        </svg>
        优惠
      </mt-tab-item></div>
      <div class="table-tar" @click="showShops">
      <mt-tab-item id="2" >
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangjia"></use>
        </svg>
        商家
      </mt-tab-item></div>
      <div class="table-tar">
      <mt-tab-item id="3">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
        </svg>
      我的
    </mt-tab-item></div>
    </mt-navbar>
    <div class="hrr"></div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" value="1">
      <mt-tab-container-item id="1">
        <mt-cell title="再优惠" v-if="Object.keys(youhuijuan).length ==0" value="无可有优惠卷" is-link to="/coupon"></mt-cell>
        <ListPic title="再优惠" v-else ftitle="更多" :items="youhuijuan" link="/coupon"></ListPic>
        <mt-cell title="剩余积分" value="0"></mt-cell>
        <mt-cell title="累计积分" value="0"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <Shop title="门店资讯" :img="news.thumb" :id="news.id" :ftitle="news.description" link="/list"></Shop>
        <div class="shop">
          <mt-cell title="门店信息" is-link to="/Address" ></mt-cell>
          <div class="mapindex"><component v-bind:is="which_to_show" keep-alive></component></div>
          <span class="mapaddress">{{siteInfo.address}}</span>

        </div>

      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="user">
          <div class="face"><img :src="user.avatar" :alt="user.avatar"></div>
          <mt-cell :title="user.nickname?user.nickname:user.username" :label="user.mobile" is-link to="/user">
          </mt-cell>

        </div>
        <div class="footer">
          <div class="b"><a href="/" ><span v-text="user.count_yhj"></span><br />再惠卷</a><a href=""><span v-text="user.credits"></span><br />积分</a></div>
        </div>
        <mt-cell title="入会日期" :value="user.regdate"></mt-cell>
        <mt-cell title="积分历史" to="" is-link :value="user.credits"></mt-cell>
        <mt-cell title="销卷历史" to="" is-link value="0"></mt-cell>


      </mt-tab-container-item>
    </mt-tab-container>
    <Footer></Footer>

  </div>
</template>
<script>
import Map from './common/Map.vue'
import ListPic from './common/listpic.vue'
import Footer from './common/footer.vue'
import Shop from './common/shop.vue'
import {GetIndexTop,GetUser} from '../api';
import store from '../store';

export default {
  name: 'index',
  components: {
    ListPic,
    Footer,
    Shop,
    Map
  },
  data () {
    return {
      selected: '1',
      listBanner: [],
      siteInfo:[],
      coupon:[],
      youhuijuan:[],
      news:[],
      which_to_show:'',
      user: (typeof (store.state.user) == 'string' && store.state.user!='' )?JSON.parse(store.state.user):store.state.user,
    }
  },
  created() {
    GetIndexTop().then(res => {
      this.listBanner = res.list.banner;
      this.siteInfo = res.site;
      store.dispatch('saveSite', this.siteInfo)
      //this.youhuijuan = res.list.youhuijuan
      this.news = res.list.shopnews[0];
    })

    GetUser({userid:this.user.id}).then(res=>{
      store.dispatch('saveUser', res)
      this.user = res;
      this.youhuijuan = res.yhj

    })
  },
  methods: {
    showShops: function(){
      this.which_to_show = 'Map'
    }
  }
}
</script>

<style>
.mint-swipe,.mint-swipe-item,.mint-swipe-item img{
  height: 3.2rem!important;
}
.mint-swipe-indicator{background: #e7decf}
.mint-swipe-item img{width: 100%}
.hrr{height: 0.1rem; width: 100%;}
.index .title{
  padding: 0rem 0.4rem;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
}
.mt-tab-item-span{display: block;}
.table-tar{width: 33%}
.index .title h1{color:#3d4959}
.index .title p{color: #929699; margin-bottom: 0.4rem}
.index .mint-tab-container .mint-tab-container-item{ padding: 0rem}
.index .mint-navbar{margin-top: 0.1rem}
.index .mint-cell{ margin-bottom: 0.1rem}
.index .mint-tab-item-label{ font-size: 0.35rem}
.index .mint-navbar .mint-tab-item.is-selected{ color: #d36a3a;border-color: #d36a3a;}
.index .user{background-color: #fff;  padding: 0.5rem 0.5rem;}
.index .user .face img{ width: 1.2rem; height: 1.2rem; float: left;}
.index .mint-tab-container-item:last-child{padding:0.0rem 0 0 0!important;}
.index .user .mint-cell,.index .user .mint-cell-wrapper{ border:0px!important; background: none;}
.index .footer{ background-color: #fff; margin: 0.1rem 0; height: 0.6rem}
.index .footer .b a{ margin: 0}
.mapaddress{ text-indent: 5%;display: block;}
.mint-cell-wrapper{ border:0px!important; background: none;}
.mapindex{width: 90%; height: 3.7rem; margin: 0 auto;}
</style>
