<template>
  <div class="list-pic">
    <mt-cell v-bind:title="title"  v-bind:icon="title" v-bind:value="ftitle" is-link to="/"></mt-cell>
    <ul v-if="items">
      <li v-for="n in 5"><a href=""><img src="../../assets/logo.png" /><p>{{title}}</p></a></li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'listpic',
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
      type: Array
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.list-pic{ background-color: #fff;margin-top: 0.1rem}
.list-pic ul {height: 3rem; overflow-x: scroll;overflow-y: hidden;width: 100%;}
.list-pic ul li{display: inline-block;}
.list-pic ul li img{width: 2.8rem; height: 2.2rem;}
.list-pic ul li p{text-align: center;}
</style>
