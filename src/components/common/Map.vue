<template>
  <BaiduMap class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" ak="ZpRZNLoNtotSl6KAakkGQGWc">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </BaiduMap>
</template>
<script>
import {BaiduMap,BmMarker,BmLabel} from 'vue-baidu-map'
export default{
  name:'Map',
  components: {
    BaiduMap,BmMarker,BmLabel
  }
}
</script>
<style>
.map{width: 6.5rem; height: 3.7rem;}
</style>
