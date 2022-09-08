const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if (n1 < n2 && n1 < n3 && n2 < n3) {
    return obj = {min:n1,mid:n2,max:n3}
  }else if(n1 < n2 && n1 < n3 && n3 < n2){
    return obj = {min:n1,mid:n3,max:n2}
  }else if(n2 < n1 && n2 < n3 && n3 < n1){
    return obj = {min:n2,mid:n3,max:n1}
  }else if(n2 < n1 && n2 < n3 && n1 < n3){
    return obj = {min:n2,mid:n1,max:n3}
  }else if(n3 < n1 && n3 < n2 && n2 < n1){
    return obj = {min:n3,mid:n2,max:n1}
  }else if(n3 < n1 && n3 < n2 && n1 < n2){
    return obj = {min:n3,mid:n1,max:n2}
  }else if(n1 == n2 && n1 < n3 && n2 < n3){
     return obj = {min:n1,mid:n2,max:n3}
   }else if(n1 == n2 && n1 > n3 && n2 > n3){
     return obj = {min:n3,mid:n1,max:n2}
   }else if(n1 == n3 && n1 < n2 && n3 < n2){
     return obj = {min:n1,mid:n3,max:n2}
   }else if(n1 == n3 && n1 > n2 && n3 > n2){
     return obj = {min:n1,mid:n2,max:n3}
   }else if(n2 == n3 && n2 < n1 && n3 < n1){
     return obj = {min:n2,mid:n3,max:n1}
   }else if(n2 == n3 && n2 > n1 && n3 > n1){
     return obj = {min:n1,mid:n2,max:n3}   
   }else{
     return obj = {min:n1,mid:n2,max:n3}
   }
}
module.exports = minMedMax

console.log(minMedMax(14,97,46))
console.log(minMedMax(1,1,9))
console.log(minMedMax(9,1,1))
console.log(minMedMax(1,9,1))
console.log(minMedMax(1,1,1))
console.log(minMedMax(85, 75, 65))
