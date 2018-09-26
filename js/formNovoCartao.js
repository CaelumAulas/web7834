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
        contador++  
        // É a ideia por trás dos frameworks!!      
        // ## Criando cartão de forma feliz
        const conteudoDoCartao = document
                                .querySelector('.formNovoCartao-conteudo')
                                .value

        const cartao = $(`
<article id="cartao_${contador}" class="cartao" tabindex="0">
    <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg>
                <use xlink:href="#iconeRemover"></use>
            </svg>
        </button>

        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo"
            checked="">
        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
            tabindex="0">
            Padrão
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
            tabindex="0">
            Importante
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
            tabindex="0">
            Tarefa
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
            tabindex="0">
            Inspiração
        </label>
    </div>
    <p class="cartao-conteudo" contenteditable="" tabindex="0">${conteudoDoCartao}</p>
</article>
        `)// Fechamento da criação do cartão

        // addEventListener (JS Puro) e on (Juqueri)
        cartao.on('focusin', function() {
            // classList.add (Js Puro) vira addClass (Juqueri)            
            cartao.addClass('cartao--focado')
        })
        cartao.on('focusout', function() {
            // console.log('desfocamos do cartao')
            cartao.removeClass('cartao--focado')
        })
        cartao.on('change', function(infosDoEventoDisparado) {
            // Design Pattern: Delegate
            const elementoClicado = infosDoEventoDisparado.target

            console.log(infosDoEventoDisparado.target)
            console.log($(infosDoEventoDisparado.target))
            // console.log(elementoClicado)
            const isRadioTipo = elementoClicado
                                    .classList
                                    .contains('opcoesDoCartao-radioTipo')
            
            if(isRadioTipo) {
                const corNovaDoCartao = elementoClicado.getAttribute('value')
                cartao.css('background-color', corNovaDoCartao)
                // cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        // Fazer o cartao novo ir para o .mural
        $('.mural').prepend(cartao)
    }
    document.querySelector('.formNovoCartao-conteudo').value = ''
})


form.classList.remove('no-js')
})()