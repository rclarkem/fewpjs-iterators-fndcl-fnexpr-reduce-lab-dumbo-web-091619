const batteryBatches = [4, 5, 3, 4, 4, 6, 5]
// function totalBatteries (arr) {
//   return arr.reduce(function (acc, curr) {
//     console.log(acc + curr)
//   }, 0)
// }
// totalBatteries(batteryBatches)
const totalBatteries = batteryBatches.reduce((previous, current) => {
  return previous + current
}, 0)
