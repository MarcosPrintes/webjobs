<template>
  <div id="app">
    <div id="nav">
     <router-link to="/">
        <a-icon 
        :style="{'font-size':'30px'}"
        type="folder-open" />
     </router-link>

      <a href="../cv_marcospaulo.pdf" target="_blank" download>

        <a-icon 
        :style="{'font-size': '30px'}"
        type="download" />
      </a>
  
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 95%;
  margin:0 auto;
}
#nav {
  padding: 30px;
  margin-bottom: 30px;
  a {
    display: inline-block;
    margin: 0 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
