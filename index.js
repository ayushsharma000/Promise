//Ques--1.Write one example explaining how you can write a callback function.
function greeting(name) {
    alert(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting);

//Ques--2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"------->

const num = () => {
    console.log("Print all the numbers");
    setTimeout(() => {
        console.log(1)

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {

                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 1000);

                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);
}


num();
//  Ques--3. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 
let promFun = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

for (let num = 1; num <= 7; num++)
    promFun(num * 1000).then();

promFun(1000).then(() => console.log(1));
promFun(2000).then(() => console.log(2));
promFun(3000).then(() => console.log(3));
promFun(4000).then(() => console.log(4));
promFun(5000).then(() => console.log(5));
promFun(6000).then(() => console.log(6));
promFun(7000).then(() => console.log(7));

//Ques--4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promiseFunction = (argument) =>
    new Promise((Pass, Fail) => {
        if (argument == "yes") {
            return Pass();
        }
        else {
            return Fail();
        }
    })
promiseFunction("yes").then(() => {
    console.log("Promise Resolved");
}).catch(() => {
    console.log("Promise Rejected")
})


//Ques--5. Create examples to explain callback function.

function greeting(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callFun() {
    console.log('Hav a Lovely Day');
}

greeting('Girishma', callFun);

// Ques--6. Create examples to explain callback hell function
const msgOne = () => {
    setTimeout(() => {
        console.log("Hiiiiiiii");
    }, 2000);
};
const msg = () => {
    console.log("Called");
    msgOne();
    console.log("In Queue");
};
msg();

//Ques--7. Create examples to explain promises function
var promise = new Promise(function (resolve, reject) {
    const msg1 = "Hiiii";
    const msg2 = "Hiiii"
    if (msg1 === msg2) {
        resolve();
    } else {
        reject();
    }
});
promise.
    then(function () {
        console.log('Success');
    }).
    catch(function () {
        console.log('Error');
    });

//Ques--8. Create examples to explain async await function
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4000);
});
async function asyncFunc() {
    try {
        let result = await promise;

        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
asyncFunc();
