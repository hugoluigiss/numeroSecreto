const elementoDica = document.querySelector('.dica');

function verificaNumero(){
    const numero = +vozReconhecida;

    console.log(numero)
    if(seONumeroForInvalido(numero)){
        elementoDica.innerHTML = `<div class="dica">Atenção o número é entre ${menorValor} e ${maiorValor}</div>`
        return;

    } 
    
    if(numero < menorValor || numero > maiorValor){
        elementoDica.innerHTML = `<div class="dica">Atenção o número é entre ${menorValor} e ${maiorValor}</div>`
        return;
    }
    
    if(numero < numeroSecreto){
        elementoDica.innerHTML = `<div class="dica">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }else{
        elementoDica.innerHTML = `<div class="dica">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    
    if(numero == numeroSecreto){
        document.body.innerHTML = `<div class="acertou">Parabéns você acertou!! <i class="fa-solid fa-check"></i></div>
        <div class="respostaFinal">O número secreto era ${numeroSecreto}</div>`
        document.body.style.background = '#FA2FB5';
    }


};




function seONumeroForInvalido(numero) {
    return Number.isNaN(numero);
}
