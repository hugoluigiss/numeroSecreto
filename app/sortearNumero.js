const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.getElementById('menor-valor').innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor').innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleat√≥rio();

function gerarNumeroAleat√≥rio(){
  return parseInt(Math.random()* maiorValor + 1);
}

console.log(numeroSecreto);