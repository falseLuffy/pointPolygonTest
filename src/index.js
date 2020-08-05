import pnpoly from './lib/pnploy'

/**
 * @param {required} pointer 待测点
 * @param {required} polygon 待测多边形各定点集合
 */
export default function pointPolygonTest (pointer, polygon) {
  const nvert = polygon.length
  const vertx = []
  const verty = []
  const [x, y] = pointer
  if (nvert < 3) {
    console.error('polygon 不是一个多边形定点集合')
    return
  }
  polygon.forEach((item) => {
    const [x, y] = item
    vertx.push(x)
    verty.push(y)
  })
  return pnpoly(nvert, vertx, verty, x, y)
}
