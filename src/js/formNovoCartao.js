;(function(){

const form = document.querySelector('.formNovoCartao')
let contador = document.querySelectorAll('.cartao').length

form.addEventListener('submit', function(infosDoEvento) {
    infosDoEvento.preventDefault()

    // vamos validar as parada
    const valorDoTextArea = document
                .querySelector('.formNovoCartao-conteudo')
                .value
    console.log(valorDoTextArea.length)
    const isTextAreaVazio = valorDoTextArea.length == 0
    
    if(isTextAreaVazio) {
        // - Cria Elemento de Forma Imperativa
        const msgErro = document.createElement('div')
        msgErro.classList.add('formNovoCartao-msg')
        msgErro.textContent = 'Não digite vários nadas'

        // Faz aparecer depois do textare
        const textarea = document.querySelector('.formNovoCartao-conteudo')
        textarea.insertAdjacentElement('afterend', msgErro)
        
        // Registra um evento para o elemento sumir
        msgErro.addEventListener('animationend', function() {
            msgErro.remove()
        })
    } else {
        adicionaCartaoNoMural(valorDoTextArea)
    }
    document.querySelector('.formNovoCartao-conteudo').value = ''
})


form.classList.remove('no-js')
})()