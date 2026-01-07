//Request - when you ask for something

//client - frontend, browser, javascript
//Server - Backend

//Request method - GET (give you information), POST(Sending information), PUT/PATCH(updating information), DELETE(remove information)

//Endpoint - url

//XMLHttpRequest - built-in browser Javascript object, it allows us to make http requests.

//Basic Syntax using GET

function getData() {
    const xhr = new XMLHttpRequest();
    const url = "https://ipinfo.io/json";

    xhr.responseType = 'json';
    xhr.onload = () =>{
        console.log(xhr.response)
    }

    xhr.open("GET", url)
    xhr.send();
}

//create a button on the html, have a click event on that button
//and once the user clicks on the button, then log the information to the console

const button = document.getElementById("button");

button.addEventListener("click", log_info);

function log_info() {
    console.log(getData());
}


//Fetch



function get_Data2(){
    fetch('https://ipinfo.io/json').then(response => {
        if(response.ok){
            return response.json();
        }
    }, networkError => console.log(networkError.message)).then(jsonResponse => {
        console.log(jsonResponse)
    })
}

get_Data2();

async function get_Data3() {
  try {
    const response = await fetch('https://ipinfo.io/json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.log(error.message);
  }
}

get_Data3();


//write async/await

//POST with Async and Await

async function post_data(){
    try{
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({name: "Femi", age: 4})
        });

        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        }
    }
    catch(e){
        console.log(e)
    }
}

post_data();

//REST API


