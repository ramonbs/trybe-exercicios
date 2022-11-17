fetch("https://ap.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Erro: ${error.message}`));

  // Requisição GET sem nenhuma configuração - recupera as informações de um produto.
fetch('https://dummyjson.com/products/27')
.then((response) => response.json())
.then((data) => console.log('GET sem headers', data));

// Requisição POST com headers e body - adiciona um produto num carrinho de compras.
fetch('https://dummyjson.com/carts/add', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  userId: 1,
  products: [
    {
      id: 27,
      quantity: 1,
    },
  ],
}),
})
.then((response) => response.json())
.then((data) => console.log('POST com headers e body', data));