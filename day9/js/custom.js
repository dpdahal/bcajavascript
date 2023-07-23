// function getContent(){
//     let http = new XMLHttpRequest();
//     http.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("result").innerHTML = this.responseText;
//         }else{
//             document.getElementById("result").innerHTML = "Loading...";
//         }
//     }
//     http.open("GET", "https://jsonplaceholder.typicode.com/users");
//     http.send();

// }

// $(document).ready(function(){
//     $('#demo').click(function(){
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/users",
//             type: "GET",
//             success: function(result){
//                 result.forEach(element => {
//                     $('#result').append("<li>"+element.name+"</li>");
//                 }
//                 );
//             }

//         });

//     });

// });


// function getData(){
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
//         res.data.forEach(element => {
//             $('#result').append("<li>"+element.name+"</li>");
//         });
//     }).catch((err)=>{
//         console.log(err);
//     })

// }


// what is oop?
// what is class?
// what is object?
// what is instance?
// call, apply, bind

// class Users{
//     x=10;

//     getUser(){
//         console.log("get user");

//     }

//     getStudent = () =>{
//         console.log("get student");

//     }

// }

// let obj = new Users();
// obj.getUser();
// obj.getStudent();

let users={
    name:'ram',
    // getInfo:function(){
    //     console.log(this.name);
    // }
    getInfo:()=>{
        console.log(this.name);
    }
}

users.getInfo();