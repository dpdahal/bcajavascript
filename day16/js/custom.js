function showData(){
    try{
        fetch("http://localhost:3000/students").then((response)=>{
            return response.json();
            }).then((data)=>{
                let outPut ="";
                data.forEach((student,index)=>{
                    outPut += `
                    <tr>
                        <td>${++index}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.gender}</td>
                        <td>${student.language}</td>
                        <td>${student.country}</td>
                        <td>
                            <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                            <button class="btn btn-danger" onclick="deleteRecord('${student.id}')"><i class="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                    `;
                });
                document.getElementById("display_data").innerHTML = outPut;


            }).catch((err)=>{
                console.log("network error");
            })
    }catch(err){
        console.log("Error: "+err);
    }
    

}

showData();



document.getElementById("addRecord").addEventListener("click",async(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let genderField = document.getElementsByName('gender');
    let gender='';
    genderField.forEach((item)=>{
        if(item.checked){
            gender+=item.value;
        }
    })
    let languageFields = document.getElementsByName('language');
    let language=[];
    languageFields.forEach((item)=>{
        if(item.checked){
            language.push(item.value);
        }
    })
    let country = document.getElementById("country").value;
    let student = {
        name,
        email,
        gender,
        language,
        country
    }

    await fetch("http://localhost:3000/students",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        showData();
    })
    .catch((err)=>{
        console.log("Error: "+err);
    })

});


 function getById(id){
   return fetch("http://localhost:3000/students/"+id);
}



function deleteRecord(id){
   fetch("http://localhost:3000/students/"+id,{
        method:"DELETE"
        }).then((response)=>{
            return response.json();
        }
        ).then((data)=>{
            console.log(data);
            showData();
        }).catch((err)=>{
            console.log("Error: "+err);
        })                
          
}