// Uso de los métodos JSON.parse() y JSON.stringify()
//Como se hace crea un nuevo objeto, a partir de un string del ojeto original, ya no es una copia a la referencia del primer objeto si no que es un nuevo objeto, con una nueva referencia en memoria, por lo que sin importar que sea un objeto complejo con más objetos por dentro, son independientes, suele ser muy bueno, excepto cuando se trabaja con métodos... No trabajan con métodos, por lo que los omiten

const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
};

const stringfiedComplexObj = JSON.stringify(obj1); //Convierte en un string al objeto1
const obj2 = JSON.parse(stringfiedComplexObj);
console.log(obj2);

obj2.a = 'AAAAA';
obj2.c.d = 'DDDDDDDDDD';

const obj3 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'Aaaaaa';
  },
};

const stringfiedComplexObj2 = JSON.stringify(obj3);
const obj4 = JSON.parse(stringfiedComplexObj);
console.log(obj4);
