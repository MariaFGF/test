let a = 567
let a1 = Math.floor(a/100)
let a2 = Math.floor(a/10-(a1*10))
let a3 = Math.floor(a-Math.floor(a/10)*10)
console.log('Proisvedenie: ', a1*a2*a3)
console.log('Summa: ', a1+a2+a3)
