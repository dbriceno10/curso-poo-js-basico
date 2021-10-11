import { FreeStudent } from './class/FreeStudent.js';
import { BasicStudent } from './class/BasicStudent.js';
import { ExpertStudent } from './class/ExpertStudent.js';
import { TeacherStudent } from './class/TeacherStudent.js';
import { LearningPaths } from './class/LearningPath.js';
import { Course } from './class/Courses.js';
import { PlatziClass } from './class/PlatziClases.js';

const cursoProgBasica = new Course({
  name: 'Curso Gratuito de Programación Básica',
  isFree: true,
});

//Cambiando el nombre usando un método
//cursoProgBasica.changeName("Curso Gratis de Programación Básica")

//Leyendo el nombre del atributo con con el get
// const nameProgBasica = cursoProgBasica.name
// console.log(nameProgBasica)

//Cambiando el nombre del atributo name con un set
cursoProgBasica.name = 'Curso Gratis de Programación Básica';

console.log(cursoProgBasica);

const cursoDefHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  lang: 'english',
});

const cursoPracticoHTML = new Course({
  name: 'Curso Práctico de HTML y CSS',
});

const escuelaDesarrolloWeb = new LearningPaths({
  id: 1,
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoProgBasica,
    'Curso Fundamentos de JavaScript',
    'Curso de React JS',
    cursoDefHTML,
    cursoPracticoHTML,
  ],
});

const escuelaDataScience = new LearningPaths({
  id: 2,
  name: 'Escuela de Data Science',
  courses: [
    cursoProgBasica,
    'Curso Gratuito de Análisis de Negocios para Ciencia de Datos',
    'Curso Básico de Python',
    'Curso de Python Intermedio',
  ],
});

const escuelaVideojuegos = new LearningPaths({
  id: 3,
  name: 'Escuela de Videojuegos',
  courses: [cursoProgBasica, 'Curso de Unity', 'Curso de Unity Avanzado'],
});

const juan = new FreeStudent({
  name: 'juanDC',
  userName: 'juancd10',
  id: 2,
  email: 'juan@platzi.com',
  twitter: '@juandc1010',
  approverCourses: ['Curso 1', 'Curso 2', 'Curso 3', cursoProgBasica],
  learningPaths: [escuelaDesarrolloWeb],
});

const miguel = new BasicStudent({
  name: 'miguelDC',
  userName: 'migueld10',
  id: 1,
  email: 'miguel@platzi.com',
  instagram: 'migueldc1010',
  approverCourses: ['Curso 4', 'Curso 5', 'Curso 6', cursoProgBasica],
  learningPaths: [escuelaDataScience],
});

const jose = new ExpertStudent({
  name: 'joseDC',
  userName: 'josed10',
  id: 1,
  email: 'jose@platzi.com',
  instagram: 'josedc1010',
  approverCourses: ['Curso 4', 'Curso 5', 'Curso 6', cursoProgBasica],
  learningPaths: [escuelaDataScience],
});

const freddy = new TeacherStudent({
  name: 'freddyDC',
  userName: 'feeddyd10',
  id: 1,
  email: 'freddy@platzi.com',
  instagram: 'freddy1010',
  approverCourses: ['Curso 4', 'Curso 5', 'Curso 6', cursoProgBasica],
  learningPaths: [escuelaDataScience],
});

const clase67 = new PlatziClass({
  name: 'JS: oriendado a objetos',
  videoID: 'lalalalala',
});

clase67.Play();
clase67.Pause();

console.log(juan);
console.log(miguel);
