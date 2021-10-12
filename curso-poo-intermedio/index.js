const daniel = {
  name: 'Daniel',
  age: 18,
  approvedCourses: ['curso 1'],
  addCourse(newCourse) {
    console.log('this: ', this);
    console.log('this.approvedCourses ', this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(daniel));
// console.log(Object.getOwnPropertyNames(daniel));
// console.log(Object.entries(daniel));
//Como todo lo movimos al utilizar Object.entries, this ya no hace referencia a daniel, si no a nuestro array de cursos(el this que hemos consologeado dentro del método addCourse)
// console.log(Object.getOwnPropertyDescriptors(daniel));
// Object.defineProperty(daniel, 'nombreNuevaPropiedad', {
//   value: 'Aquí se manda toda la lista de atributos',
//   enumerable: true,
//   writable: true,
//   configurable: true,
// });

Object.defineProperty(daniel, 'navigator', {
  value: 'Chrome',
  enumerable: false,
  writable: true,
  configurable: true,
});
Object.defineProperty(daniel, 'pruebaNasa', {
  value: 'extraterrestres',
  enumerable: false,
  writable: false,
  configurable: false,
});
Object.defineProperty(daniel, 'editor', {
  value: 'VSCode',
  enumerable: true,
  writable: false,
  configurable: true,
});
Object.defineProperty(daniel, 'terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptors(daniel));
/*
Object.keys(objeto) ---> me enumera las propiedades de un objeto pero no me va a mostrar las que tengan la propiedad "enumerable" en false
Object.getOwnPropertyNames(objeto) --> me va traer los nombres de todas las propiedades de un objeto, incluso las que se hallan ocultado cambiando el atributo "enumerable" a false
*/

/*
La propiedad enumerable es para que una propiedad pueda ser mostrada o no, dependiendo de si está como true o false

La propiedad writable define si una propiedad puede (true) o no (false) ser modificada. Puede evitar que sea modificada, pero no que sea eliminada.

La propiedad configurable, puede (true) o no (false) ser eliminada. Sin embargo la misma se podrá listar o modificar, aunque no pueda ser eliminada.
 */

Object.seal(daniel); //Cambia el configurable de todas las propiedades del objeto a false para evitar que estas puedan ser borradas
Object.freeze(daniel); //cambia el writable y el configurable de todas nuestras propiedades a false

// const juanita = {
//   age: 15,
//   email: 'juanita@gmail.com',
// };

// const nath = juanita;
// nath.email = 'nath@gmail.com';
// nath.age = 25;

// console.log({ juanita, nath });
