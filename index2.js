class Student {
    constructor({
        name,
        email, 
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approverCourses = [],
        learningPaths = [],
    }) {
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
})

const miguel2 = new Student({
    name: "miguelDC",
    userName: "migueld10",
    email: "miguel@platzi.com",
    instagram: "migueldc1010",
})