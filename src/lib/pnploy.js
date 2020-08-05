/**
 * 判断一个点是否在一个多边形内部
 * @param nvert 多边形的顶点数
 * @param vertx 多边形顶点的横坐标数组
 * @param verty 多边形顶点的纵坐标数据
 * @param testx 待测点的横坐标
 * @param testy 待测点的中坐标
 * @returns {boolean}
 */
export default function pnpoly (nvert, vertx, verty, testx, testy) {
  // eslint-disable-next-line one-var
  let i, j, c = false
  for (i = 0, j = nvert - 1; i < nvert; j = i++) {
    if (((verty[i] > testy) !== (verty[j] > testy)) &&
      (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) { c = !c }
  }
  return c
}
