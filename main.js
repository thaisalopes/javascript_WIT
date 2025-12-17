/*console.log("Hello World");



// 1. Global Scope
let firstName = "femi";

// 2. Function Scope
function studentName() {
    let surName = "Ola";
    let firstName = "Fatemeh";
    console.log(firstName)
    return surName
}

// Block Scope
studentName()

if(firstName === "femi") {
    let secondName = "Thaisa";
    console.log(secondName);
}

console.log(secondName)*/

/*function getGrade(grade) {
    let gradeLetter;
    switch(true) {
        case grade >= 80:
            gradeLetter = "A";
            break;
        case grade >=70:
            gradeLetter = "B";
            break;
        case grade >=60:
            gradeLetter = "C";
            break;  
        case grade >=50:
            gradeLetter = "D";
            break;
        case grade >=40:
            gradeLetter = "E";
            break;
        case grade < 40:
            gradeLetter = "F";
            break;
    }
    return gradeLetter;
}

console.log(getGrade(67))

let canDrive = false;

canDrive ? console.log("Femi can drive") : console.log("Femi cannot drive"); */

function unique_names(wit_alumni, wit_current_student) {
    return wit_alumni.filter((studentName) => !wit_current_student.includes(studentName))
};

console.log(unique_names(["Thaisa", "Jazz", "Jane", "Josie"], ["Thaisa"]))