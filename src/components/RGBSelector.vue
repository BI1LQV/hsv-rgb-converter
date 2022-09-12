<script lang="ts" setup>
import { toRefs } from "vue"
import { rgb } from "../store/index"
const { r, g, b } = toRefs(rgb)
</script>

<template>
  <div class="red">
    <el-slider v-model="r" :step="1" show-input :max="255" />
  </div>
  <div class="green">
    <el-slider v-model="g" :step="1" show-input :max="255" />
  </div>
  <div class="blue">
    <el-slider v-model="b" :step="1" show-input :max="255" />
  </div>
</template>

<style scoped lang="scss">
.red :deep(.el-slider__bar){
  background-image: linear-gradient(to right, #c25448,#FC240C);
}
.green :deep(.el-slider__bar){
  background-image: linear-gradient(to right, #b1dc65,#7abc09);
}
.blue :deep(.el-slider__bar){
  background-image: linear-gradient(to right, #5e99d5,#0d64ba);
}
</style>
