export class Course {
    constructor({
        name,
        classes = [],
        comments = [],
    }) {
        this.name = name
        this.classes = classes
        this.comments = comments
    }
}