<template>
  <div class="list-pic">

    <mt-cell v-bind:title="title"  v-bind:icon="title" v-bind:value="ftitle" is-link to="/"></mt-cell>
    <div class="list-pic-ul">
      <ul v-if="items">
        <li v-for="n in 5"><a @click="showCoupon(1)"><img src="../../assets/logo.png" /><p>{{popupVisible}}{{title}}</p></a></li>
      </ul>
    </div>
    <mt-popup
       v-model="popupVisible"
      popup-transition="popup-fade">
      <div class="close"><a href="javascript:;" @click="popupVisible=0">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
        </svg>
      </a></div>
      <div class="coupon">
        <mt-cell title="花串串" is-link to="/"></mt-cell>
        <div class="ban"><img src="http://img.home.ahrmt.com/uploads/news/2017/0605/1496651115594330.jpg"></div>
        <div class="info">
          <h2>到店即送火锅底料</h2>
          <div class="price">￥0 <span>￥8</span></div>
          <p>到店即送火锅底料到店即送火锅底料到店即送火锅底料到店即送火锅底料</p>
          <div class="x">
            <li><span>有效日期 </span>1月2号至6月23日</li>
            <li><span>预约信息 </span>1月2号至6月23日</li>
            <li><span>可否共享 </span>1月2号至6月23日</li>
            <li><span>可否叠加 </span>1月2号至6月23日</li>
            <li><span>可用时间 </span>全天</li>
          </div>
          <div class="shop">
            <h2>花串串<br /><span>地址地址</span></h2>
            <a class="tel" href="tel:787878">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wode"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default{
  name: 'listpic',
  data() {
    return {
      popupVisible: 0
    }
  },
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
  },
  methods: {
    showCoupon:function(res){
      this.popupVisible = 1
    }
  }
}
</script>
<style>
.list-pic{ background-color: #fff;margin: 0.1rem 0;}
.list-pic-ul{overflow-x: scroll;overflow-y: hidden;height: 3rem; }
.list-pic ul {display:inline;white-space: nowrap;}
.list-pic ul li{display: inline-block;white-space:nowrap;padding: 10px 20px;}
.list-pic ul li img{width: 2.8rem; height: 2.2rem;}
.list-pic ul li p{text-align: center;}
.list-pic ul li a{color: #929699}
.list-pic .v-modal{background-color: #98b5d7;}
.list-pic .ban img{width: 7.2rem}
.list-pic .info{ margin: 0.3rem; }
.list-pic h2{font-size: 0.3rem}
.list-pic .price{line-height: 0.5rem;color: red;}
.list-pic .price span{font-size: 0.1rem;color: #929699;text-decoration:line-through;}
.list-pic .x{margin: 0.2rem 0}
.list-pic .x li{ list-style: none;  font-size: 0.25rem;margin: 0.08rem 0;}
.list-pic .x li span{color: #929699;}
.list-pic .shop h2{display: inline;}
.list-pic .shop h2 span{color: #929699;font-size: 0.25rem; font-weight: normal; }
.list-pic .tel{float: right; margin-right: 1rem;}
.list-pic .mint-popup .close{ float: right;margin-top: -0.3rem}
</style>
