import { reactive, watch } from "vue"
import { HSV2RGB, RGB2HSV } from "@/utils/converter"

export const rgb = reactive({
  r: 0,
  g: 0,
  b: 0,
})

export const hsv = reactive(RGB2HSV(rgb))

let hsvChangeFromRgb = false
let rgbChangeFromHsv = false

watch(rgb, () => {
  if (rgbChangeFromHsv) {
    rgbChangeFromHsv = false
    return
  }
  hsvChangeFromRgb = true
  setTimeout(() => {
    const { r, g, b } = rgb
    const { h, s, v } = RGB2HSV({ r: r / 255, g: g / 255, b: b / 255 })
    hsv.h = Number(h.toFixed(2))
    hsv.s = Number(s.toFixed(2))
    hsv.v = Number(v.toFixed(2))
  })
})

watch(hsv, () => {
  if (hsvChangeFromRgb) {
    hsvChangeFromRgb = false
    return
  }
  rgbChangeFromHsv = true
  setTimeout(() => {
    const { r, g, b } = HSV2RGB(hsv)
    rgb.r = Math.round(r * 255)
    rgb.g = Math.round(g * 255)
    rgb.b = Math.round(b * 255)
  })
})
