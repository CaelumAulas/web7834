// Module Pattern
// Revealing Module Pattern
; (function () {
    "use strict";
    // Esse é o problema: CORS (Cross Origin Ressource Sharing) (AJAX)
    // Essa é a solução: JSONP
    // JUQUERI RESOLVE FÁCIL
    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto',
        type: 'GET',
        dataType: 'jsonp',
        success: function(dadosDoServer) {
            console.log(dadosDoServer.cartoes)
            dadosDoServer.cartoes.forEach(function(cartao) {
                adicionaCartaoNoMural(cartao.conteudo, cartao.cor)
            })
        }
    })
    // http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto



    // Força a declaração de variaveis

    let contador = 0

    window.adicionaCartaoNoMural = function (conteudo, cor) {

        contador++
        // É a ideia por trás dos frameworks!!      
        // ## Criando cartão de forma feliz
        const conteudoDoCartao = conteudo

        const cartao = $(`
<article id="cartao_${contador}" class="cartao" style="background-color: ${cor};" tabindex="0">
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
        cartao.on('focusin', function () {
            // classList.add (Js Puro) vira addClass (Juqueri)            
            cartao.addClass('cartao--focado')
        })
        cartao.on('focusout', function () {
            // console.log('desfocamos do cartao')
            cartao.removeClass('cartao--focado')
        })
        cartao.on('change', function (infosDoEventoDisparado) {
            // Design Pattern: Delegate
            const elementoClicado = infosDoEventoDisparado.target

            console.log(infosDoEventoDisparado.target)
            console.log($(infosDoEventoDisparado.target))
            // console.log(elementoClicado)
            const isRadioTipo = elementoClicado
                .classList
                .contains('opcoesDoCartao-radioTipo')

            if (isRadioTipo) {
                const corNovaDoCartao = elementoClicado.getAttribute('value')
                cartao.css('background-color', corNovaDoCartao)
                // cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        cartao.on('keydown', function (infosDoEvento) {
            // console.log(infosDoEvento)
            // console.log('keydown foi pressionado', infosDoEvento.key)
            const elementoFocadoAtualmente = infosDoEvento.target
            const isLabel = elementoFocadoAtualmente
                .classList
                .contains('opcoesDoCartao-opcao')
            const isEspaco = infosDoEvento.key == ' '
            const isEnter = infosDoEvento.key == 'Enter'
            if (isLabel && (isEnter || isEspaco)) {
                // console.log('devemos disparar algum bagulho')
                elementoFocadoAtualmente.click()
            }

        })

        cartao.on('click', function (pudim) {
            const elementoClicado = pudim.target
            // saber se o elemento clicado é a lixeira
            const isBtnRemove = elementoClicado
                .classList
                .contains('opcoesDoCartao-remove')
            if (isBtnRemove) {
                // const cartao = elementoClicado.parentNode.parentNode
                // se for, pegar o cartao e ocultar ele
                cartao.addClass('cartao--some')
                // excluir o cartao da tela
                cartao.on('transitionend', function () {
                    cartao.remove()
                })
            }
        })

        // Fazer o cartao novo ir para o .mural
        $('.mural').prepend(cartao)


    }


})()