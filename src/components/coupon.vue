<template>
  <div class="yhj">
    <h3 class="title-h3" v-wechat-title="site.SITE_TITLE">再惠卷</h3>
    <ul>
      <li v-for="item in list">
        <a href="javascript:;" @click="showp(item);">
          <img :src="item.thumb" >
          <div class="yhjp">
            <span v-text="item.title"></span>
            <div class="price"><span>￥{{item.shopprice}}</span></div>
            <div class="yhjtime">{{item.starttime}}号至{{item.enddate}}有效</div>
          </div>

        </a>
      </li>
    </ul>


    <mt-popup
       v-model="popupVisible"
      popup-transition="popup-fade">
      <div class="close"><a href="javascript:;" @click="popupVisible=0">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-close"></use>
        </svg>
      </a></div>
      <div class="coupon">
        <mt-cell :title="info.title" is-link to="/"></mt-cell>
        <div class="ban"><img :src="info.thumb"></div>
        <div class="info">
          <h2>{{info.title}}</h2>
          <div class="price">￥{{info.trueprice}} <span>￥{{info.shopprice}}</span></div>
          <p>{{info.description}}</p>
          <div class="x">
            <li><span>有效日期 </span>{{info.starttime}}号至{{info.enddate}}</li>
            <li><span>预约信息 </span>{{info.reservation}}</li>
            <li><span>可否共享 </span>{{info.share==1?'是':'否'}}</li>
            <li><span>可否叠加 </span>{{info.overlying==1?'是':'否'}}</li>
            <li><span>可用时间 </span>{{info.usertime}}</li>
          </div>
          <div class="shop">
            <h2>{{site.SITE_TITLE}}<br /><span>{{site.address}}</span></h2>
            <a class="tel" :href="'tel:'+site.tel">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tel"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import store from '../store';
import {getCoupon} from '../api'
import {Toast} from 'mint-ui'
export default {
  name: 'coupon',
  data() {
    return {
      site: typeof (store.state.site) == 'string'?JSON.parse(store.state.site):store.state.site,
      user: typeof (store.state.user) == 'string'?JSON.parse(store.state.user):store.state.user,
      list: [],
      page: 1,
      info: [],
      popupVisible: 0
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getCoupon({userid:this.user.id}).then(res=> {
        if(res == '')
        {
          Toast({
            message: '没有了！',
            position: 'bottom',
            duration: 5000
          });
          return '';
        }
        this.list = this.list.concat(res);
        this.page += 1;
      });
    },
    showp(item) {
      console.log(item);
      this.info = item;
      this.popupVisible = 1
    }
  }
}
</script>
<style>
.title-h3{ text-align: center; font-size: 0.3rem; font-weight: normal;background: #fff; line-height: 0.8rem;box-shadow: 0 2px 8px #ccc;}
.yhj ul{ padding:0.1rem 0.2rem;}
.yhj ul li{list-style:none; overflow: hidden;box-shadow: 0 0 8px #ccc; border-radius: 0.1rem;margin: 0.1rem 0;background: #fff; padding: 0.2rem}
.yhj ul li img{width: 1.5rem; height: 1.5rem;float: left; border-radius: 50%;}
.yhj ul li .yhjp{ float: right;  width: 4.8rem}
.yhj ul li .yhjp span{ display: block;margin-top: 0.1rem;color:#3d4959;}
.yhj ul li .yhjp div span{margin: 0.1rem 0;color: red;text-decoration:none}
.yhjp .price{}


  .yhj .v-modal{background-color: #98b5d7;}
  .yhj .ban{text-align: center;}
  .yhj .ban img{max-width: 7.2rem;max-height: 4rem}
  .mint-popup{ width: 7.2rem}
  .yhj .info{ margin: 0.3rem; }
  .yhj h2{font-size: 0.3rem}
  .yhj .price{line-height: 0.5rem;color: red;}
  .yhj .price span{font-size: 0.1rem;color: #929699;text-decoration:line-through;}
  .yhj .x{margin: 0.2rem 0}
  .yhj .x li{ list-style: none;  font-size: 0.25rem;margin: 0.08rem 0;}
  .yhj .x li span{color: #929699;}
  .yhj .shop h2{display: inline;}
  .yhj .shop h2 span{color: #929699;font-size: 0.25rem; font-weight: normal; }
  .yhj .tel{float: right; margin-right: 1rem;}
  .yhj .mint-popup .close{ float: right;margin-top: -0.3rem}
</style>
