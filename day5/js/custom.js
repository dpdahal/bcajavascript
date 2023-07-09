"use strict";

let courseData=['javascript','html','python'];
function showData(){
    let outPut="<ul>";
    courseData.forEach((item)=>{
        outPut+=`<li>${item}</li>`;
    });
    outPut+="</ul>";
    document.getElementById('result').innerHTML=outPut; 
}
showData();

let input = document.getElementById("course");
input.addEventListener("keyup", function(event) {
    let new_course = event.target.value;
    if(new_course==''){
        document.getElementById('error').innerHTML="Please enter course name";
    }else{
        document.getElementById('error').innerHTML="";
    }
    if (event.keyCode === 13) {
        if(new_course==''){
            return false;
        }
        courseData.push(new_course);
        event.target.value='';
        showData();
    }
});

// document.querySelector("#addCourse").addEventListener('click',(e)=>{
//     e.preventDefault();
//     let courseName = document.getElementById("course").value;
//     courseData.push(courseName);
//     showData();
// });