<template>
  <div class="shop">
    <mt-cell v-bind:title="title" is-link v-bind:to="link" ></mt-cell>
    <div class="shoplist">
      <a :href="link">
        <img :src="img" >
        <span>{{ftitle}}</span>
      </a>
    </div>
  </div>
</template>
<script>
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
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  }
</script>
<style>
.shop{ background-color: #fff;margin: 0.1rem 0;}
.shoplist { text-align: center; padding-bottom: 0.2rem}
.shoplist span{display: block;text-align: left; line-height: 0.5rem;text-indent: 0.2rem}
.shoplist img{width: 6.5rem; height: 3.7rem;}
</style>
