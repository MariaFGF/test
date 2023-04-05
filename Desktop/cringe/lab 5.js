/*let email1 = ['defbnjeusdn@mail.ru', 'dhgliaugr@mail.com', 'djfhlekjg@mail.com']
let email2 = ['fhjdfj@mail.ru', 'fjfdklsd@mail.ru']
let mass = []

function filter(email1, email2) {
for (let i = 0; i < email1.length; i++) {
    if (email2.includes(email1[i])) {
      continue
    } else {
      mass.push(email1[i])
    }
  }
  return mass
}
console.log(filter(email1, email2))*/





let sum = 54515;
let products = 20;
let prom = "ДАРИМ300";

function calculate(sum, products, prom = null) {
  if (prom === "ДАРИМ300") {
    sum = sum - 300;
    if (sum < 300) {
      sum = 0;
    }
  }
  if (products >= 10) {
    sum = sum - (sum / 100) * 5;
  }
  if (sum > 50000) {
    sum = sum - ((sum - 50000) / 100) * 20;
  }
  if (prom == "СКИДКА15" && sum >= 20000) {
    sum = sum - (sum / 100) * 15;
  }
  return Math.floor(sum);
}
console.log(calculate(sum, products, prom));