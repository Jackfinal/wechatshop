<template>
  <div class="credits">
    <h3 class="title-h3">积分记录</h3>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">

      <li v-for="item in list">
          <p>
            <strong v-text="item.name"></strong>
            <span v-text="item.time"></span>
          </p>
      </li>
    </ul>
  </div>
</template>
<script>
import {getCreditsLog} from '../api'
import { InfiniteScroll,Toast } from 'mint-ui';
import store from '../store'
export default {
  name:'credits',
  data() {
    return {
      list: [],
      loading: false,
      page: 1,
      user: (typeof (store.state.user) == 'string' && store.state.user!='' )?JSON.parse(store.state.user):store.state.user,
    }
  },
  created() {
    this.getList();
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.getList();
      this.loading = false;
    },
    getList: function() {
      getCreditsLog({page:this.page,userid:this.user.id}).then(res=> {
        if(!res)
        {
          Toast('没有了');
          return false;
        }
        if(this.page == 1)
        {
          this.list = res;
        }else {
          this.list.push(res);
          this.page += 1;
        }
        console.log(res);
      })
    }
  },
  components: {
    InfiniteScroll
  }

}
</script>

<style>
.title-h3{ text-align: center; font-size: 0.3rem; background: #fff; line-height: 0.8rem;box-shadow: 0 2px 8px #ccc;}
.credits ul{ padding:0.1rem 0.2rem;}
.credits ul li{list-style:none; overflow: hidden;box-shadow: 0 0 8px #ccc; border-radius: 0.1rem;margin: 0.1rem 0;background: #fff; padding: 0.2rem}
.creditscredits ul li p{ float: right;  width: 4.0rem}
.credits ul li p span,.list ul li p strong{ display: block;margin-top: 0.1rem}
.credits ul li p span{margin-top: 0.2rem }
</style>
