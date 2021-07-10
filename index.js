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
    // constructor(name, age, approvedCourses) {
    //Este tipo de parámetros tienen la desventaja de que hay que irlos pasamdo en orden cuando se esté creando una nueva instancia de la clase, lo mismo ocurre al pasar parámetros de esta manera a una función cualquiera o un método de una clase, etc, lo mejor es usar parámetros nombrados, es decir, pasarle on objeto que va a contener todos los parámetros. No es necesario pasarlos en orden, o pasarlos en si no se teniene, ya que tendrían por defecto null o se les puede definir un valor por defecto en caso de que no se tenga nada.
    constructor({
        name,
        age,
        approvedCourses,
        email,
        facebook = "",
        twitter = "",
        instagram = "",
    }) {
        this.name = name
        this.age = age
        this.approvedCourses = approvedCourses,
        this.email =  email
        this.facebook = facebook
        this.twitter = twitter
        this.instagram = instagram
    }
    //this sigue haciendo referencia a la clase Student2
    //Métodos de la clase
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

// Creando una nueva instancia de la clase Student2
const miguel = new Student2({
    name: "Miguel",
    age: 20, 
    email: "miguel@platzi.com",
    approvedCourses: [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ],
})

miguel.approveCourse("Curso 5")

const juan1 = {
    name: "JuanDC",
    userName: juandc,
    points: 100,
    socialMedia: {
        twitter: "@fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ],
    //Ruta de aprendisaje, será un array de objetos
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso DW 1",
                "Curso DW 2",
                "Curso DW 3",
                "Curso DW 4",
            ]
        },
        {
            name: "Escuela de JavaScript",
            courses: [
                "Curso JS 1",
                "Curso JS 2",
                "Curso JS 3",
                "Curso JS 4",
            ]
        },
    ]
}

const miguel1 = {
    name: "MiguelDC",
    userName: juandc,
    points: 5500,
    socialMedia: {
        twitter: "@gmigeldc",
        instagram: "gmigeldc",
        facebook: "gmiguel10",
    },
    approvedCourses: [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ],
    //Ruta de aprendisaje, será un array de objetos
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso DW 1",
                "Curso DW 2",
                "Curso DW 3",
                "Curso DW 4",
            ]
        },
        {
            name: "Escuela de JavaScript",
            courses: [
                "Curso JS 1",
                "Curso JS 2",
                "Curso JS 3",
                "Curso JS 4",
            ]
        },
    ]
}