<script lang="ts" setup>
import { toRefs } from "vue"
import { hsv } from "../store/index"
const { h, s, v } = toRefs(hsv)
</script>

<template>
  <div>
    <div class="h">
      <el-slider v-model="h" show-input :max="360" />
    </div>
    <div class="s">
      <el-slider v-model="s" show-input :max="1" :step="0.01" />
    </div>
    <div class="v">
      <el-slider v-model="v" show-input :max="1" :step="0.01" />
    </div>
  </div>
</template>

<style scoped lang="scss">
// .red :deep(.el-slider__bar){
//     background-color: #FC240C;
// }
// .green :deep(.el-slider__bar){
//     background-color: #94E30C;
// }
// .blue :deep(.el-slider__bar){
//     background-color: #1E90FF;
// }
</style>

