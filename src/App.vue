<script setup lang="ts">
import ColorSelector from "./components/ColorSelector.vue"
import RGBSelector from "./components/RGBSelector.vue"
import HSVSelector from "./components/HSVSelector.vue"
</script>

<template>
  <div flex ma items-center>
    <RGBSelector w-100 m-r-20></RGBSelector>
    <ColorSelector size="large"></ColorSelector>
    <HSVSelector w-90 m-l-20></HSVSelector>
  </div>
</template>
