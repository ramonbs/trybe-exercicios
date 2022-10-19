const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  
  console.log(`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
};

customerInfo(order);

order.name = 'Luiz Silva'
order.payment.total = '50,00'

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzasKey = Object.keys(order.order.pizza);
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzasKey[0]}, ${pizzasKey[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total}`)
};

orderModifier(order);
