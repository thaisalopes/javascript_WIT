function greet(name) {
    return "Hello" + name;
}

function hof(callback) {
    let firstName = "Ola";
    let result = greet(firstName);
    return result
}

function toUpperCase(str) {
    return str.toUpperCase()
}

function toLowerCase(str) {
    return str.toLowerCase()
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

function transformString(str, transformFunction) {
    return transformFunction(str)
}

const myString = "Hello World"
console.log(transformString(myString, toUpperCase))
console.log(transformString(myString, toLowerCase))
console.log(transformString(myString, reverseString))

function getCertificate (score, name){
    console.log(`${name} passed with ${score}%`)
}

function noCertificate(score, name) {
    console.log(`${name} is not getting a cert because she had ${score}%`)
}

function witFinalGrade(score, name, graduating, notGraduating) {
    if(score >= 65) {
        graduating(score, name)
    } else {
        notGraduating(score, name)
    }
}

witFinalGrade(65, "Fatemeh", getCertificate, noCertificate)
witFinalGrade(50, "Femi", getCertificate, noCertificate)

const students = ["Ola", "Etin", "Thaisa", "Sreyasi", "Rupinder"]

students.forEach(function (student) {
    console.log(student)
})