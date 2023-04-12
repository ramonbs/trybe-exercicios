# COMANDOS NPM BACK-END

### Instalação do Express.
A palavra  _framework_, quer dizer estrutura ou molde e é basicamente isso que ela é para uma aplicação. O framework é como um template, que te sugere uma forma específica de construir sua aplicação e te dá ferramentas pra fazer isso mais rápido.

O  **Express**  é um  _framework_  que nos ajuda a organizar e construir APIs robustas e flexíveis, nos dando ferramentas que fazem as coisas acontecerem com poucas linhas de código, abstraindo a lógica e códigos por trás de funcionalidades muito comuns nas aplicações.
```bash
npm i express@4.17.1 --save-exact
```
<hr />

### Instalação do Lint
```bash
npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 --save-dev --save-exact
```
<hr />

### Criação do gitignore e eslintrc
```bash
touch .eslintignore .eslintrc.json
```
<hr />

### Criação do package.json
O **Package.json** é o arquivo onde estão listadas todas as dependências de um projeto. Lá estão sinalizados quais são os pacotes essenciais para o funcionamento da nossa aplicação, tanto em produção (na chave `dependencies`), quanto em desenvolvimento (na chave `dev-dependencies`).
```bash
git init
```
<hr />

### Instalação do Nodemon
```bash
npm i nodemon@2.0.15 --save-dev --save-exact
```
<hr />

### Instalação do Mocha - testes
O **[mocha](https://mochajs.org/)  é um  _framework_  de testes para JavaScript**, isso significa que ele nos ajuda a arquitetar os nossos testes fornecendo a estrutura e interface para escrevermos e executarmos eles.
```bash
npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact
```
<hr />

### Instalação do Chai- testes
 O [chai](https://www.chaijs.com/api/bdd/) é uma biblioteca de asserção que auxilia o desenvolvimento de testes com Node.js e que pode ser combinada com qualquer framework de testes JavaScript.
```bash
npm install chai-http@4.3.0 --save-dev --save-exact
```
<hr />

### Instalação do Sinon- testes
O  [Sinon](https://sinonjs.org/)  é uma ferramenta que auxilia na criação e utilização dos dublês, fornecendo funções para diversos tipos de  **`Test Doubles`**.

> Os  **dublês de teste**  são substitutos que sobrepõem dependências necessárias para se testar um sistema ou um comportamento.
```bash
npm install sinon@11.1.1 --save-dev --save-exact
```

# Middlewares mais comuns

## Interpretando conteúdo JSON com  `express.json`
Um _middleware_ bastante utilizado é o `express.json`, ele é um _middleware_ que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto `req` uma propriedade `body` com o valor encontrado no conteúdo.

```js
const express = require('express');
4const app = express();
5
6app.post('/fail', (req, res) => {
7  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
8});
9
10app.use(express.json());
```


## Servindo arquivos estáticos com  `express.static`

Um outro  _middleware_  que já vem com o Express é o  `express.static`. Ele pega o  `req.path`  e usa para procurar um arquivo. Se encontrado, ele já responde com esse arquivo. Se não, ele assume que alguém vai responder essa requisição e simplesmente passa para o próximo.

```js
// src/app.js
2
3//...
4const app = express();
5// configura para procurar o path no diretório ./images
6app.use(express.static('./images'));
7//....
```

## Gerando logs da aplicação com  `morgan`

Um  _log_  nada mais é do que  **um registro organizado e consistente de todas as ocorrências de um evento**. Logs são fundamentais para reconhecer bugs em uma aplicação web, dando visibilidade para a frequência e as condições em que os bugs ocorreram. E como você nunca sabe quando um bug vai acontecer, é conveniente ter um log de  _todas_  as requisições recebidas.

```js
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
//...
const app = express();
app.use(morgan('dev'));
app.use(express.static('./images'));
```

## Liberando acesso ao frontend com  `cors`

Outro  _middleware_  bem comum nas aplicações back-end é o  **cors**, que permite que outras aplicações front-end consumam sua API. O uso básico desse módulo consiste em instalá-lo usando: 
 ```bash
 npm install cors@2.8.5 --save-exact
 ```
e em seguida adicionar as seguintes linhas:
```js
const cors = require('cors');
2app.use(cors());
```

## Retornando 404 com um  _middleware_  global customizado

Às vezes uma rota simplesmente não existe. Uma requisição  `GET /players`  vai passar por todos os  _middlewares_  em ordem. O  `express.static`  não vai ver esse arquivo e vai passar pro próximo  _middleware_. O  `express.json`  nunca responde, só tenta ler o  `req.body`  _se houver_. O  `apiCredentials`  não vai reclamar se houver um token válido, passando para o próximo  _middleware_. No entanto, agora as rotas são específicas e ninguém responde ao  `GET /players`.
```js
app.use((req, res) => res.sendStatus(404));
```

## Middlewares de segurança

Em um ambiente de produção é importante se preocupar com segurança da aplicação. O  **Helmet**  pode ajudar a proteger seu aplicativo de algumas vulnerabilidades da Web conhecidas, definindo os cabeçalhos HTTP de forma adequada. Ele é uma coleção de várias funções de  _middleware_  menores que definem cabeçalhos de resposta HTTP relacionados à segurança. Exemplos de proteção são: ataques de script entre sites, impor conexões seguras (HTTPS) ao servidor, dentre outras. Para mais detalhes  [leia a documentação](https://github.com/helmetjs/helmet).

O uso básico desse pacote de  _middlewares_  consiste em instalá-lo usando :
```bash
npm install helmet@6.0.1 --save-exact
```
  e em seguida adicionar as seguintes linhas no seu código:
  ```js
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
```

## Limite de taxa de requisições

Uma aplicação recebe diversas solicitações e de diferentes usuários e pode-se realizar um monitoramento do número de solicitações realizadas em um determinado período de tempo e/ou a quantidade de tempo de solicitações realizada por um mesmo consumidor da aplicação. Realizar uma limitação destas solicitações, denominado  _rate limit_, tem objetivos como:

-   limitar o consumo de uma API para reduzir o uso de recursos do servidor necessários para que o código seja executado;
-   gerar serviços em que a quantidade de serviços que podem ser consumidos dependam do plano do usuário;
-   proteger a API contra um ataque de negação de serviço (DoS ou DDoS) que é uma tentativa maliciosa de sobrecarregar uma propriedade web com tráfego a fim de interromper seu funcionamento normal.

O  [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)  é um  _middleware_  para limitar solicitações repetidas a APIs e/ou endpoints públicos e pode ser instalado através do comando:

```bash
npm install express-rate-limit@6.7.0 --save-exact
```
E para usar, segue o exemplo:
```js
const express = require("express");

const rateLimit = require("express-rate-limit");
const app = express();

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
   max: 100, // número máximo de requisições
   windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
   message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

app.use(limiter);
```




