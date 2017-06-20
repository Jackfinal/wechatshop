
import Vue from 'vue';
import router from '../router'
import vueResource from 'vue-resource'
import store from '../store';
import { Indicator } from 'mint-ui';
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
    accessToken = await getData();
  }

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
    Vue.http.get(API_ROOT + '/index.php', queryString.stringify(data)).then(response => {
      Indicator.close();
      if (response.status == 200) {
        let data = response.data
        if(data.ret == 200)
        {
          resolve(data.data.result);
        }else if(data.ret == 401 || data.ret == 400){
          Toast({
            message: data.msg,
            position: 'bottom',
            duration: 5000
          });
        }else if (data.ret == 402) {
          const access_token = store.state.accessToken
          const user = store.state.user
          if (access_token && user.userId) {
            return fetch('AccessToken.UpdateAccessToken', { access_token, userid: user.userId }).then(res => {
                            // store.dispatch('saveAccssToken', res)
                            //debugger
                           return fetch(service, datas)
})
          }
        }


      }

    },error => {
      Toast({
        message: '网络错误！',
        position: 'bottom',
        duration: 5000
      });
    })
  })
}
//暴露外围函数
export function RedirectWeixin()
{
  getData('Weixin.Redirect_weixin',{},true);
}
