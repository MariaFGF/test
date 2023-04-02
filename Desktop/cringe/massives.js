//1
/*let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let leng = styles.length
let mLeng = Math.round(leng / 2 - 1) // Находит середину массива
styles[mLeng] = "Класика" // Помещает значение в середину массива
console.log("Первый элемент массива:", styles[0])
styles.shift();
styles.unshift('Рэп, Регги')
console.log(styles)*/


//2
/*let i = 1
 while(i < 100){
 i++
 console.log(i)
}*/


//3
/*let a = 101
    while(a > 1){
        a--
    console.log(a)
}*/


//4
/*let g = 1
 while (g < 100) {
    if(g % 2 == 0) {
        console.log(g)
    }
    else{}
    g++
}*/


//5
/*let mass = []
 while (mass.length < 10) {
     mass.push("x")
}
console.log(mass)*/


//6
/*let f = 1
 let mass = []
 while(f <= 10){
    mass.push(f)
    f++
}
console.log(mass)*/


//7
/*let mass = []
 while(mass.length < 10) {
    let randomNumber = ((Math.random() * 0.98 ) + 0.01).toFixed(2)
    mass.push(randomNumber)
}
console.log(mass)*/


//8
/*let mass = []
 while(mass.length < 10) {
 let randomNumber = Math.floor(Math.random() * 10) + 1
    mass.push(randomNumber)
}
console.log(mass)*/


//9
/*let mass = ["12", "34", "785", "3", "11", "2", "9", "0", "6", "5"]
b = 1 
 while(b < 10){
    b++
    let object = mass[b]
  if(mass[object] > 0 && mass[object] < 10 ){
    console.log(object)
    }
}*/


//10
/*let mass = ["5", "34", "785", "3", "11", "2", "9", "0", "6", "9"]
let i = 0
    while(i < mass.length){
        let object = mass[i]
        if(object == 5){
    console.log('Есть')
    break    
    }
} i++*/


//11
/*let mass = [5, 3, 8, 3, 12, 2, 9]
let summ = 0
let i = 0

while(i < mass.length){
     summ += mass[i]
     i++
}
console.log(summ)*/


//12
/*let mass = [5, 3, 8, 3, 12, 2, 9]
let summ = 0
let i = 0
 while(i < mass.length){
    summ += mass[i] ** 2
    i++   
}
console.log(summ)*/


//13
/*let mass = [5, 3, 8, 3, 12, 2, 9]
let summ = 0
let i = 0

 while(i < mass.length){
    summ += mass[i] 
    i++ 
}
let sred = summ / mass.length
console.log(sred)*/