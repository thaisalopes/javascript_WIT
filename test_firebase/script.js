import {database} from "./config.js"
import { ref, set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js"

function getFormInput(id){
    return document.getElementById(id).value;
}

function postToFirebase(obj){
    set(ref(database, "users"),{
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        comment: obj.comment
    })
}

function submitForm(e){
    e.preventDefault();
    var phoneNum = getFormInput("phone");
    var obj = {
        name: getFormInput("firstName"),
        email: getFormInput("email"),
        phone: phoneNum.replace(/-/g, ""),
        comment: getFormInput("comment")
    }

    postToFirebase(obj);
}

document.getElementById("form").addEventListener("submit", submitForm);