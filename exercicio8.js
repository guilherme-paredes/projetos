exercicio8.js
let d1 = Number(prompt("Digite um numero:"))
let i2 = 0
 
while (d1 > 0) {
    i2 += d1
    console.log(" " + i2 + " ")
    d1 = Number(prompt("digite outro numero:"))
}
alert (" a soma dos numeros ditados é: " + i2)
