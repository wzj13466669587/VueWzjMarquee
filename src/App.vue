<template>
  <div id="app">
    <wzj-marquee :content="content"></wzj-marquee>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      content: '跑马灯文字跑马灯文字跑马灯文字跑马灯文字跑马灯文字跑马灯文字跑马灯文字'
    };
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
