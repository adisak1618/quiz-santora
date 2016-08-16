<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

// import * as event from './../../actions/event'

export default {
  components: {},
  ready () {

  }
}
</script>

<style>
  .container{
    width: 1000px;
    padding: 20px;
    margin: 0 auto;
  }
  .segment{
    background: #FFFFFF;
    padding: 10px;
  }
  .radius{
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .from {
    text-align: center;
  }
  .field{
    padding: 5px;
  }
  body {
    background: #EFEFEF;
    padding: 0px !important;
    margin: 0px !important;
  }

  .body{
    background: #EFEFEF;
    height: 100%;
  }
</style>
