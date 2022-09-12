<script setup lang="ts">
import ColorSelector from "./components/ColorSelector.vue"
import RGBSelector from "./components/RGBSelector.vue"
import HSVSelector from "./components/HSVSelector.vue"
</script>

<template>
  <div flex ma items-center flex-col>
    <div m-b-10 text-10 m-t--10>
      HSV与RGB互转工具
    </div>
    <divflex flex ma items-center>
      <RGBSelector w-90 m-r-20></RGBSelector>
      <ColorSelector size="large"></ColorSelector>
      <HSVSelector w-90 m-l-20></HSVSelector>
    </divflex>
  </div>
</template>
