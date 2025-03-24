exercicio10.js
let n1 = Number(prompt("Informe a nota:"))
let provas = 0; 
let totaldeprovas = 1;
while(totaldeprovas <= 5){
  n1 = Number(prompt("Informe a Proxima nota:"))
provas += n1; 
console.log(provas)
totaldeprovas++
console.log(totaldeprovas)
} 
alert("Sua Média é: " + provas / totaldeprovas)