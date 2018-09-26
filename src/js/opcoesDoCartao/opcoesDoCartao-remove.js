// // Module Pattern
// ;(function () {// IIFE = Função executada automaticamente
//     // 1 - Pegar o elemento
//     const botoes = document.querySelectorAll('.opcoesDoCartao-remove')

//     // Contexto de Leitura // Lexical Context
//     for(let i = 0; i < botoes.length; i++ ) {
//         // adicionar um evento de click
//         cartao.addEventListener('click', function removeCartao() { // CallBack == Chamada de Retorno
//             const cartao = botoes[i].parentNode.parentNode
//             // Primeiro executa o efeito
//             cartao.classList.add('cartao--some')
//             // Depois de um tempo remove        
//             cartao.addEventListener('transitionend', function() {
//                 cartao.remove()
//             })
//         })
//     }
    
// })()












// // ========
// // 1 - Vamos remover somente um elemento
// // 2 - Fazendo ele sumir de forma animada

//         // setTimeout(function () {
//         //     cartao.remove()
//         // }, 500)