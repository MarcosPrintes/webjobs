<template>
  <a :href="link" target="_blank" :style="{ 'animation-delay': delay }" class="card-link">
    <a-card
      hoverable
      style="width: 300px"
    >
      <img
        alt="example"
        :src="resolve_img_url(picture_src)"
        slot="cover"
      />

      <a-card-meta
        :title=name
        >
      </a-card-meta>
    </a-card>  
  </a>
</template>

<script>
export default {
  name: 'm-card',
  props:{
    name: String,
    picture_src: String,
    link: String,
    delay: String
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  }
}
</script>
<style lang="scss" scoped>

@keyframes x {
  from{ opacity: 0; }
  to { opacity: 1; }
}
.card-link{
  opacity: 0;
  animation-name: x;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.ant-card{
  margin: 0 auto 30px;
}
</style>