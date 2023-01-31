let a = 9876.431
let b = 78.98765
let n = 4
let c = Math.floor(a)
let d = Math.floor(b)
let e = Math.round ((a-c)*10**n)
let f = Math.round ((b-d)*10**n)
console.log ('Fractional part of numbers: ', e, f)
console.log ('e > f: ', e > f)
console.log ('e < f: ', e < f)
console.log ('e <= f: ', e <= f)
console.log ('e >= f: ', e >= f)
console.log ('e === f: ', e === f)
console.log ('e !== f: ', e !== f)
