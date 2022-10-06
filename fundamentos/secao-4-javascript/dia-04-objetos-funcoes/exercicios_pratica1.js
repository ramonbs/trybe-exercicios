// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

// info.recorrente = 'Sim';
// info['recorrente2'] = 'Não'


// console.log(info)


//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (const key in info) {
//     console.log(key)
// }

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (const key in info) {
//     console.log(info[key])
// }

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain',
//     nota: 'Dell’s Four Color Comics #178',
//     recorrente: 'Sim'
// };

// for (const key in info, info2) {
//    if (info[key] != info2[key]) {
//     console.log(info[key] + ' e ' + info2[key])
//    }else{
//     console.log('Ambos são recorrentes')
//    }
// }


// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log(`O livro favorito de ${leitor.nome} ${leitor['sobrenome']} se chama ${leitor['livrosFavoritos'][0]['titulo']}`);


//   Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }

// leitor.livrosFavoritos.push ({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// })

// console.log(leitor['livrosFavoritos'])

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

// console.log(`${leitor["nome"]} tem ${leitor["livrosFavoritos"].length} livros favoritos, onde ${leitor["livrosFavoritos"].length} é um número gerado automaticamente pelo seu código.`);


// -------------------------------------------------------------------------------------------------------------------------

// Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

// A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

// Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

// function verificaPalindrome (string, separator){
//     let splitString = string.split(separator)
//     console.log(splitString)
//     let reverseString = splitString.reverse()
//     let joinString = reverseString.join('')
//     if(joinString === string){
//         return true;
        
//     } else {
//         return false;
//     }
  
// }

// // let palavra = 'Hello my friend'
// // let splitPalavra = palavra.split(',');
// // console.log(splitPalavra)

// var comma = ' ';
// var space = ','

// console.log(verificaPalindrome('Hello my friend', comma));
// console.log(verificaPalindrome('Hello, my, friend', space));
// console.log(verificaPalindrome('subinoonibus'));
// console.log(verificaPalindrome('ana'));




// Object.prototype.objCustom = function () {};
// Array.prototype.arrCustom = function () {};

// let iterable = [3, 5, 7];
// iterable.foo = "hello";

// for (let i in iterable) {
//   console.log(i); // escreve 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i of iterable) {
//   console.log(i); // escreve 3, 5, 7
// }


let teste = [22, 2, 6, 4, 1, 11, 30, 100];
function devolmeMaior(numeros){
  let maior = 0;
  for (const value of numeros) {
    if( maior < value ){
      maior = value;
    }
    }
    return maior
  }
  console.log(devolmeMaior(teste));
