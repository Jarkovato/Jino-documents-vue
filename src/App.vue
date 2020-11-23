<template>
  <div id="app">
    <Documents/>
  </div>
</template>

<script>
import Documents from './components/Documents.vue'

export default {
  name: 'App',
  components: {
    Documents
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
body {
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
  color: #333;
  background-color: #f7f7f7;
  font-size: 14px;
  font-weight: 400;
}
.container {
  max-width: 1092px;
  width: 90vw;
  min-width: 819px;
  margin: 0px auto; 
}

</style>
