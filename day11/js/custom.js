// "use strict";

// class Students{
//     x =10;

//     info(){
//         let a = new Students()
//         console.log(this.x)
//     }
// }

// let obj = new  Students()
// obj.info()


// class Calculator{

//     add(x,y){
//         return x+y;
//     }

//     sub(x,y){
//         return x-y
//     }
// }

// let obj =new  Calculator()
// console.log(obj.add(10,20))
// console.log(obj.sub(10,5))


// class Students{

//     constructor(){
//         console.log("Hello constructor")
//     }

// }

// let obj = new Students();


// class Database{
//      data=[
//         {id:1,name:'ram',address:'ktm'},
//         {id:2,name:'hari',address:'ltp'},
//         {id:3,name:'sita',address:'bkt'},
//         {id:4,name:'gita',address:'ktm'},
//      ]
//      insert(new_data){
//      }
//      show(){
//         this.data.map((user)=>{
//             console.log(user)
//         })
//      }
//      update(id,new_data){
//      }
//      getById(id){
//      }
//      deleteData(id){
//      }
// }
// let obj = new Database();
// obj.show()


// class Laptop{
//    #a =10;

//    #brand(){
//       console.log("Hello brand")
//    }

//    info(){
//       this.#brand()
//       console.log(this.#a)
//    }
// }

// class Dell extends Laptop{


// }

// obj = new Dell()
// obj.info()


// class Laptop{
//    a=10;

//    static info(){
//       let obj = new Laptop()
//       console.log("Hello laptop",obj.a)
//    }
// }

// Laptop.info()

// let obj = new Laptop();
// obj.info()


// let user={
//    name:'ram',
//    address:'ktm',
// }

// delete user.name
// console.log(user)