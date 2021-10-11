export class Course {
  constructor({
    name,
    classes = [],
    comments = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name; //El guión bajo "_", colocada antes de el nombre del atributo dentro de una clase, es una convención, si estuvieramos trabajando con un equipo de programadores, al hacer esto les estaríamos pidiendo que no llamen dicho atributo o método desde fuera del prototipo o lo modifiquen de alguna manera. Tenemos como objetivo esconder el atributo name en nuestro prototipo.
    this.classes = classes;
    this.comments = comments;
    this.isFree = isFree;
    this.lang = lang;
  }
  //getters y setters

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === 'Ejemplo de filtrado') {
      console.error('No');
    } else {
      this._name = newName;
    }
  }

  //Método para cambiar el nombre
  // changeName(newName) {
  //     this._name = newName
  // }
}
