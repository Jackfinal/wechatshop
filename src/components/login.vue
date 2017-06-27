<template><div ></div></template>
<script>
import {RedirectWeixin} from '../api'
export default {
  name: 'login',
  created() {
    RedirectWeixin();
    console.log(this.$route.query);
  }
}
</script>
