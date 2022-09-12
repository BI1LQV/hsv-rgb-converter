<script lang="ts" setup>
import { computed, ref, toRefs, watch } from "vue"
import { rgb } from "@/store"
const color = computed({
  get() {
    return `rgb(${rgb.r},${rgb.g},${rgb.b})`
  },
  set(value: string) {
    const matches = /#(?<r>[0-9a-f]{2})(?<g>[0-9a-f]{2})(?<b>[0-9a-f]{2})/i[Symbol.match](value)?.groups
    if (!matches) { return }
    const { r: hexR, g: hexG, b: hexB } = matches
    const r = parseInt(hexR, 16)
    const g = parseInt(hexG, 16)
    const b = parseInt(hexB, 16)
    rgb.r = r
    rgb.g = g
    rgb.b = b
  },
})

const predefineColors = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
])
</script>

<template>
  <div>
    <el-color-picker v-model="color" :predefine="predefineColors" />
  </div>
</template>
