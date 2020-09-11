<template>
  <img :src='images[page]'/>
</template>

<script>
export default {
  name: 'BackgroundImage',
  props: ['page'],
  data: () => ({
    images: {
      home: require('@/assets/img/Violin2.jpg'),
      concerts: require('@/assets/img/Violin2.jpg'),
      faq: require('@/assets/img/Violin2.jpg'),
      members: require('@/assets/img/Violin2.jpg')
    }
  })
}
</script>

<style lang='scss' scoped>
img {
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1000;
}
</style>
