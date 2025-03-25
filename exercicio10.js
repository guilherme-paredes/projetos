exercicio10.js
let np = Number(prompt("informe a quantidade de provas:"))
let n1 = Number(prompt("Informe a nota:"))
let provas = 0; 
let totaldeprovas = 1;
while(totaldeprovas <= np){
  n1 = Number(prompt("Informe a Proxima nota:"))
provas += n1; 
console.log("provas" + provas)
totaldeprovas++
console.log("Total de provas" + totaldeprovas)
} 
alert("Sua Média é: " + provas / totaldeprovas)
