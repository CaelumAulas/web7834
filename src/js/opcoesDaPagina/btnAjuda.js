// Array.prototype.forEachDaTurmaDo47 = function (funcao) {
//     console.log(this)
//     arrayInterno = this
//     for(let item of arrayInterno) {
//         funcao(item)
//     }
// }

// Array.prototype.map = function (funcao) {
//     const novoArray = []
//     arrayInterno = this


//     for(let item of arrayInterno) {
//         novoArray.push(funcao(item))
//     }

//     return novoArray
// }

; (function () {
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function () {
        // Mandar uma requisição GET: http://ceep.herokuapp.com/cartoes/instrucoes
        
        // Cria requisição
        const pegaAjudas = new XMLHttpRequest()
        // Para onde vamos mandar essa requisição
        pegaAjudas.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes')
        // Disparamos a requisição
        pegaAjudas.send()
        
        // Recebemos o retorno
        pegaAjudas.addEventListener('load', function() {
            // Pega o retorno (CTRL + C), e coloca na variável ajudas (CTRL + V)
            const ajudas = JSON.parse(pegaAjudas.response)
            ajudas.instrucoes.reverse().forEach(function (ajuda) { // JS Way
                adicionaCartaoNoMural(ajuda.conteudo, ajuda.cor)
            })
        })
        


    })
    btnAjuda.classList.remove('no-js')
})()