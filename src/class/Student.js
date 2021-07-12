import { Comment } from "./Comment.js"

export class Student {
    constructor({
        id = undefined,
        name,
        email, 
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
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
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }

    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.toPost()
    }
}

