import { Student } from "./Student.js"

export class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos, ${this.name}, no puedes tomar cursos en inglés`)
        }
    }
}