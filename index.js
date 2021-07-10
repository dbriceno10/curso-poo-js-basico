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

//Creando una nueva instancia de Student

const juanita = new Student(
    "Juanita", 
    25,
    [
        "Curso 1",
        "Curso 2",
        "Curso 3",
    ]
)