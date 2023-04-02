//1 
let password = '-_a'
if (password.length >= 4 && password.includes('-' || '_')) {
    console.log('the password is strong')
}
else {
    console.log('the password is unreliable')
}

//2
let name = 'petYa'
let surname = 'KUrov'

let username = name[0].toUpperCase() + name.slice(1).toLowerCase()
let usersurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase()
console.log(username)
console.log(usersurname)
console.log(name === username ? 'Имя было преобразовано' : 'Имя осталось без изменений') 
console.log(surname === usersurname ? 'Фамилия была преобразована' : 'Фамилия осталась без изменений')

