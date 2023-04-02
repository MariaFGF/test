let string = 'my name is Bob'
maxlenght = 10

let numberofwords = string.length

if (numberofwords > maxlenght) {
    let yo = string.substr(0, maxlenght-3)
console.log(yo + "...")
}
else {
    console.log(string)
}
