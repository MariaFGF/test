let s = 5679
let h = s/3600
let h1 = Math.floor(h)
let m = s/60
let m1 = Math.floor(m)
let s1 = s-(m1*60)
console.log(h1, m1, s1)
