let questions=[
    {
        question:"What is the full form of HTML?",
        option:[
            "Hyper Text Markup Language",
            "Hyper Text Makeup Language",
            "Hyper Text Marking Language",
            "Hyper Text Marked Language"
        ],
        answer:1
    },
    {
        question:"What is the full form of CSS?",
        option:[
            "Cascading Style Sheet",
            "Cascading Style Sheep",
            "Cartoon Style Sheet",
            "Cascading Super Sheet"
        ],
        answer:0
    },
]

function showQuestion(){
    let outPut="<div>";
    questions.map((question,qindex)=>{
        let options='<div>';
        outPut+=`<h2>${question.question}</h2>`;
            question.option.map((option,index)=>{
                options+=`<p><input type="radio" name="answer${qindex}" value="${index}">${option}</p>`;

            });
        options+='</div>';
        outPut+=options;

    })
    outPut+="</div>";
    document.querySelector(".questionlist").innerHTML=outPut;

}

showQuestion();