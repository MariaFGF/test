//1 
/*let obj2 = {
name: "Ivan",
age: 19,
}
console.log(obj2)
console.log(obj2.age)


//2
let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' }
console.log(obj.Коля)*/


//3
/*let user = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    }
]

let user1 
for(key in user) {
    if(user[key].name == "Bob") {
    user1 = user[key]
    }
}
console.log(user1)

let user2 = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    }
]

for(i in user2){
    if (user2[i].name =="Anna"){
    delete user2[i] 
    }
}
console.log(user2[0])
console.log(user2[1])
console.log(user2[2])*/


//4
/*let obj = {
    name:"Anna",
    surname:"Ene",
    c() 
    {
 console.log(obj.name,obj.surname)
    },
}
obj.c()
obj.b = function(){console.log('My name...')}
delete obj.c
console.log(obj)*/


//5
/*let sum = 0
let mul = 1
function sumAndMul(num) {
    
    for (let k in num) {
    sum += num[k]
    mul *= num[k]
    }
console.log(sum,mul)
}
let calculator = {
    num1:100,
    num2:150
}
sumAndMul(calculator)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

for (let prop in salaries) {
console.log(prop)
console.log(salaries[prop])
}*/


//6
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
let mas = Object.values(salaries)
    for (let k in mas){
    sum += mas[k]
}
console.log(sum)*/


//7
/*let user = {
    name: "John",
    age: 30
}

//1
let mas = Object.keys(user)
if (mas.length == 0) {
console.log('pysto')
}
else {
    console.log('HE pysto')
    for(let i in user) {
        if (i == 'age') {
        console.log('age есть')
        }
    }
}

//2
function func(obj) {
for (let i in obj) {
return true;
}
return false;
}
if(func(user)){
console.log('HE pyst')
}*/


//9
/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj) {
for (let i in obj) {
    if ((typeof obj[i]) === "number") {
        obj[i] *=2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)*/