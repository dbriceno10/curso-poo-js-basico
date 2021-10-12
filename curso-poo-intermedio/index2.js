//Shallow copy en JavaScript
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
};

const obj2 = {};//creamos un onjeto vacío, donde vamos a hacer una copia de nuestro primer objeto
//Con un ciclo for
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}
//Esto va a fallar cuando tengamos propiedades dentro del objeto que sean otros objetos, no funciona y para esos objetos internos crea una copia de la referencia, por lo que se va a modificar en ambos objetos

//Usando métodos estáticos para crear copias
const obt3 = Object.assign({}, obj1); //Vamos a tener el mismo problema con la propiedades iternas que sean objetos.

const obj4 = Object.create(obj1);// va a "heredar" las propiedades del obj1, pareciara ser on objeto vacío pero va a tener la propiedad proto donde se van a encontrar todas las propiedades que heredó, sin embargo nos vamos a enfrentar al mismo probla al momento de tener objetos dentro de objetos. Modificaciones que hagamos a propiedades normales, van a aparecer como una nueva propiedad que asignamos, fuera de proto. Usando Objet.create() los cambios que hagamos en el objeto original se van a ver reflejados en los objetos copia