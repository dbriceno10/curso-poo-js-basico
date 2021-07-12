export class LearningPaths {
    constructor({
        id = undefined,
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