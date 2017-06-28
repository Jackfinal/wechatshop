<template></template>
<script>
import {RedirectWeixin} from '../api'
export default {
  name: 'login',
  created() {
    RedirectWeixin();
  }
}
</script>
