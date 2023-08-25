
// let users={
//     name:'ram',
//     age:25,
//     email:'ram@gmail.com',
//     address:{
//         city:'bangalore',
//     }
// }

// let jsonUsers=JSON.stringify(users);
// console.log(jsonUsers);

// let users='{"name":"ram","age":25,"email":"ram@gmail.com","address":{"city":"bangalore"}}';
// let jsonUsers=JSON.parse(users);
// console.log(jsonUsers);


// console.log(Object.keys(users));
// console.log(Object.values(users));

// document.getElementById("userForm").addEventListener("click",function(e){    
//     e.preventDefault();
//     console.log(e)
//     let field =e.target.name;
//     let value =e.target.value;
//     if(value===""){
//         console.log("required");
//     }
//     console.log(value.length);

// })

// let validationRules={
//     name:{
//         required:true,
//         minlength:3,
//         maxlength:10
//     },
//     email:{
//         required:true,
//         email:true
//     },
//     phone:{
//         required:true,
//         minlength:10,
//         maxlength:10
//     }
// }

// switch (validationRules.name) {
//     case "required":
//         console.log("required");
//         break;
//     case "minlength":
//         console.log("minlength");
//         break
//     case "maxlength":
//         console.log("maxlength");

// }

