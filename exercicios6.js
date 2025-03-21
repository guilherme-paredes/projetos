
let a = prompt("adivinhe o numero entre 1 e 10:")
let x = 0
let numeroSorteado;
const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(10);
numeroSorteado = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
while (a != numeroSorteado) {
    console.log("ns " + numeroSorteado);
    a = prompt("Você errou, Tente denovo:")
    x++
}
alert("você acertou! você tentou um total de " + x + "x até acertar o numero " + numeroSorteado + " , Parabéns!")
