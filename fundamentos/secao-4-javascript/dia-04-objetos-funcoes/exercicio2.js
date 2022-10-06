let pizzas = {
    sabor: 'Calabresa',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas){
    console.log(key);
};

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

for(let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
};


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

let cars = ['Audi', 'Ferrari', 'BMW'];

for (let name in names){
    console.log('Hello, ' + names[name]);
};

for (let car of cars){
    console.log('Beatiful, ' + car)
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let describe in car){
    console.log(describe, car[describe])
}