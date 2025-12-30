//A javascript promise is an object
//that can be used to get the outcome of an 
// asynchronous operation when the result is not instantly available

//has 3 states: pending, resolved or rejected

//Pending - when the value is not available yet
//Resolved - succesful completion
//Rejected - failure (due to error)

//two properties - state and result

//async programming - multi-thread - program can be run in parallel
//sync - single-thread - one operation at a time

//while a Promise object is pending, the result is undefined;
//while a promise is fullfilled, the result is a value
//while a promise is rejected, the result is an error object

//SetTimeOut
/*console.log("This will print first")
setTimeout( () => {
    console.log("This is an async operation")
}, 1000)

console.log("end of program")

console.log(`1. ${new Date().getSeconds()}`);
setTimeout(() =>{
    console.log(`2. ${new Date().getSeconds()}`);
}, 50000)
console.log(`3. ${new Date().getSeconds()}`);
console.log(`4. ${new Date().getSeconds()}`);
console.log(`5. ${new Date().getSeconds()}`);
setTimeout(() => {
    console.log(`6. ${new Date().getSeconds()}`);
}, 0)
console.log(`7. ${new Date().getSeconds()}`);
console.log(`8. ${new Date().getSeconds()}`);
console.log(`9. ${new Date().getSeconds()}`);
console.log(`10. ${new Date().getSeconds()}`);*/

// nest time out

//morning routine
// Wake up
// Take a shower while husband cooks
// Eat Breakfast
// Get dressed

// shower takes 3 seconds, husband cooking takes 5 seconds
// eat takes 2 seconds and getting dressed takes 1 second

// let's say that shower and cooking breakfast run in parallel
// total seconds = 5 + 2 + 1 = 8 seconds

/*console.log(`1. Wake up: ${new Date().getSeconds()}`);

setTimeout(function shower(){
    console.log(`2. Shower: ${new Date().getSeconds()}`);
}, 3000);

setTimeout(function cooks() {
    console.log(`3. Husband cooks breakfast: ${new Date().getSeconds()}`);

    setTimeout(function eats(){
        console.log(`4. Eats Breakfast: ${new Date().getSeconds()}`);

        setTimeout(function dress(){
            console.log(`5. Get Dressed: ${new Date().getSeconds()}`);
        }, 1000)

    }, 2000)
}, 5000);*/

//new Promise((resolve, reject)=>{});
//example

/*const myName = 'John Sno'

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (myName === 'John Snow'){
            resolve("The King is in the north");
        }else{
            reject("Winter is coming")
        }
    }, 3000)
});

function print(result){
    console.log(result)
}

myPromise
.then(function (result){
    console.log(result)
})
.catch(function(reason){
    console.log(reason)
})*/


function promise_shower(){
    let shower = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(`2. Shower: ${new Date().getSeconds()}`)
        }, 3000);
    });
    return shower;
}

function promise_husband_cooks(){
    let husband_cooks = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(`3. Husband cooks breakfast: ${new Date().getSeconds()}`)
        }, 5000);
    });
    return husband_cooks;
}

function promise_eat_breakfast(){
    let eat_breakfast = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(`4. Eat Breakfast: ${new Date().getSeconds()}`)
        }, 2000);
    });
    return eat_breakfast;
}

function promise_get_dressed(){
    let dressed = new Promise((resolve)=>{
        setTimeout(function(){
            resolve(`5. get dressed: ${new Date().getSeconds()}`)
        })
    });
    return dressed;
}
/*console.log(`1. Wake up: ${new Date().getSeconds()}`);

promise_shower().then(function(value){
    console.log(value)
}).catch((error)=>{console.log(error)});


promise_husband_cooks().then(function(value){
    console.log(value);
    return promise_eat_breakfast();
}).then(function (value){
    console.log(value);
    return promise_get_dressed();
}).then(function (value){
    console.log(value)
}).catch((error)=>{
    console.log(error)
})*/

//async and await - synthatic sugar for promise
// does not add new functionality 
// it makes it easier to write and read

//async/await allows us to write asynchronous program similar to synchronous program

async function shower() {
    const shower = await promise_shower();
    console.log(shower)
}

async function the_rest() {
    try{
        const cooks = await promise_husband_cooks();
        console.log(cooks)
        const eat = await promise_eat_breakfast();
        console.log(eat)
        const dressed = await promise_get_dressed();
        console.log(dressed);
    }catch(e){
        console.log(e)
    }
}

shower();
the_rest();