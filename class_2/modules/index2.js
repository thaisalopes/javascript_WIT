let studentDetails = {
    name: "Femi",
    age: 4,
    country: "Canada"
}

function displayName(){
    return "Jazz is a student"
}

//module.exports = studentDetails; //node runtime

//export default studentDetails javascript runtime

module.exports = {studentDetails, aliasName: displayName}