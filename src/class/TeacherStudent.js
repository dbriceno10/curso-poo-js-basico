import { Student } from "./Student.js";

export class TeacherStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }

    //Polimorfismo en JS, vamos a tomar el método postComment que existe en la clase padre Student, y vamos a sobre escribir el método.

    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher"
        })
        comment.toPost()
    }
}