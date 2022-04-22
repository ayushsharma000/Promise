// Write one example explaining how you can write a callback function ?
function fun1(name) {
    console.log("hello " + name);
    callback("Ayush");     //we pass function to another function as an argument
}
function callback(name) {
    console.log("WELCOME TO INDIA " + name);
}
fun1("Ayush");

// Que2 =>
// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function fun2() {
    setTimeout(() => {
        console.log(1)
    }, 1000)
    setTimeout(() => {
        console.log(2)
    }, 2000)
    setTimeout(() => {
        console.log(3)
    }, 3000)
    setTimeout(() => {
        console.log(4)
    }, 4000)
    setTimeout(() => {
        console.log(5)
    }, 5000)
    setTimeout(() => {
        console.log(6)
    }, 6000)
    setTimeout(() => {
        console.log(7)
    }, 7000)
}
// fun2();



// Que3 =>
// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let prom = new Promise((resolve, reject) => {
    // resolve();
})



prom.then(() => {
    setTimeout(() => {
        console.log(1);
    }, 1000)
}).then(() => {
    setTimeout(() => {
        console.log(2);
    }, 2000)
}).then(() => {
    setTimeout(() => {
        console.log(3);
    }, 3000)
}).then(() => {
    setTimeout(() => {
        console.log(4);
    }, 4000)
}).then(() => {
    setTimeout(() => {
        console.log(5);
    }, 5000)
}).then(() => {
    setTimeout(() => {
        console.log(6);
    }, 6000)
}).then(() => {
    setTimeout(() => {
        console.log(7);
    }, 7000)
}).catch(() => {
    console.log("reject");
})



// Que4 =>
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected
// Que5 =>
// Create examples to explain promises function

function prom2(n) {
    new Promise((resolve, reject) =>{
        if( n === "yes"){
            return resolve();
        }
        else{
            return reject();
        }
    }).then(()=>{
        console.log("Promise resolve");
    }).catch(()=>{
        console.log("Promise reject");
    })
}

prom2("yes");



// Que6 =>
// Create examples to explain callback hell function
// callback hell means one callback inside another callback function or we can say nested callback that's called callback hell
// this example is to print one after one sec, two after two sec so on..
let call = () => {
    setTimeout(() =>{
        console.log("one");
        setTimeout(() =>{
            console.log("Two");
            setTimeout(() =>{
                console.log("three");
                setTimeout(() =>{
                    console.log("four");
                    setTimeout(() =>{
                        console.log("five");
                    },1000)
                },1000) 
            },1000)
        },1000)
    },1000)
}
// call();


// Que.7 =>
// Create examples to explain async await function
// when we write async before function means that function always return promise, return promise means return some data 
// await keyword we can write only in async function 

async function funn(){
    console.log("this is first thing");
    const acpt = await fetch("https://api.github.com/users");
    console.log("this is second one");
    const user = await acpt.json();
    return user;
}
let done = funn();
console.log(done);      //here promise is pending
done.then(data => console.log(data))        //here is resolve now