<h1 align="center"> Scanlator API </h1> </center>


![GitHub](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Johnson49/scanlator-api/express)
![GitHub](https://img.shields.io/github/license/Johnson49/scanlator-api)
![GitHub](http://img.shields.io/static/v1?label=node&message=16.15.0&color=green&style=for-the-badge&logo=javascript)
![GitHub last commit](https://img.shields.io/github/last-commit/Johnson49/scanlator-api)

> Status do Projeto:  :warning: Em desenvolvimento.

## Tópicos 

* [Informações gerais](#informações-gerais)
* [Tecnologias](#tecnologias)
* [Setup](#setup)
* [EndPoints](#endpoints)
* [Demonstrações](#demonstrações)
* [Licença](#licença)

## Informações gerais
A Scanlator API é um projeto que permite a consulta e adição de novels, mangás, manhwas e webtoons. Ideal para ser implementada em Scans de pequeno porte.


## Tecnologias :warning:
O projeto é criado com:

* Node
* Express
* Firebase


## Setup: 
> Para rodar este projeto, clone localmente e depois instale as dependências com um gerenciador de sua preferência.

```javascript
$ git clone https://github.com/Johnson49/scanlator-api
$ cd scanlator-api
$ npm install 
$ npm run dev
```  

## EndPoints

> As rotas são compostas pelo endereço base (localhost:port) mais o recurso que você deseja acessa.

|Request|URL| Detalhes|
|:-------:|:-----:|:------:|
|GET | /biblioteca/:categoria | Busca todos os itens da categoria|
|GET |  /biblioteca/:categoria?id= | Busca um item específico da categoria|
|POST | /biblioteca/adicionar-na-biblioteca/:categoria | adiciona um item na sua respectiva categoria |
| PATCH | /biblioteca/:categoria?id= | atualiza parte dos dados do item |
| DELETE | /biblioteca/:categoria?id= | remove um item |


|Lista de categoria|
|:-------:|
| Mangá|
|Novel|
|manhwa|
|webcomic|

## Demonstrações
> Para melhor visulização, clique nas imagens.

<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/get.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/getID.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/post.png"> 
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/patch.png"> 
</p>
<p>
 <img width="390" height="220" src="https://github.com/Johnson49/scanlator-api/blob/main/src/assets/delete.png"> 
<p>



## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2022 - **Scanlator API**
