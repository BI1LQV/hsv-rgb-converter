// https://zhuanlan.zhihu.com/p/105886300
export interface RGB { r: number; g: number; b: number }
export interface HSV { h: number; s: number; v: number }
export function HSV2RGB({ h, s, v }: HSV): RGB {
  /**
   * h 色调 在0-360度范围
   * s 饱和度 在0-1范围
   * v 明度 在0-1范围
   */
  const c = v * s
  const x = c * (1 - Math.abs(h / 60 % 2 - 1))
  const m = v - c
  let r = m
  let g = m
  let b = m
  if (h < 60) {
    r += c; g += x
  } else if (h < 120) {
    r += x; g += c
  } else if (h < 180) {
    g += c; b += x
  } else if (h < 240) {
    g += x; b += c
  } else if (h < 300) {
    r += x; b += c
  } else if (h < 360) {
    r += c; b += x
  }
  return { r, g, b }
}

export function RGB2HSV({ r, g, b }: RGB): HSV {
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
  if (h < 0) {
    h += 360
  }

  return { h, s, v: cMax }
}
