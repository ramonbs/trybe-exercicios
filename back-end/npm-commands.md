# COMANDOS NPM BACK-END

### Instalação do Express.
O termo _framework_ tem o significado de "estrutura" ou "modelo" e, em essência, é exatamente isso que ele representa para uma aplicação. O _framework_ é comparável a um modelo pré-concebido que oferece uma maneira específica de construir sua aplicação e disponibiliza recursos para tornar esse processo mais eficiente.

O **Express** é uma ferramenta de desenvolvimento que auxilia na organização e construção de APIs sólidas e flexíveis, oferecendo recursos que simplificam o processo de desenvolvimento e abstraem a lógica e o código por trás de funções comuns nas aplicações, permitindo que sejam executadas com um mínimo de código.
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
O **[mocha](https://mochajs.org/)  é um  _framework_  de testes para JavaScript**, que nos ajuda a realizar testes unitários de nossa aplicação.
```bash
npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact
```
<hr />

### Instalação do Chai- testes
 O [chai](https://www.chaijs.com/api/bdd/) é biblioteca de asserção e é uma ferramenta útil para desenvolvedores que trabalham com Node.js, pois ela ajuda na criação de testes automatizados. Essa biblioteca pode ser integrada a qualquer _framework_ de testes **JavaScript**, permitindo que seja utilizada em conjunto com outras ferramentas de teste para aumentar a eficácia do processo de testes.
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
O `express.json` é um _middleware_ que lê o conteúdo da requisição HTTP, interpretando conteúdos como JSON e criando objetos do tipo `req` e uma propriedade `body` de todos os arquivos encontrados.

```js
const express = require('express');
const app = express();

6app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());
```


## Servindo arquivos estáticos com  `express.static`

O express.static é um tipo de _middleware_ que já vem embutido no _framework_ **Express**. Ele é responsável por processar o req.path da requisição e buscar um arquivo correspondente. Caso o arquivo seja encontrado, o express.static responde com esse arquivo. Se o arquivo não for encontrado, o _middleware_ simplesmente passa a requisição para o próximo _middleware_ na cadeia, assumindo que outro _middleware_ ou tratador de requisição será capaz de lidar com a requisição.

```js
// src/app.js

//...
const app = express();
// configura para procurar o path no diretório ./images
app.use(express.static('./images'));
//....
```

## Gerando logs da aplicação com  `morgan`

Um gerador de _logs_ para toda aplicação express.

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




