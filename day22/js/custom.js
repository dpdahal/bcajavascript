// function Header(name=''){
//     let output=`
//         <div>
//             <h1>Hello: ${name} </h1>
//         </div>
//     `;
//     return output;
// }


// function Footer(){
//     let output=`
//         <div>
//             <h1>Footer</h1>
//         </div>
//     `;
//     return output;
// }


// document.getElementById("root").innerHTML=Header('John')+Footer();


// let data=[
//     {'name':'ram','age':20},
//     {'name':'shyam','age':21},
//     {'name':'hari','age':22},
// ]


// function DisplayName(props={}){
//     let outPut=`
//     <div>
//     <h1>Name: ${props.name} Age: ${props.age}</h1>
//     </div>    
//     `;
//     return outPut;
// }

// function Display(){
//     let outPut="";
//     data.map((item)=>{
//         outPut+=DisplayName(item);
//     });
//     document.getElementById("root").innerHTML=outPut;
// }
// Display();


// function fac(n){
//     if(n==1){
//         return 1;
//     }
//     return n*fac(n-1);
// }
// // 5-1 = 5*4 =20
// // 4-1 =3 * 20 = 60
// // 3-1 = 2 * 60 = 120
// // 2-1 = 1 * 120 = 120
// console.log(fac(5));


let category=[
    {'id':1,'name':'Mobile','parent_id':0},
    {'id':2,'name':'Laptop','parent_id':0},
    {'id':3,'name':'Mi','parent_id':1},
    {'id':4,'name':'Samsung','parent_id':1},
    {'id':5,'name':'Redmi','parent_id':3},
]

// Mobile
//     Mi
//         Redmi
//     Samsung
// Laptop