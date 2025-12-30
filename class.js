class Student{
    constructor(firstname, course) {
        this.firstname = firstname;
        this.course = course;

    }
    introduce() {
        return `${this.firstname} is taking the course ${this.course}`
    }
}
//object is the instance of the class
let femi = new Student("Femi", "Fullstack Web Development")
console.log(femi.introduce())


class Shape{
    constructor(sides) {
        this.sides = sides;
    }
    is_polygon() {
        if(this.sides > 2) {
            return "This is a polygon"
        }
        else {
            return "This is not a polygon"
        }
    }
}

let triangle = new Shape(3);
console.log(triangle.is_polygon())

let square = new Shape(4);
console.log(square.is_polygon())

let line = new Shape(2);
console.log(line.is_polygon())