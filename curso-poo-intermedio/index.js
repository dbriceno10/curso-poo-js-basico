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
console.log(Object.getOwnPropertyDescriptors(daniel));
Object.defineProperty(daniel, 'nombreNuevaPropiedad', {
  value: 'Aquí se manda toda la lista de atributos',
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log();
