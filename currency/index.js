// 将 159.2 转成 15920
const yuanToFen = v => Number(v.toString().replace('.', '')) * 100 / Math.pow(10, digitLength(v))
// 将 15920 转成 159.2
const fenToYuan = v => isNaN(v) ? '0.00' : (v / 100).toFixed(2)

export {
  fenToYuan,
  yuanToFen
}
