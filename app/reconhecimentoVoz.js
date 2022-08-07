const elementoChute = document.getElementById('chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
let uva
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
 vozReconhecida = e.results[0][0].transcript;
 exibeVoz(vozReconhecida)
 verificaNumero()
}

function exibeVoz() {
    elementoChute.innerHTML = `<div class="titulo-disse">Você disse:</div> <span class="box">${vozReconhecida}</span> `
}

recognition.addEventListener('end', () => {
    recognition.start();
})

