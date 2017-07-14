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
import store from '../store'
export default {
  name:'credits',
  data() {
    return {
      list: [],
      page: 1,
      user: (typeof (store.state.user) == 'string' && store.state.user!='' )?JSON.parse(store.state.user):store.state.user,
    }
  },
  created() {
    this.getList();
console.log(11);
  },
  methods: {
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
          this.page ++;
        }
        console.log(res);
      })
    }
  }

}
</script>
