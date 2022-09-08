import { describe, expect, it } from "vitest"
import type { threeTuple } from "./converter"
import { colorMap } from "./colorMap"
import { HSV2RGB, RGB2HSV } from "./converter"

const ALLOW_DELTA = 0.001

describe("rgb2hsv", () => {
  colorMap.forEach(({ rgb, hsv: [h0, s0, v0], name }) => {
    it(`convert ${name} rgb to correct hsv`, () => {
      const [h, s, v] = RGB2HSV(rgb.map(i => i / 255) as threeTuple)
      expect(h / 360).approximately(h0, ALLOW_DELTA)
      expect(s).approximately(s0, ALLOW_DELTA)
      expect(v).approximately(v0, ALLOW_DELTA)
    })
  })
})

describe("hsv2rgb", () => {
  colorMap.forEach(({ rgb, hsv, name }) => {
    it(`convert ${name} hsv to correct rgb`, () => {
      const newRGB = HSV2RGB([hsv[0] * 360, hsv[1], hsv[2]])
      Array.from({ length: 3 }).forEach((_, i) => {
        expect(newRGB[i]).approximately(rgb[i] / 255, ALLOW_DELTA)
      })
    })
  })
})
