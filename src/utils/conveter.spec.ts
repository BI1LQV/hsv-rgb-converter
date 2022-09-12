import { describe, expect, it } from "vitest"
import { colorMap } from "./colorMap"
import { HSV2RGB, RGB2HSV } from "./converter"

const ALLOW_DELTA = 0.001

describe("rgb2hsv", () => {
  colorMap.forEach(({ rgb, hsv: [h0, s0, v0], name }) => {
    it(`convert ${name} rgb to correct hsv`, () => {
      const [r, g, b] = rgb.map(i => i / 255)
      const { h, s, v } = RGB2HSV({ r, g, b })
      expect(h / 360).approximately(h0, ALLOW_DELTA)
      expect(s).approximately(s0, ALLOW_DELTA)
      expect(v).approximately(v0, ALLOW_DELTA)
    })
  })
  it("convert rgb(127,82,93) to correct hsv", () => {
    const [r, g, b] = [127, 82, 93].map(i => i / 255)
    const hsv = RGB2HSV({ r, g, b })
    const { r: r1, g: g1, b: b1 } = HSV2RGB(hsv)
    expect(r1).approximately(r, ALLOW_DELTA)
    expect(g1).approximately(g, ALLOW_DELTA)
    expect(b1).approximately(b, ALLOW_DELTA)
  })
})

describe("hsv2rgb", () => {
  colorMap.forEach(({ rgb: [r0, g0, b0], hsv: [h, s, v], name }) => {
    it(`convert ${name} hsv to correct rgb`, () => {
      const { r: r1, g: g1, b: b1 } = HSV2RGB({ h: h * 360, s, v })
      expect(r1).approximately(r0 / 255, ALLOW_DELTA)
      expect(g1).approximately(g0 / 255, ALLOW_DELTA)
      expect(b1).approximately(b0 / 255, ALLOW_DELTA)
    })
  })
})
