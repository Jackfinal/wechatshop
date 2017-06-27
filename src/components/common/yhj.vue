<template>
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
          <h2>{{site.SITE_TITLE}}<br /><span>{{site.address}}</span></h2>
          <a class="tel" :href="'tel:'+site.tel">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wode"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </mt-popup>
</template>

<script>
import {GetInfo} from '../../api'
import store from '../../store';
export default{
  name: 'yhj',
  data() {
    return {
      popupVisible: 0,
      info: [],
      site: typeof (store.state.site) == 'string'?JSON.parse(store.state.site):store.state.site
    }
  },
  props: {
    info: {
      type: [Object,Array],
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
