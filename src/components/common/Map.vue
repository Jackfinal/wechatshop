<template>
  <baidu-map class="map" :center="center" @ready="handler" :zoom="12" ak="ZpRZNLoNtotSl6KAakkGQGWc">
    <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
    </bm-marker>
  </baidu-map>
  
</template>


<script>
import {BaiduMap,BmMarker} from 'vue-baidu-map'
import store from '../../store';

export default {
  name:'Map',
  data () {

    return {
      center: {lng: 0, lat: 0}
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(typeof store.state.site);
      let lg = typeof (store.state.site) == 'string'?JSON.parse(store.state.site):store.state.site;
      let v = lg.lg.split(',');
      this.center.lng = v[0]
      this.center.lat = v[1]
    }
  },
  components: {
    BaiduMap,BmMarker
  }
}
</script>
<style>
.map{width: 100%; height: 100%;}
</style>
