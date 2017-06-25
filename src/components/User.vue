<template>
  <div class="user">
    <h3 class="title-h3" v-wechat-title="'个人资料'">个人资料</h3>
    <a class="mint-cell" v-on:click="sheetVisible=1">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"><img :src="user.avatar" width="34" height="34" align="middle" style="float: right;">
          <span class="mint-cell-text" style="line-height: 0.6rem;">头像</span>
        </div>
        <div class="mint-cell-value is-link">
          <span></span>
        </div>
      </div>
    <div class="mint-cell-right"></div>
     <i class="mint-cell-allow-right"></i>
    </a>

    <mt-cell title="昵称" value="说明文字"></mt-cell>
    <mt-cell title="手机号" value="说明文字"></mt-cell>
    <mt-cell title="生日" value="说明文字"></mt-cell>
    <mt-cell title="会员日" value="说明文字"></mt-cell>
    <mt-cell title="城市" value="说明文字"></mt-cell>
    <mt-cell title="商圈" value="说明文字"></mt-cell>
    <mt-cell title="职业" value="说明文字"></mt-cell>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <input type="file" name="face" v-show="0" accept="image/*">


  </div>
</template>
<script>
import store from '../store';
export default {
  name: 'User',
  data() {
    return {
      user: typeof (store.state.user) == 'string'?JSON.parse(store.state.user):store.state.user,
      sheetVisible: 0,
      actions: [{name:"拍照",method:this.takePhoto},{name:"从相册中选择",method:this.openAlbum}]
    }
  },
  methods: {
    takePhoto() {

    },
    openAlbum() {

    },
    showsheetVisible() {
      console.log(111);
    },
    showText(text) {
      MessageBox.prompt(text).then(({ value, action }) => {
        console.log(value);
      });
    }
  }


}

</script>

<style>
.title-h3{ text-align: center; font-size: 0.3rem; font-weight: normal;background: #fff; line-height: 0.8rem;box-shadow: 0 2px 8px #ccc;}
.mint-cell{ border-top: 1px solid #f4f4f4}
</style>
