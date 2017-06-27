<script>
import {weiXinRedirect} from '../api'
export default {
  name: 'weixin',
  beforeDestroy() {
    this.init();
  },
  methods: {
    init: function(){
      weiXinRedirect({code:this.$route.params.code});
    }
  }



}
</script>
