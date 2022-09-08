// https://zhuanlan.zhihu.com/p/105886300
export type threeTuple = [number, number, number]
export type RGB = threeTuple
export type HSV = threeTuple
export function HSV2RGB([h, s, v]: HSV): RGB {
  /**
   * h 色调 在0-360度范围
   * s 饱和度 在0-1范围
   * v 明度 在0-1范围
   */
  const c = v * s
  const x = c * (1 - Math.abs(h / 60) % 2 - 1)
  const m = v - c
  let r1 = m
  let g1 = m
  let b1 = m
  if (h < 60) {
    r1 += c; g1 += x
  } else if (h < 120) {
    r1 += x; g1 += c
  } else if (h < 180) {
    g1 += c; b1 += x
  } else if (h < 240) {
    g1 += x; b1 += c
  } else if (h < 300) {
    r1 += x; b1 += c
  } else if (h < 360) {
    r1 += c; b1 += x
  }
  return [r1, g1, b1] as RGB
}

export function RGB2HSV([r, g, b]: RGB): HSV {
  /**
   * rgb 都在0-1范围
   */
  const cMax = Math.max(r, g, b)
  const cMin = Math.min(r, g, b)
  const delta = cMax - cMin

  let h = 60
  if (delta === 0) {
    h *= 0
  } else if (cMax === r) {
    h *= (g - b) / delta
  } else if (cMax === g) {
    h *= (b - r) / delta + 2
  } else if (cMax === b) {
    h *= (r - g) / delta + 4
  }

  let s = 0
  if (cMax !== 0) {
    s = delta / cMax
  }

  return [h, s, cMax] as HSV
}
