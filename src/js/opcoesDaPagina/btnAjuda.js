// Array.prototype.forEachDaTurmaDo47 = function (funcao) {
//     console.log(this)
//     arrayInterno = this
//     for(let item of arrayInterno) {
//         funcao(item)
//     }
// }

;(function () {
    const btnAjuda = document.querySelector('#btnAjuda')
    
    btnAjuda.addEventListener('click', function() {
        const ajudas = [
            { conteudo: 'Aqui no CEEP você pode!', cor: 'orange' },
            { conteudo: 'Criar cartões', cor: 'lime' },
            { conteudo: 'E altos bagulhos', cor: 'green' },
        ]

        ajudas.reverse().forEach(function(ajuda) { // JS Way
            adicionaCartaoNoMural(ajuda.conteudo, ajuda.cor)
        })

    })
    btnAjuda.classList.remove('no-js')
})()