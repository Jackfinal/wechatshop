
import Vue from 'vue';
import router from '../router'
import vueResource from 'vue-resource'
import store from '../store';
import { Indicator,Toast } from 'mint-ui';
import queryString from 'queryString';

Vue.use(vueResource);

const appid = 'wxe6ab26eb9276d611';
const secret = '0d1750587901b3570a84b6b0ca4e8dde';

let accessToken = store.state.accessToken;

const API_ROOT = process.env.API_ROOT;

async function fetch(service, data, loading = false)
{
  let accessToken = store.state.accessToken;
  const user = store.state.user

  if(!accessToken)
  {
    accessToken = await getData('AccessToken.GetAccessToken',{appid, secret});
    store.dispatch('saveAccssToken', accessToken)
  }
  return getData(service, data, loading)

}
async function getData(service, datas, loading)
{
  const data = {
    service,
    access_token: store.state.accessToken,
    ...datas
  }
  if(loading)
  {
    Indicator.open('Loading...');
  }

  return new Promise((resolve, reject)=>{
    Vue.http.options.emulateJSON = true;
    Vue.http.post(API_ROOT + 'index.php', data).then(response => {
      Indicator.close();
      if (response.status == 200) {
        let data = response.data
        if(data.ret == 200)
        {
          resolve(data.data.result);
          return;
        }else if (data.ret == 401 || data.ret == 400){
          Toast({
            message: data.msg,
            position: 'bottom',
            duration: 5000
          });
        }else if (data.ret == 402) {
          const accessToken = store.state.accessToken
          const user = store.state.user;
          if (user && accessToken && user.oppenid) {
            return fetch('AccessToken.UpdateAccessToken', { appid:appid, secret: secret }).then(res => {
              return fetch(service, datas)
            })
          }else if (user && accessToken && !user.oppenid) {
            return fetch('AccessToken.GetAccessToken', { appid, secret }).then(res => {
              store.dispatch('saveAccssToken', res)
              return fetch(service, datas)
            })

          }
        }


      }

      reject(data)

    },error => {
      Toast({
        message: '网络错误！'+JSON.stringify(error),
        position: 'bottom',
        duration: 5000
      });
    })
  })
}
//暴露外围函数
export function RedirectWeixin()
{
  let user = store.state.user;
  if(!user)
  {
    var ret = fetch('Weixin.Redirect_weixin',{},true);
    ret.then(res => {
      window.location.href=res;
    })
  }
}
//获取banner
export function GetIndexTop()
{
  return fetch('Index.GetIndexTop',{});
}
//获取详情
export function GetInfo(data){
  return fetch('Index.GetInfo',data);
}
//获取列表
export function GetList(data){
  return fetch('Index.GetList',data);
}
//获取用户信息
export function GetUser(data){
  return fetch('User.getBaseInfo',data);
}
//图片上传
export function uploader(data) {
   return fetch('Default.UploadBase64', data)
}
//更新会员字段
export function saveField(data) {
  return fetch('User.saveField', data)
}

export function getArea(){
  return fetch('Default.getArea')
}

export function getCoupon(data)
{
  return fetch('User.getCoupon', data)
}
