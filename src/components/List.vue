<template>
  <div class="list">
    <h3 class="title-h3">所有文章</h3>
    <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">

  <li v-for="item in list">
    <a :href="'/#/info/'+item.id">
      <img :src="item.thumb" >
      <p>
        <strong v-text="item.title"></strong>
        <span v-text="item.inputtime"></span>
      </p>

    </a>
  </li>
</ul>
  </div>

</template>
<script>
import { InfiniteScroll,Toast } from 'mint-ui';
import {GetList} from '../api'
export default {
  name: 'List',
  data() {
    return {
      loading: false,
      list: [],
      page: 1
    }
  },
  created() {
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.init();
      this.loading = false;
    },
    init() {
      GetList({id:1,modelid:1,page:this.page,limit:10}).then(res=> {
        if(res == '')
        {
          Toast({
            message: '没有了！',
            position: 'bottom',
            duration: 5000
          });
          return '';
        }
        this.list = this.list.concat(res);
        this.page += 1;
      });
    }
  },
  components: {
    InfiniteScroll
  }
}
</script>
<style>
.title-h3{ text-align: center; font-size: 0.3rem; background: #fff; line-height: 0.8rem;box-shadow: 0 2px 8px #ccc;}
.list ul{ padding:0.1rem 0.2rem;}
.list ul li{list-style:none; overflow: hidden;box-shadow: 0 0 8px #ccc; border-radius: 0.1rem;margin: 0.1rem 0;background: #fff; padding: 0.2rem}
.list ul li img{width: 2.2rem; height: 1.5rem;float: left; }
.list ul li p{ float: right;  width: 4.0rem}
.list ul li p span,.list ul li p strong{ display: block;margin-top: 0.1rem}
.list ul li p span{margin-top: 0.2rem }
</style>
