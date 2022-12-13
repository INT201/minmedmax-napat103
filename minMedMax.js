const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if (n1 > n2 && n2 > n3) return {max: n1, mid: n2, min: n3}
  if (n1 > n3 && n3 > n2) return {max: n1, mid: n3, min: n2}
  if (n1 > n2 && n2 === n3) return {max: n1, mid: n1, min: n2}
  if (n1 > n3 && n3 === n2) return {max: n1, mid: n1, min: n3}
  if (n2 > n1 && n1 > n3) return {max: n2, mid: n1, min: n3}
  if (n2 > n3 && n3 > n1) return {max: n2, mid: n3, min: n1}
  if (n2 > n1 && n1 === n3) return {max: n2, mid: n2, min: n1}
  if (n2 > n3 && n3 === n1) return {max: n2, mid: n2, min: n3}
  if (n3 > n1 && n1 > n2) return {max: n3, mid: n1, min: n2}
  if (n3 > n2 && n2 > n1) return {max: n3, mid: n2, min: n1}
  if (n3 > n1 && n1 === n2) return {max: n3, mid: n3, min: n1}
  if (n3 > n2 && n2 === n1) return {max: n3, mid: n3, min: n2}
}

module.exports = minMedMax