const Express = require('express')

const app = new Express()

app.get('/cartoes/instrucoes', function (request, response) {
    console.log('Usuário fez um request')

    response.set('Access-Control-Allow-Origin', '*')

    response.send({
        _id: "5af5aa8eaf9d88c725c4da04",
        usuario: "omariosouto",
        cartoes: [
            {
                _id: "5bad15e71c00680011c101f7",
                cor: "rgb(255, 165, 0)",
                conteudo: "Aqui no CEEP você pode!"
            },
        ]
    })
})

app.listen(3000, function () {
    console.log('Servidor subiu com sucessinhos!')
})