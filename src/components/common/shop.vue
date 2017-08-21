<template>
  <div class="shop">
    <mt-cell v-bind:title="title" is-link v-bind:to="link" ></mt-cell>
    <div class="shoplist" >
      <router-link :to="{ name: 'info', params: {id: id} }"><img :src="img" >
      <span>{{ftitle}}</span></router-link>
    </div>
  </div>
</template>
<script>
import Map from './Map.vue'
  export default{
    name:'shop',
    props: {
      title: {
        type: String
      },
      ftitle: {
        type: String
      },
      img: {
        type: String
      },
      lnglat: {
        type: String
      },
      link: {
        type: String
      },
      id: {
        type: String
      }
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
    components: {
      Map
    }
  }
</script>
<style>
.mapmap{ margin: 0 auto;}
.shop{ background-color: #fff;margin: 0 0 0.1rem;}
.shoplist { text-align: center; padding-bottom: 0.2rem}
.shoplist span{display: block;text-align: left; line-height: 0.5rem;text-indent: 0.2rem;    height: 0.5rem;
    overflow: hidden;
    padding: 0 0.2rem;}
.shoplist img{width: 6.5rem; height: 3.7rem;}
</style>
