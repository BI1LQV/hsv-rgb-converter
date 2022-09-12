<script lang="ts" setup>
import { toRefs } from "vue"
import { rgb } from "../store/index"
const { r, g, b } = toRefs(rgb)
</script>

<template>
  <div>
    <div class="red" flex items-center>
      R：<el-slider v-model="r" :step="1" show-input :max="255" />
    </div>
    <div class="green" flex items-center>
      G：<el-slider v-model="g" :step="1" show-input :max="255" />
    </div>
    <div class="blue" flex items-center>
      B：<el-slider v-model="b" :step="1" show-input :max="255" />
    </div>
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
