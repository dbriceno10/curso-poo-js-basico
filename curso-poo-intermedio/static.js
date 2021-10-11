// Métodos estáticos: Métodos a los que podemos acceder sin necesidad de crear una instancia de una clase. Requieren de la palabra reservada "static"

class Patito {
  static hacerSonidito() {
    return 'cuak!';
  }
}

console.log(Patito.hacerSonidito());

const daniel = {
  name: 'Daniel',
  email: 'daniel@gmail.com',
  age: 25,
};

Object.keys(daniel); //["name", "email", "age"] --> nos devuelve un array con los nombres de las propiedades de nuestro objeto
Object.getOwnPropertyNames(daniel);
Object.entries(daniel); //--> nos devuelve un array de arrays
/*
[
  0: ["name", "Daniel"]
  1: ["email", "daniel@gmail.com"]
  2: ["age", 18]
]
 */
Object.getOwnPropertyDescriptor(daniel); //--> Nos devuelve un objeto con el nombre de todas las propiedades de nuestro objeto.
/*
{
  name: {
    value: 'Daniel',
    writable: true,
    enumerable: true,
    configurable: true
  },
  email: {
    value: 'daniel@gmail.com',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 25, writable: true, enumerable: true, configurable: true }
}
 */
