const startbtn=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElem=document.getElementById('question-container')
let shuffleQuestion,currentQuestionIndex
const questionELem=document.getElementById('question')
const answerButtonElem=document.getElementById('answer-buttons')
let c=0
startbtn.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>
{
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame()
{   
    startbtn.classList.add('hide')
    shuffleQuestion=questions.sort(() => Math.random() - .5)
    currentQuestionIndex=0
    c=0
    questionContainerElem.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion()
{
resetState()
showQuestion(shuffleQuestion[currentQuestionIndex])
}

function showQuestion(question)
{
    questionELem.innerText=question.question
    question.answers.forEach(answer => {
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')

        if(answer.correct)
        {
            button.dataset.correct=answer.correct
            
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElem.appendChild(button)
    })
}

function resetState()
{
    
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElem.firstChild)
    {
        answerButtonElem.removeChild
        (answerButtonElem.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedbutton=e.target
    const correct=selectedbutton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElem.children).forEach(button => 
        {
            setStatusClass(button,button.dataset.correct)
        })
        if(shuffleQuestion.length>currentQuestionIndex + 1)
        {
  nextButton.classList.remove('hide')      
        }
        else
        {
          
            alert('Your Score is :'+c)  
            startbtn.innerText='Restart Game'
            startbtn.classList.remove('hide')
          
        }
}

function setStatusClass(element,correct)
{
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
        c++
    }
    else
    {   
        element.classList.add('wrong')
       
    }
}

function clearStatusClass(element)
{
    
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions =[
    {
    question: 'What is 5 + 9 ?',
    answers:[
        {text:'14',correct:true},
        {text:'22',correct:false},
        {text:'88',correct:false},
        {text:'77',correct:false}
    ]
    },
   {
    question: 'What is 10 * 3 ?',
    answers:[
        {text:'55',correct:false},
        {text:'30',correct:true},
        {text:'12',correct:false}
    ]
    },
    {
    question: 'What is the Capital Of India?',
    answers:[
        {text:'New Delhi',correct:true},
        {text:'Mumbai',correct:false},
        {text:'Hyderabad',correct:false},
        {text:'Patna',correct:false}
    ]
    },
    {
    question: 'Who is the PM of India?',
    answers:[
        {text:'Rajiv Gandhi',correct:false},
        {text:'Indira Gandhi',correct:false},
        {text:'Rahul Gandhi',correct:false},
        {text:'Narendra Modi',correct:true}

    ]
    },
    {
    question: 'What is 55/5 ?',
    answers:[
        {text:'19',correct:false},
        {text:'11',correct:true},
        {text:'32',correct:false}
    ]
    },
    {
    question: 'What is 110 + 7?',
    answers:[
        {text:'001',correct:false},
        {text:'119',correct:false},
        {text:'117',correct:true},
        {text:'223',correct:false}
    ]
    }
]