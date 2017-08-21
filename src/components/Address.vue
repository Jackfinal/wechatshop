<template>
  <div class="mapaddress" :style="styles">
<Map></Map>
<div class="shop">
  <h2>{{site.SITE_TITLE}}<br /></h2>
  <span>{{site.address}}</span><br />
  <a class="tel" :href="'tel:'+site.tel">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tel"></use>
    </svg>
    {{site.tel}}
  </a>
</div>
  </div>
</template>
<script>
import Map from './common/Map';
import store from '../store';
export default {
  name: 'Address',
  components: {
    Map
  },
  data(){
    return {
      styles:{
        'height': '100%'
      },
      site: {}
    }
  },
  created() {
    this.site = typeof (store.state.site) == 'string'?JSON.parse(store.state.site):store.state.site
    var h = document.body.scrollHeight - document.body.scrollHeight*0.3;
    this.styles = {'height':h+'px'}
  }
}
</script>
<style>
.mapaddress{ width: 100%;}
.mapaddress .shop{margin-top: 0.5rem;margin-left: 0.5rem;background:none}
.mapaddress .shop h2{margin: 0.2rem 0}
.mapaddress .shop h2{font-size: 0.3rem}
.mapaddress .shop span{color: #929699;font-size: 0.25rem; font-weight: normal; }
.mapaddress .tel{}
.mapaddress .mint-popup .close{ float: right;margin-top: -0.3rem}
</style>
