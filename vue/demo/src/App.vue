<template>
  <div class="">
    <my-button @click="fn">Hello World!</my-button>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    fn () {
      console.log('我被触发了')
    }
  }
}
</script>

<style lang="less" scoped></style>
