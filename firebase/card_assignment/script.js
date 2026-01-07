const firebaseConfig = {
  apiKey: "AIzaSyB-VnxbMo7F7GCLQ9jgYJwOp1uNWXaYSxo",
  authDomain: "card-assignment-4a6fc.firebaseapp.com",
  projectId: "card-assignment-4a6fc",
  storageBucket: "card-assignment-4a6fc.firebasestorage.app",
  messagingSenderId: "799874381518",
  appId: "1:799874381518:web:71f38281eafb4a7856429f"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref("students");

dbRef.get().then((snapshot)=>{
    console.log(snapshot)
    if (snapshot.exists()){
        const data = snapshot.val()
        console.log(data)
        for (const user in data){
            console.log(data[user])
            addUserCardToDOM(data[user])
        }
    }
}).catch((error)=>{
    console.log(error);
})

function addUserCardToDOM(user){
    //get the card container element from the DOM
    const cardContainer = document.getElementById("card-container");

    //append a new user card to the card container
    cardContainer.innerHTML += `<div class="card">
            <div class="left-info" style="--background-color: ${user.cardColor}">
                <div class="center-horizontally">
                    <p id="user-level">Level ${user.level}</p>
                </div>
                <div>
                    <img src=${user.imageURL} alt="male avatar with beard">
                </div>
                <div class="center-horizontally">
                    <p id="user-points-${user.name}">${user.points} points</p>
                </div>
                <div class="flex-wrap">
                    <div><button class="plus-minus-button">-</button></div>
                    <div><button class="plus-minus-button" onclick="incrementPoints('${user.name}')">+</button></div>
                </div>
            </div>
            <div class="right-info">
                <header>
                    <h1>${user.name}</h1>
                </header>
                <div>
                    <p id="user-description">
                        ${user.description}
                        </p>
                </div>
                <div class="linkedin-link">
                    <a href="#">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                </div>
            </div>
        </div>`
}

/*renderUsersToDom(users)

function renderUsersToDom(users){
    //geting the card container element from dom and make sure its empty 
    // before we write in it, to avoid duplicate.
    document.getElementById("card-container").innerHTML = "";
    // for (user of users){
    //     addUserCardToDOM(user)
    // }
    users.forEach(user => addUserCardToDOM(user));
}

function sortUsers(){
    //get the selected property to sort the dom
    let property = document.getElementById("sortBy").value;
    users.sort((a, b) => (a[property]) > b[property] ? 1 : -1)
    //update the dom with the sorted list
    renderUsersToDom(users);
}

function incrementPoints(userName){
    //find the user in the array
    const user = users.find((user) => user.name === userName)
    console.log(user);
    //increase the point
    user.points += 1;
    //update the point on the screen/dom
    const pointLabel = document.getElementById(`user-points-${user.name}`);

    pointLabel.textContent = `${user.points} points`;

}

//decrement
//calculate the total point for everybody*/