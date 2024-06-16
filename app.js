let numeroSecreto = gerarNumerpAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, 'BRzilian Portuguese Female', {rate:1.2});
}

function mensagemInicial (){
    exibirTextoNaTela ('h1',  'jogo do número secreto');
    exibirTextoNaTela ('p', 'escolha um número entre 1 e 100');
}

mensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumerpAleatorio(params) {
    return parseInt(Math.random() *100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumerpAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}