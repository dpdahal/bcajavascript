let students =[
    {id:1,name:"ram",gender:'male',status:true},
    {id:2,name:"gopal",gender:'male',status:true},
    {id:3,name:"hari",gender:'male',status:false},
    {id:4,name:"sophia",gender:'female',status:true},
    {id:5,name:"gita",gender:'female',status:false}
]

function getStudents(){
    let output = '';
    students.forEach((student,index)=>{
        output+=`<tr>
            <td>${++index}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.status}</td>
            <td>
                <button>Edit</button>
                <button onclick="deleteData(${student.id})">Delete</button>
            </td>
        </tr>`
    });
    document.getElementById('result').innerHTML = output;
}
getStudents();


function $(id){
    return document.getElementById(id);
}
let studentId =6;
document.querySelector("#addRecord").addEventListener('click',function(e){
    e.preventDefault();
    let name = $('name').value;
    let genderItems = document.getElementsByName('gender');
    let gender ='';
    genderItems.forEach((item)=>{
        if(item.checked){
            gender = item.value;
        }        
    });
    let insertData={
        id:studentId,
        name:name,
        gender:gender,
        status:false
    }
    students.push(insertData);
    getStudents();
    studentId++;
   });


   function deleteData(id){
         let index = students.findIndex((student)=>student.id==id);
         console.log(index);
         students.splice(index,1);
         getStudents();
   }
