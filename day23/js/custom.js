// bind: bind() method creates a new function that, when called,
// has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the 
//new function is called.


// let students={
//     name:"Rajan",
//     age:20,
//     userInfo:function(){
//         return this.name+" "+this.age;
//     }
// }

// let a =students.userInfo;
// let userInfo =a.bind(students);

// this: instance of current object

// function Students(){
//     this.name = "Rajan";
//     this.info = function(){
//         console.log(this.name);
//     };
//     this.add = function(x,y){
//         console.log(x+y);
//     },
//     this.test =()=>{
//         console.log(this);
//     }
    
// }

// let student = new Students();
// student.test();
// student.info();
// student.add(10,20);


// function add(x,y){
//     return x+y
// }


// function total(a,b,cb){
//     return cb(a,b);
// }

// let result = total(10,20,add);
// console.log(result);
