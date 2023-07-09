// what is function?
// function is a block of code that can be
// used to perform a particular task.

// function users(){
//     console.log("Hello World");
// }


// function users(n1,...name){
//     console.log(n1);
//     console.log(name);
    
// }
// users('ram','sita','gita','hari','sdf','sfds');

// function users(name){
//     return name;
// }

// console.log(users('ram'))

// function getNumber(){
//     let n = parseInt(document.getElementById('num1').value);
//     console.log(typeof n)
// }

// function addNumber(){
//     let n1 = parseInt(document.getElementById('num1').value);
//     let n2 = parseInt(document.getElementById('num2').value);
//     let result = n1 + n2;
//     // debugger;
//     document.getElementById('result').value = result;
// }


// let user = function(){
//     return "Hello World";
// }

// console.log(user());

// let user = (name,age) => {
//     return "Hello World" + name + age;
// }

// console.log(user('a',40));



// let user = (name,age) => {
//     return "Hello World" + name + age;
// }

// console.log(user('a',40));

// function add(x,y){
//     return x + y;
// }

// function total(x,y,cb){
//     return cb(x,y);
// }

// console.log(total(10,20,add));


function message(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Hello World");       
    },3000);
});
}


async function users(){
    await message().then((data) => {
        console.log(data);
    });
    console.log("Hello users");
}

users()

// let obj = new Promise((resolve,reject) => {
//     let task = false;
//     setTimeout(() => {
//         if(task){
//             resolve('Task is completed');
//         }else{
//             reject('Task is not completed');
//         }
//     },3000);
// });

// obj.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });