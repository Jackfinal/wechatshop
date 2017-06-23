<template>
  <div class="mapaddress" :style="styles">
<Map></Map>
  </div>
</template>
<script>
import Map from './common/Map';
export default {
  name: 'Address',
  components: {
    Map
  },
  data(){
    return {
      styles:{
        'height': '100%'
      }
    }
  },
  created() {
    var h = document.body.scrollHeight;
    this.styles = {'height':h+'px'}
  }
}
</script>
<style>
.mapaddress{ width: 100%;}
</style>
