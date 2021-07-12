export class Comment {
    constructor({
        content,
        studentName,
        studenRole = "Student",
    }) {
        this.content = content
        this.studentName = studentName
        this.studenRole = studenRole
        this.likes = 0//likes, sin necesidad de definirla como propiedad dentro del constructor, podemos añadir más atributos
    }

    toPost() {
        console.log(`${this.studentName} (${this.studenRole})`)
        console.log(`${this.likes} likes`)
        console.log(`${this.content}`)
        // JuanDC (Student) ---> Nombre del estudiante y su rol.
        // 0 likes ---> Cantidad de likes en el comentario, por defecto inician en 0.
        // I love this course! ---> Contenido del comentario. 
    }
}