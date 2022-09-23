let pizzas = ["Calabresa", "Portuguesa", "Mussarela", "Frango com Catupiry"];
let bebidas = ["Coca-cola", "Guaraná", "Fanta", "Água"];

pizzas.push("Chocolate");
pizzas.push("Brigadeiro");
bebidas.push("Suco de Laranja");
pizzas.length;

console.log('Menu de sabores: ' + pizzas.sort());
console.log('Menu de bebidas: ' + bebidas.sort());
console.log('Tamanho do cardápio: ' + pizzas.length);

for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
