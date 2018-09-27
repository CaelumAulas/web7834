# 8 - Removendo Cartões 
- Fazer o botão da lixeira funcionar
    - Quando Clicar na lixeira
    - propriedade no css (visibility: hidden;)
    - addEventlistener
### Usuário
- Clica na lixeira
- Remove a anotação, clicada

### Dev
- Registramos um evento de click (registrar que pode ter uma ação)
    - onclick já resolve a vida inicialmente
- 

# 9 - Mudando texto do btn muda layout
- Mudar para blocos
### Usuario
- Clica em "Linhas"
- O texto do botão mudou para "Blocos"
- Alinhar um elemento embaixo do outro

### Dev
- Adicionar um evento no botão: #btnMudaLayout
- Fazemos algum if para decidir qual texto aparece


# 10 - Mudando o Layout
- Adiciona o evento
- Usando classList para manipular as classes do elemento

## 11 - Progressive Enhancement
- Coisas que tem funcionalidade, só aparecem depois que o JS carregou.
    - display none
    - Só mostramos o recurso, se o usuário puder interagir
- Curiosidade: https://modernizr.com/download?setclasses


## 16 - 
# Usuario
- clica em uma cor 
- muda a cor do cartão clicado

# Dev
- adicionar um evento de click, no botão (bolinha colorida)

## 17 - Desafio!!!1!1!
- Refazer o código do remover, com delegate

## 18 - Criar um cartão
### Usuario
- Digita alguma coisa
- Clica para salvar/Ou aperta enter (desafio 1 maroto hahaha)
    - se ele nao digitar nada?
    - Verificar se tem conteudo ou não
- cartão aparece onde?
    - no inicio da listagem de cartões

### Dev
- Usuário clica

- Desafio 2: [Contador de caracteres]






## Dicas para a vida
- Quando JS roda:
    - Quando carrega
    - Ou algum evento é disparado
- Eventos Gratuitos: 
    - https://www.meetup.com/pt-BR/find/
- Front End
    - UI - Manja mais de CSS e Semantica (html no caso)
    - Interação - JS
    - Acessibilidade
    - Performance
    - Animation:
        - https://daneden.github.io/animate.css/
        - https://www.w3schools.com/howto/howto_css_flip_image.asp
- Qualidade de código:
    - Clean Code: https://www.google.com.br/search?q=clean+code&oq=clean+code&aqs=chrome..69i57j69i60j0l4.2041j0j4&sourceid=chrome&ie=UTF-8 (Robert Cecil Martin/Uncle Bob)
    - Linters:
        - https://standardjs.com/
        - https://github.com/airbnb/javascript
- Tabindex:
    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/tabindex
- Dribble: https://dribbble.com/
- Material Design: https://getmdl.io/templates/index.html


## Dica Master: 
- Não surtar mais com aprender novas versões: https://github.com/tc39/
- Lugar para se atualizar sobre browsers: https://www.youtube.com/user/ChromeDevelopers/videos

## Dicas CSS:
- Flexbox: https://flexboxfroggy.com/
- (Marcobruno) Série sobre posicionamento com CSS: https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x


## Comandos Úteis
- Ctrl + D = Seleciona várias linhas a partir de um trecho
- Alt + Setas = Movimenta as linhas loucamente
- Alt + Shift + Setas = Duplica as linhas loucamente (Pesquisar esse aqui)
- Ctrl + K + C (Cmd + /) = Comenta várias linhas 




## JavaScript o que é?

- Linguagem JavaScript:
    - https://babeljs.io/
    - ECMA 262
- Funções que tem no Browser
    - Manipulação de Elementos e **funções** que o browser nao tem
- Funções que tem no Node
    - lib para criar arquivos
    - Fez rodar fora do browser:
        - Ryan Dahl: https://www.youtube.com/watch?v=hVqhStf-aDk


## Configurando o Babel
## Primeiro
- Cria o package.json

> npm init 
> Aperta enter até terminar


## Instala os pacotes do babel
1 - Roda esses comandos no terminal
> npm install --save-dev @babel/core @babel/cli @babel/preset-env

## Roda o comando para gerar a pasta dist
> ./node_modules/.bin/babel src --out-dir dist --presets=@babel/env --copy-files
> Neste momento, se a pasta já existir ela é sobreposta

## Colocando o site no ar
- Copia a pasta dist e cola no servidor
3 - Para colocar o site no ar, suba a pasta "./dist"

## Dicas sobre Testes
- Teste automatizado de fluxos do usuário: https://www.cypress.io/

## Lugares para por o projeto no ar:
- https://www.netlify.com/ (recomendo fortemente)
- AWS (Roots)
    - Alura fica na amazon
- Digital Ocean (Forma mais feliz de mexer na amazon)
- Heroku (SASS)
- Google Cloud Services. (300 dolares de teste)
    - Caelum fica aqui

## não manjo de backend, o que fazer?
- Back End as a Service
    - https://firebase.google.com/?hl=pt-br
    - https://www.back4app.com/
    - Como criar uma API em [nome da linguagem do seu coração]
- Métodos do HTTP:
    - https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

## Manjo de backend, e agora?
- Documentação: https://swagger.io/
- Publicando site com Node: https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/ 

## Sou curioso de backend
- https://github.com/marblejs/marble

## Multiplataforma
- Desktop: https://electronjs.org/
- Mobile: https://cordova.apache.org/
