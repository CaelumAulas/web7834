;(function() {
    "use strict"
    
    const btnSync = $("#btnSync")
    
    // # Forçar atualizão quando:
    // - Clicar no remover: OK
    // - Mudar cor: ok
    // - E quando criar um cartão novo : 
    // - Editar*: 

    window.sincronizar = function() {
        btnSync.removeClass('botaoSync--sincronizado')
        btnSync.addClass('botaoSync--esperando')
        
        const mural = {
            usuario: "omariasouto",
            cartoes: Array.from(document.querySelectorAll('.cartao')).map(function(cartaoAtual){
                const cor = getComputedStyle(cartaoAtual).getPropertyValue('background-color')
                const texto = cartaoAtual.querySelector('.cartao-conteudo').textContent
                const cartao = {
                    conteudo: texto,
                    cor: cor
                }
                return cartao
            })
        }
        console.log(mural.cartoes) // [{}, {}]
        
        // Enviar esses dados para o servidor
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(mural))    

        xhr.addEventListener('load', function() {
            btnSync.addClass('botaoSync--sincronizado')
            btnSync.removeClass('botaoSync--esperando')
        })

        xhr.addEventListener('error', function() {
            btnSync.addClass('botaoSync--deuRuim')
            btnSync.removeClass('botaoSync--esperando')
        })

        // Acessem:
        // http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto

    }

    btnSync.on('click', sincronizar)


    btnSync.removeClass('no-js')
})()