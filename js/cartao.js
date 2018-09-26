;(function() {// Estrutura de um módulo === IIFE

    const cartoes = document.querySelectorAll('.cartao')

    
    // for(let i = 0; i < cartoes.length; i++) {
    //     const cartao = cartoes[i]
    for(let cartao of cartoes) {
        // adicionar essa classe em um focus interno: cartao--focado
        cartao.addEventListener('focusin', function() {
            // console.log('focamos no cartao')
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function() {
            // console.log('desfocamos do cartao')
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(infosDoEventoDisparado) {
            // Design Pattern: Delegate
            const elementoClicado = infosDoEventoDisparado.target
            // console.log(elementoClicado)
            const isRadioTipo = elementoClicado
                                    .classList
                                    .contains('opcoesDoCartao-radioTipo')
            
            if(isRadioTipo) {
                const corNovaDoCartao = elementoClicado.getAttribute('value')
                cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        // # Momentos da digitação
        // keyup
        // keydown
        // keypress

        // # Enquanto digita
        // input
        cartao.addEventListener('keydown', function(infosDoEvento) {
            // console.log(infosDoEvento)
            // console.log('keydown foi pressionado', infosDoEvento.key)
            const elementoFocadoAtualmente = infosDoEvento.target
            const isLabel = elementoFocadoAtualmente
                                .classList
                                .contains('opcoesDoCartao-opcao')
            const isEspaco = infosDoEvento.key == ' '
            const isEnter = infosDoEvento.key  == 'Enter'
            if(isLabel && (isEnter || isEspaco)) {
                // console.log('devemos disparar algum bagulho')
                elementoFocadoAtualmente.click()
            }

        })


        // # DESAFIO
        // Implementar o código de remover cartão
        // Via Delegação de Eventos (Delegate)
        // Comenta o código do arquivo:
            // ./js/opcoesDoCartao/opcoesDoCartao-remove.js  
        cartao.addEventListener('click', function(pudim) {
            const elementoClicado = pudim.target
            // saber se o elemento clicado é a lixeira
            const isBtnRemove = elementoClicado
                                    .classList
                                    .contains('opcoesDoCartao-remove')
            if(isBtnRemove) {
                // const cartao = elementoClicado.parentNode.parentNode
                // se for, pegar o cartao e ocultar ele
                cartao.classList.add('cartao--some')
                // excluir o cartao da tela
                cartao.addEventListener('transitionend', function() {
                    cartao.remove()
                })
            }
        })



    }

    // remover essa classe saindo do focus interno: cartao--focado

})()