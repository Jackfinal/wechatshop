<template>
  <div class="shop">
    <mt-cell v-bind:title="title" is-link v-bind:to="link" ></mt-cell>
    <div class="shoplist" >
      <div class="map" v-if="title=='门店信息'">
        <Map></Map>
      </div>
      <a v-else :href="link">
        <img :src="img" >
        <span>{{ftitle}}</span>
      </a>
    </div>
  </div>
</template>
<script>
import Map from './Map.vue'
  export default{
    name:'shop',
    props: {
      title: {
        type: String,
        required: true
      },
      ftitle: {
        type: String,
        required: true
      },
      img: {
        type: String
      },
      lnglat: {
        type: String
      },
      link: {
        type: String,
        required: true
      },
    },
    data () {
      //let gt = this.lnglat.split(',');
      return {
        //center: {lng: gt[0], lat: gt[1]},
        label: {
          content: '哈哈',
          opts: {
            offset: 10,
            position: this.lnglat,
            enableMassClear: true
          }
        }

      }
    },
    methods: {
      handler ({BMap, map}) {

      }
    },
    components: {
      Map
    }
  }
</script>
<style>
.mapmap{ margin: 0 auto;}
.shop{ background-color: #fff;margin: 0.1rem 0;}
.shoplist { text-align: center; padding-bottom: 0.2rem}
.shoplist span{display: block;text-align: left; line-height: 0.5rem;text-indent: 0.2rem;    height: 0.5rem;
    overflow: hidden;
    padding: 0 0.2rem;}
.shoplist img,.mapmap{width: 6.5rem; height: 3.7rem;}
</style>
