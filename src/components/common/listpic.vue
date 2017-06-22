<template>
  <div class="list-pic">

    <mt-cell v-bind:title="title"  v-bind:icon="title" v-bind:value="ftitle" is-link to="/"></mt-cell>
    <div class="list-pic-ul">
      <ul v-if="items" >
        <li v-for="item in items"><a @click="showCoupon(item.id)"><img :src="item.thumb" /><p>{{item.title}}</p></a></li>
      </ul>
    </div>
    <mt-popup
       v-model="popupVisible"
      popup-transition="popup-fade">
      <div class="close"><a href="javascript:;" @click="popupVisible=0">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
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
            <h2>{{site.SITE_TITLE}}<br /><span>{{site[2].content}}</span></h2>
            <a class="tel" :href="'tel:'+site[1].content">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wode"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import {GetInfo} from '../../api'
import store from '../../store';
export default{
  name: 'listpic',
  data() {
    return {
      popupVisible: 0,
      info: [],
      site: store.state.site
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    ftitle: {
      type: String,
      required: true
    },
    items: {
      type: [Object,Array],
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },

  methods: {
    showCoupon:function(id){
      GetInfo({id:id, attr:'coupon'}).then(res=>{
        this.info = res;
      });
      this.popupVisible = 1
    }
  }
}
</script>
<style>
.list-pic{ background-color: #fff;margin: 0.1rem 0;}
.list-pic-ul{overflow-x: scroll;overflow-y: hidden;height: 3rem; }
.list-pic ul {display:inline;white-space: nowrap;}
.list-pic ul li{display: inline-block;white-space:nowrap;padding: 10px 20px;}
.list-pic ul li img{width: 2.8rem; height: 2.2rem;}
.list-pic ul li p{text-align: center;}
.list-pic ul li a{color: #929699}
.list-pic .v-modal{background-color: #98b5d7;}
.list-pic .ban{text-align: center;}
.list-pic .ban img{max-width: 7.2rem;max-height: 4rem}
.mint-popup{ width: 7.2rem}
.list-pic .info{ margin: 0.3rem; }
.list-pic h2{font-size: 0.3rem}
.list-pic .price{line-height: 0.5rem;color: red;}
.list-pic .price span{font-size: 0.1rem;color: #929699;text-decoration:line-through;}
.list-pic .x{margin: 0.2rem 0}
.list-pic .x li{ list-style: none;  font-size: 0.25rem;margin: 0.08rem 0;}
.list-pic .x li span{color: #929699;}
.list-pic .shop h2{display: inline;}
.list-pic .shop h2 span{color: #929699;font-size: 0.25rem; font-weight: normal; }
.list-pic .tel{float: right; margin-right: 1rem;}
.list-pic .mint-popup .close{ float: right;margin-top: -0.3rem}
</style>
