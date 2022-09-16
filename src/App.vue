<script setup lang="ts">
import ColorSelector from "./components/ColorSelector.vue"
import RGBSelector from "./components/RGBSelector.vue"
import HSVSelector from "./components/HSVSelector.vue"
</script>

<template>
  <div flex ma items-center flex-col w-full>
    <div m-b-10 text-10 m-t--10>
      HSV与RGB互转工具
    </div>
    <div class="main-wrap" flex ma items-center justify-between>
      <RGBSelector w-90></RGBSelector>
      <ColorSelector></ColorSelector>
      <HSVSelector w-90></HSVSelector>
    </div>
  </div>
</template>

<style>
  @media screen and (min-width: 880px) {
    .main-wrap {
      @apply w-220
    }
  }
  @media screen and (max-width: 880px) {
    .main-wrap {
      @apply w-full flex-col
    }
  }
</style>
