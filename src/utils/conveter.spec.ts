import { describe, expect, it } from "vitest"
import type { threeTuple } from "./converter"
import { colorMap } from "./colorMap"
import { HSV2RGB, RGB2HSV } from "./converter"
// describe("rgb2hsv", () => {
//   colorMap.forEach(({ rgb, hsv, name }) => {
//     it(`convert ${name} rgb to correct hsv`, () => {
//       const [h, s, v] = RGB2HSV(rgb.map(i => i / 255) as threeTuple)
//       expect(h / 360).approximately(hsv[0], 0.001)
//       expect(s).approximately(hsv[1], 0.001)
//       expect(v).approximately(hsv[2], 0.001)
//     })
//   })
// })

describe("rgb2hsv", () => {
  colorMap.forEach(({ rgb, hsv, name }) => {
    it(`convert ${name} hsv to correct rgb`, () => {
      const newRGB = RGB2HSV([hsv[0] * 360, hsv[1], hsv[2]])
      //   Array.from({ length: 3 }).forEach((_, i) => {
      const i = 2
      expect(newRGB[i]).approximately(rgb[i] / 255, 0.001)
    //   })
    })
  })
})
