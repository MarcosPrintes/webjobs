<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/medre.png"> -->
      
    <a-row align="middle">
  
      <a-col 
        :xs="24" 
        :sm="12" 
        :md="12" 
        :lg="8"
        :xl="6" 
        v-for="item in items" :key="item.id">
        <Mcard
          :delay="item.delay"
          :link="item.link" 
          :name="item.name"
          :picture_src="item.img"
          ></Mcard>
      </a-col>
  
    </a-row>
  
  </div>
</template>

<script>
import Mcard from '../components/Card'
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
import data from '../dataSites.js'

export default {
  name: 'home',
  components:{
    Mcard
  },
  data(){
    return{
      items: data
    }
  },  
}
</script>
