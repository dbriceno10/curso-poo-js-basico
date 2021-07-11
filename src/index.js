import { Student } from "./class/Student.js"
import { learningPaths } from "./class/LearningPath.js"
import { Course } from "./class/Courses.js"

const cursoProgBasica = new Course({
    name: "Curso Gratuito de Programación Básica"
})

//Cambiando el nombre usando un método
//cursoProgBasica.changeName("Curso Gratis de Programación Básica")

//Leyendo el nombre del atributo con con el get
// const nameProgBasica = cursoProgBasica.name
// console.log(nameProgBasica)

//Cambiando el nombre del atributo name con un set
cursoProgBasica.name = "Curso Gratis de Programación Básica"

console.log(cursoProgBasica)

const cursoDefHTML = new Course({
    name: "Curso Definitivo de HTML y CSS"
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS"
})

const escuelaDesarrolloWeb = new learningPaths({
    id: 1,
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        "Curso Fundamentos de JavaScript",
        "Curso de React JS",
        cursoDefHTML,
        cursoPracticoHTML,
    ]
})

const escuelaDataScience = new learningPaths({
    id: 2,
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Gratuito de Análisis de Negocios para Ciencia de Datos",
        "Curso Básico de Python",
        "Curso de Python Intermedio"
    ]
})

const escuelaVideojuegos = new learningPaths({
    id: 3,
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unity Avanzado",
    ]
})

const juan = new Student({
    name: "juanDC",
    userName: "juancd10",
    id: 2,
    email: "juan@platzi.com",
    twitter: "@juandc1010",
    approverCourses: [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        cursoProgBasica,
    ],
    learningPaths: [
        escuelaDesarrolloWeb
    ],
})

const miguel = new Student({
    name: "miguelDC",
    userName: "migueld10",
    id: 1,
    email: "miguel@platzi.com",
    instagram: "migueldc1010",
    approverCourses: [
        "Curso 4",
        "Curso 5",
        "Curso 6",
        cursoProgBasica,
    ],
    learningPaths: [
        escuelaDataScience
    ],
})

console.log(juan)
console.log(miguel)