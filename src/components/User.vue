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
    <div @click="showText('请输入手机号！', 'mobile')" ><mt-cell title="手机号" :value="user.mobile" is-link></mt-cell></div>
    <div @click="showText('请选择生日！', 'birthday')" ><mt-cell title="生日" :value="user.birthday|filterBirthday" is-link></mt-cell></div>
    <mt-cell title="会员日" :value="user.regdate" ></mt-cell>
    <div @click="checkArea('city')" ><mt-cell title="城市" :value="user.city" is-link></mt-cell></div>
    <div @click="checkArea('quan')" ><mt-cell title="商圈" :value="user.quan" is-link></mt-cell></div>

    <input type="file" name="face" v-show="0" accept="image/*">
    <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount='5' :showToolbar="true" v-show="slotsShow">
      <div class="picker-toolbar"><span class="mint-datetime-action mint-datetime-cancel" @click="pickerToolbar(0)">取消</span> <span class="mint-datetime-action mint-datetime-confirm" @click="pickerToolbar(1)">确定</span></div>
    </mt-picker>

  <mt-datetime-picker
    ref="picker"
    type="date"
    yearFormat="{value}"
  month-format="{value}"
  date-format="{value}" :endDate="endDate" :startDate="startDate"
    v-model="pickerValue" @confirm="handleConfirm">
  </mt-datetime-picker>





  </div>
</template>
<script>
import store from '../store';
import {uploader, saveField, getArea} from '../api';
import { Indicator ,MessageBox ,DatetimePicker , Picker, Toast  } from 'mint-ui';
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
      slotsShow: false,
      area: [],
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      values: '',
      field: 'city'
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
        if(this.user.birthdaylock == 1)return ''
        MessageBox.confirm('生日只能修改一次哦！').then(action => {
          if( action == 'confirm' )
          {
            var l = this.user.birthday.split(',');
            var d = new Date()
            d.setFullYear(l[0],l[1]-1,l[2]);
            this.pickerValue = d;
            this.openPicker();
            return '';
          }
        });

      }else {
        MessageBox.prompt(text).then(({ value, action }) => {
          if( action == 'confirm' )
          {
            this.saveField(value, type);
          }
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
      console.log(e);
      console.log(e.getDate());
      var value = d.getFullYear()+','+(d.getMonth()+1)+','+d.getDate()
      this.saveField(value, 'birthday')
      console.log(value);
    },
    checkArea(type) {
      this.slotsShow = true;
      let item = []
      let d = 0;
      if(type == 'city'){
        this.field = 'city'
        if(this.area.length>0){
          for(let i in this.area){
            item[i] = this.area[i]['name']
            if(this.user[type] == this.area[i]['name']){
              d = i;
            }
          }
          this.slots[0]['values'] = item;
          this.slots[0]['defaultIndex'] = d;
        }else{
          getArea().then(res => {
              res = eval(res);
              this.area = res;
              for(let i in res){
                item[i] = res[i]['name']
                if(this.user[type] == this.area[i]['name']){
                  d = i;
                }
              }
              this.slots[0]['defaultIndex'] = d;
              this.slots[0]['values'] = item;

          });
        }
      }else if (type == 'quan') {
        this.field = 'quan'
        if(this.area.length>0){
          for(let i in this.area){
            if(this.area[i]['name'] == this.user.city){
              for (var c in this.area[i]['sub']) {
                item[c] = this.area[i]['sub'][c]['name'];
                if(this.user[type] == item[c]){
                  d = c;
                }
              }
              break;
            }
          }
          this.slots[0]['defaultIndex'] = d;
          this.slots[0]['values'] = item;
        }else{
          getArea().then(res => {
              res = eval(res);
              this.area = res;
              for(let i in this.area){
                if(this.area[i]['name'] == this.user.city){
                  for (var c in this.area[i]['sub']) {
                    item[c] = this.area[i]['sub'][c]['name'];
                    if(this.user[type] == item[c]){
                      d = c;
                    }
                  }
                  break;
                }
              }
              this.slots[0]['defaultIndex'] = d;
              this.slots[0]['values'] = item;

          });
        }
      }


    },
    saveField(value, type) {

      saveField( {userid: this.user.id, value: value, field: type} ).then(res=> {
        if(res > 0)
        {
          this.user[type] = value
          if(type == 'birthday')
          {
            this.user.birthdaylock = 1;
          }
          store.dispatch('saveUser', this.user)
          Toast('修改成功！');
        }else {
          Toast('修改失败！');
        }
      })
    },
    onValuesChange(picker, values) {
      if(!this.area)return ''
      var _this = this;
      this.values = values;
    },
    pickerToolbar(type) {
      this.slotsShow = false;
      if(type == 1){
        this.user[this.field] = this.values[0]
        this.saveField(this.values[0],this.field);
      }
    }
  },
  filters: {
    filterBirthday: function(value){
      if (!value || !value.indexOf(',')) return ''
      let l = value.split(',');
      return l[0]+ '年' + l[1] + '月' + l[2] + '日'
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
.mint-cell-wrapper{ border:0px!important; background: none;}
</style>
