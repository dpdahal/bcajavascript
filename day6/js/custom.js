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
                <button>Delete</button>
            </td>
        </tr>`
    });
    document.getElementById('result').innerHTML = output;
}
getStudents();


// new XMLHttpRequest
// fetch
