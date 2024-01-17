# <p align = "center"> Movie Finder </p>

<p align="center">
   <img src="https://static.vecteezy.com/system/resources/previews/010/286/336/original/realistic-open-movie-clapper-open-isolated-on-transparent-background-shown-slate-board-png.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/danilo-olacerda?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/danilo-olacerda/Teste-OmniChat?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Este é um projeto para o teste técnico da OmniChat.

O [Movie Finder](teste-omni-chat.vercel.app) consiste em uma lista de sugestão de filmes, que por sua vez podem ser filtrados pelos seus gêneros favoritos e até mesmo pelo seu ano de lançamento. Dessa forma caso você queira uma recomendação de um filme de comédia dos anos 2000, basta entrar no Movie Finder e selecionar o gênero e ano de lançamento, dessa forma você vai ter várias opções para escolher, e caso se interesse por algum título, você pode ainda navegar até a página com mais informações do filme apertando no botão de "Ver Mais".

***

## :computer:	 Tecnologias e Conceitos

- Angular 17
- REST APIs
- TypeScript
- Karma/Jasmine

***

## :rocket: Rotas

```yml
URL: /
    - Nessa rota é feita a listagem de filmes e também são utilizados os filtros desejados
    - Ao pressionar em "Ver Mais" em algum card você é redirecionado para a página desse filme
```
    
```yml 
URL: /movie/:id
    - Nessa rota são exibidos detalhes do filme selecionado
    - Ao pressionar em "Voltar" você será levado de volta a listagem de filmes
```

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Angular](https://angular.io/guide/setup-local), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente, além é claro do CLI do próprio Angular.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/danilo-olacerda/Teste-OmniChat.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependências.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
ng serve
```

Além disso os teste unitários podem ser executados com

```
ng test
```