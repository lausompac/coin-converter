<h1 align="center"> Currency Converter </h1>

Desafio Técnico BackEnd - Grupo SBF

### Sobre o projeto

API REST feita para conversão de valores de produtos, de moeda brasileira para outras moedas de diferentes nacionalidades. 

## 🚀 Deploy

https://sbf-coin-converter.herokuapp.com/convert/BRL/529.99

## 📄 Documentação

https://documenter.getpostman.com/view/15825788/2s8YCejt9x

Os endpoints também podem ser testados diretamente no projeto através do arquivo ``requests.rest``

## ✔️ Features

Conversão de moedas:
- [x] O endpoint recebe, através do link, o valor a ser convertido e sua moeda de origem. A resposta contém a moeda convertida e seu valor;

Criação de moeda:
- [x] A aplicação permite acrescentar novos tipos de moedas num banco de dados, fazendo o endpoint de conversão de moedas trazer mais conversões;

Busca de moedas:
- [x] O endpoint permite acessar todas as moedas adicionadas no banco de dados;

Deletar moedas:
- [x] O endpoint permite deletar moedas acrescentadas ao banco de dados;

## 🎲 Rodando o projeto

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/lausompac/eng-gruposbf-backend-typescript.git
2. cd 
```
* Para instalar e rodar o projeto
```
3. npm install
4. npm dev
    ou
3. yarn install
4. yarn dev
```
* Para rodar os testes 
```
5. npm test
     ou
5. yarn test
```

Crie um arquivo ```.env``` na raiz do projeto e preencha as variáveis com seus dados do banco de dados PostgreSQL e dados do JWT. 
Essa instrução é fundamental para a execução do servidor.

```
PORT = 
DB_HOST = 
DB_NAME = 
DB_USER = 
DB_PASSWORD = 

JWT_KEY = minhasenhasegura1234
JWT_EXPIRES_IN = 24h

```

## 🛠 Tecnologias utilizadas

- Typescript;
- Express;
- Cors;
- Knex; 
- Jest;

## 🚀 Aplicações utilizadas

- VSCode;
- Postman;
- [API de cotação de moedas](https://docs.awesomeapi.com.br/api-de-moedas)

## 👨‍💻 Desenvolvedor:

<a href="https://github.com/lausompac">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101334115?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Laura Campos</b></sub></a> <a href="https://github.com/lausompac" title="github"></a>
 <br>
 <br>


