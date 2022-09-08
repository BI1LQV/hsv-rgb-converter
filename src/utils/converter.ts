// https://zhuanlan.zhihu.com/p/105886300
type threeTuple = [number, number, number]
type RGB = threeTuple
type HSV = threeTuple
export function HSV2RGB([h, s, v]: HSV): RGB {
  const c = v * s
  const x = c * (1 - Math.abs(h / 60) % 2 - 1)
  const m = v - c
  let r1 = 0
  let g1 = 0
  let b1 = 0
  if (h < 60) {
    r1 = c; g1 = x
  } else if (h < 120) {
    r1 = x; g1 = c
  } else if (h < 180) {
    g1 = c; b1 = x
  } else if (h < 240) {
    g1 = x; b1 = c
  } else if (h < 300) {
    r1 = x; b1 = c
  } else if (h < 360) {
    r1 = c; b1 = x
  }
  return [r1, g1, b1].map(i => (i + m)) as RGB
}
