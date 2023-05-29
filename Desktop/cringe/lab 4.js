//1
/*let a = [];
let m = 2;
let n = 5;
let count = 50;

for ( let i = 0; i < count; i++ ) {
a.push( Math.round(Math.random() * (m-n) + n) );
}

console.log(a)


//2
function reverseStr(str) {
    
    return str.split("").reverse().join("");
    
}
console.log(reverseStr("Привет мир!"))*/


//3
/*let roadMines = [false, 4 > 5, true, false, 4 > 5 , true, false, 4 > 5 , true]
let a = 1

for(let i= 0; i < roadMines.length; i++) {

    if (roadMines[i] == true) {
      if(a == 1) {
        console.log("танк повреждён")
        a +=1
      }
      else if(a == 2){
        console.log("танк уничтожен")
        return
      }
    }
    else {
      console.log(`танк переместился на позицию ${i+1}`)
    }
}*/


//4
/*let dniNed = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье']
let pervDnNed = 'среда'

let tekDen = dniNed.indexOf(pervDnNed) -1



for(let i = 1; i<31 ; i++){
    if (tekDen==6){
        tekDen = -1
    }
    tekDen +=1
    console.log(`${i} января,${dniNed[tekDen]}`)
    }*/
