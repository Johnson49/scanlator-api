<h1 align="center"> Scanlator API </h1> </center>

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Johnson49/scanlator-api/express)
![GitHub](https://img.shields.io/github/license/Johnson49/scanlator-api)
![GitHub](http://img.shields.io/static/v1?label=node&message=16.15.0&color=green&style=for-the-badge&logo=javascript)
![GitHub last commit](https://img.shields.io/github/last-commit/Johnson49/scanlator-api)

> Status do Projeto:  :warning: Em desenvolvimento.

## Tópicos 

* [Informações gerais](#informações-gerais)
* [Tecnologias](#tecnologias)
* [Setup](#setup)
* [EndPoints da API](#endpoints-da-api)
* [Demonstrações da API](#demonstrações-da-api)
* [Front end  da Aplicação](#front-end-da-aplicação)
* [Licença](#licença)

## Informações gerais
A Scanlator API é um projeto que permite a consulta e adição de novels, mangás, manhwas e webtoons. Ideal para ser implementada em Scans de pequeno porte.


## Tecnologias :warning:
> O projeto é criado com:

* Node
* Express
* Firebase
* handlebars
* bootstrap


## Setup: 
> Para rodar este projeto, clone localmente e depois instale as dependências com um gerenciador de sua preferência.

```javascript
$ git clone https://github.com/Johnson49/scanlator-api
$ cd scanlator-api
$ npm install 
$ npm run dev
```  

## EndPoints da API

> As rotas são compostas pelo endereço base (localhost:port) mais o recurso que você deseja acessa.

|Request|URL| Detalhes|
|:-------:|:-----:|:------:|
|GET | /biblioteca/:categoria | Busca todos os itens da categoria|
|GET |  /biblioteca/:categoria?id= | Busca um item específico da categoria|
|POST | /biblioteca/adicionar-na-biblioteca/:categoria | Adiciona um item na sua respectiva categoria |
| PATCH | /biblioteca/:categoria?id= | Atualiza parte dos dados do item |
| DELETE | /biblioteca/:categoria?id= | Remove um item |


|Lista de categoria|
|:-------:|
| Mangá|
|Novel|
|manhwa|
|webcomic|

## Demonstrações da API
> Para melhor visulização, clique nas imagens.

<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/api/get.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/api/getID.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/api/post.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/api/patch.png"> 
</p>
<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/api/delete.png"> 
<p>


## Front end da Aplicação
> Para melhor visulização, clique nas imagens.

<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/frontend/tela_de_cadastro.png"> 
 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/frontend/biblioteca.png"> 

 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/frontend/tela_de_atualizacao.png">

 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/frontend/tela_de_delete.png"> 
<p>

<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/frontend/tela_de_detalhamento.png"> 
<p>



## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2022 - **Scanlator API**
