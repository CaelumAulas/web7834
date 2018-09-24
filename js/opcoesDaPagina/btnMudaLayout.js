// Criamos uma variavel
// Pegamos o elemento
const btn = document.querySelector('#btnMudaLayout')
// Colocamos um evento (quando clicar...)
// Adicionamos um evento
// btn.onclick = mudaTexto
btn.addEventListener('click', mudaTexto)
// Criamos uma função com a lógica
function mudaTexto() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}
// btn.onclick = mudaLayout
btn.addEventListener('click', mudaLayout)
const mural = document.querySelector('.mural')
function mudaLayout() {
    
    mural.classList.toggle('mural--linha')

    // if(mural.classList.contains('mural--linha')) {
    //     mural.classList.remove('mural--linha')
    // } else {
    //     mural.classList.add('mural--linha')
    // }
    // Adicionar/Remover a classe mural--linha 
}


btn.classList.remove('no-js')