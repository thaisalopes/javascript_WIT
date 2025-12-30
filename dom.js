let firstarticle = document.getElementById("articleone");
console.log(firstarticle);

let witdetails = document.getElementsByClassName("witdetails");
console.log(witdetails);

let wittag = document.getElementsByTagName("article");
console.log(wittag);

let secondarticle = document.querySelector(".witdetails");
console.log(secondarticle);

let thirdarticle = document.querySelectorAll(".witdetails");
console.log(thirdarticle);

/*firstarticle.innerHTML = `
  <p>I have changed this from the dom</p>
  <div>This is from DOM.js</div>
`;*/

for (let i = 0; i < witdetails.length; i++) {
    if (i ==1){
            witdetails[i].style.backgroundColor = "green"
    console.log(witdetails[i])
    } else{
    witdetails[i].style.backgroundColor = "blue"
    }
    console.log(witdetails[i])
}

for (let i of wittag) {
    i.innerHTML = `I changed this from DOM.js`
}

//EventListener syntax
//elementfromDOM.addEventListener("event-type", callbackfunction)
//elementfromDOM.addEventListener("event-type", () => {execution statement})

let firstaside = document.getElementById("firstaside");
let firstbutton = document.getElementById("firstbtn");

firstbutton.addEventListener('click', () => {
    firstaside.innerHTML = "This changed after the click event.";
});


let fullname = document.getElementById('fullname');
let emailAddress = document.getElementById('email');
let preferredSection = document.getElementById('preferredSection');
let address = document.getElementById("address");
let submitbtn = document.getElementById("submitbutton");

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    let fullnamevalue = document.getElementById("fullname").value;
    let emailvalue = emailAddress.value;
    let sectionvalue = preferredsection.value;
    let addressvalue = address.value;

    let ticketInfo = document.createElement('div');
    ticketInfo.id = "ticketInfo";
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Full Name: ${fullnamevalue};

})