//1 
let password = '-_a'
if (password.length >= 4 && password.includes('-' || '_')) {
    console.log('the password is strong')
}
else {
    console.log('the password is unreliable')
}

//2
let name = 'MaRIa'
let surname = 'avaGumyan'

let name1 = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
let surname1 = surname.substr(0,1).toUpperCase() + surname.substr(1).toLowerCase()
console.log(name1)
console.log(surname1)
console.log(name === name1 ? 'Имя было преобразовано' : 'Имя осталось без изменений')
console.log(surname === surname1 ? 'Фамилия была преобразована' : 'Фамилия осталась без изменений')

