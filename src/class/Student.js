export class Student {
    constructor({
        id = undefined,
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

