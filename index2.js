class learningPaths {
    constructor({
        id,
        name,
        courses = [],
        logo = "aquí debería ir una url para el logo",
    }){
        this.id = id
        this.name = name
        this.courses = courses
        this.logo = logo
    }
}

const escuelaDesarrolloWeb = new learningPaths({
    id: 1,
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Gratuito de Programación",
        "Curso Fundamentos de JavaScript",
        "Curso de React JS"
    ]
})

const escuelaDataScience = new learningPaths({
    id: 2,
    name: "Escuela de Data Science",
    courses: [
        "Curso Gratuito de Análisis de Negocios para Ciencia de Datos",
        "Curso Básico de Python",
        "Curso de Python Intermedio"
    ]
})
class Student {
    constructor({
        id,
        name,
        email, 
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approverCourses = [],
        learningPaths = [],
    }) {
        this.id = id
        this.name = name
        this.email = email
        this.userName = userName
        this.socialMedia = {
            //twitter: twitter, cuando van a tener el mismo nombre, se puede solo escribir el nombre del atributo una vez, permite escribir menos.
            twitter,
            instagram,
            facebook,
        }
        this.approverCourses = approverCourses
        this.learningPaths = learningPaths
    }
}

const juan2 = new Student({
    name: "juanDC",
    userName: "juancd10",
    email: "juan@platzi.com",
    twitter: "@juandc1010",
    approverCourses: [
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ],
    learningPaths: [
        escuelaDesarrolloWeb
    ],
})

const miguel2 = new Student({
    name: "miguelDC",
    userName: "migueld10",
    email: "miguel@platzi.com",
    instagram: "migueldc1010",
    approverCourses: [
        "Curso 4",
        "Curso 5",
        "Curso 6"
    ],
    learningPaths: [
        escuelaDataScience
    ],
})