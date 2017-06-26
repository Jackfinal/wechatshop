<template>
  <div class="user">
    <h3 class="title-h3" v-wechat-title="'个人资料'">个人资料</h3>
    <a class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title" style="float: right; margin: 0.2rem 0;">
          <div class="avatar-div">
              <img :src="user.avatar" class="avatar">
              <input type="file" accept="image/*" class="uploader-input" @change="uploader">
         </div>
          <span class="mint-cell-text" style="line-height: 1.2rem;">头像</span>
        </div>
        <div class="mint-cell-value is-link">
          <span></span>
        </div>
      </div>
    <div class="mint-cell-right"></div>
     <i class="mint-cell-allow-right"></i>
    </a>

    <div @click="showText('请输入昵称！', 'nickname')" ><mt-cell title="昵称" :value="user.nickname" is-link></mt-cell></div>
    <div @click="showText('请输入昵称！', 'mobile')" ><mt-cell title="手机号" :value="user.mobile" is-link></mt-cell></div>
    <div @click="showText('请输入昵称！', 'birthday')" ><mt-cell title="生日" :value="user.birthday" is-link></mt-cell></div>
    <mt-cell title="会员日" :value="user.regdate" ></mt-cell>
    <div @click="checkArea()" ><mt-cell title="城市" value="说明文字" is-link></mt-cell></div>
    <mt-cell title="商圈" value="说明文字"></mt-cell>
    <mt-cell title="职业" value="说明文字"></mt-cell>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <input type="file" name="face" v-show="0" accept="image/*">


  <mt-datetime-picker
    ref="picker"
    type="date"
    year-format="{value}年"
  month-format="{value}月"
  date-format="{value}日" :endDate="endDate" :startDate="startDate"
    v-model="pickerValue" @confirm="handleConfirm">
  </mt-datetime-picker>



  </div>
</template>
<script>
import store from '../store';
import {uploader} from '../api';
import { Indicator ,MessageBox ,DatetimePicker  } from 'mint-ui';
export default {
  name: 'User',
  data() {
    var d = new Date(2017)
    return {
      user: typeof (store.state.user) == 'string'?JSON.parse(store.state.user):store.state.user,
      sheetVisible: 0,
      pickerValue: d,
      endDate: new Date((new Date).getFullYear()+0,0,0),
      startDate: new Date((new Date).getFullYear()-50,0,0),
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
    showText(text, type) {
      var _this = this;
      //console.log(this.openPicker());
      if(type == 'birthday')
      {
        var l = this.user.birthday.split(',');
        var d = new Date()
        d.setFullYear(l[0],l[1]-1,l[2]);
        this.pickerValue = d;
        this.openPicker();
        return '';
      }else {
        MessageBox.prompt(text).then(({ value, action }) => {
          console.log(value);
        });
      }

    },
    uploader(e) {
        Indicator.open('加载中...');
        const file = e.target.files[0]
        const reader = new FileReader()
        let src = ''
        let url = window.URL || window.webkitURL
        if (url) {
            src = url.createObjectURL(file)
        } else {
            src = e.target.result
        }console.log(this.user.id);
        reader.onload = (event) => {
            let _this = this
            uploader({ upfile: event.target.result, type: 'users',userid:this.user.id }).then(photo => {
                Indicator.close();
                _this.user.avatar = photo
                store.dispatch('saveUser', _this.user)

            })
        }
        reader.readAsDataURL(file)
    },
    openPicker() {
        this.$refs.picker.open();
    },
    handleConfirm(e) {
      var d = new Date(e)
      var value = d.getFullYear()+','+(d.getMonth()+1)+','+d.getDay()
      console.log(value);
    },
    checkArea() {
      this.$http.get('../api/area.json').then(res => {
        console.log(res);
      });
    }
  }


}

</script>

<style>
.title-h3{ text-align: center; font-size: 0.3rem; font-weight: normal;background: #fff; line-height: 0.8rem;box-shadow: 0 2px 8px #ccc;}
.mint-cell{ border-top: 1px solid #f4f4f4}

.avatar-div {
    width: 1.2rem;
    height: 1.2rem;
    float: right;
}
.uploader-input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.avatar {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
}
</style>
