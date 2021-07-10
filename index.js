//Primero objeto literal creado
const natalia = {
    name: "Natalia",
    age: 20,
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Definitivo de HTML y CSS",
    ],
    //Crear un método para aprobar cursos, recordar que this hace referencia al mismo objeto natalia
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

//Hacer que natalia apruebe otro curso
// natalia.approvedCourses.push("Curso de Responsive Desing");

//Creando el primer prototipo

function Student(name, age, approvedCourses) {
    this.name = name
    this.age = age
    this.approvedCourses = approvedCourses
    //Una manera para crear métodos dentro de los prototipos en JS
    // this.approveCourse = function(newCourse) {
    //     this.approvedCourses.push(newCourse)
    // }
}
//Otra anera de crear un método para Student, por fuera de la función constructora y usando prototype
Student.prototype.approveCourse = function(newCourse) {
    this.approvedCourses.push(newCourse)
}

//Creando una nueva instancia del prototipo Student

const juanita = new Student(
    "Juanita", 
    25,
    [
        "Curso 1",
        "Curso 2",
        "Curso 3",
    ]
)

juanita.approveCourse("Curso 4")

//Prototipos con la sintaxis de clases, recordar que aunque se llamen clases, por dentro siguen siendo prototipos, esta no es más que una sintaxis más "amigable" (sugar syntax) para parecerse más a las clases en otros lenguajes
class Student2 {
    constructor(name, age, approvedCourses) {
        this.name = name
        this.age = age
        this.approvedCourses = approvedCourses
    }
    //this sigue haciendo referencia a la clase Student2
    //Métodos de la clase
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

// Creando una nueva instancia de la clase Student2
const miguel = new Student2(
    "Miguel",
    20, 
    [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ],
)

miguel.approveCourse("Curso 5")