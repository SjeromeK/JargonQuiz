// I need an array of questions with multiple choice 

var questions = [
    {
        question: 'Which of the below are understood by Javascript as Array Methods ?',
        choices:
            ['sort',
                'splice',
                'slice',
                'reverse',
                'none of the above',
                'all of the above'
            ],
        answer: 'all of the above'
    },
    {
        question: 'Objects are to Arrays as..',
        choices: [
            'Alphabets are to letters',
            'Libraries are to languages',
            'Letters are to Alphabets',
            'All of the above'
            ],
         answer : 'All of the Above'
    },
    {
        question: 'Operators are always taken to indicate the same value in ES6 regardless of context',
        choices: ['true',
            'false'],
        answer: 'false'
    },
    {
        question: 'All sets of parentheses must contain a string in order for javascript to run',
        choices: ['true',
            'false'],
        answer: 'false'
    },
    {
        question: 'Objects can store key value pairs if the keys are...',
        choices: ['literals',
            'control structures',
            'strings',
            'maps',
        ],

        answer: 'strings'
    },];

var Q = 0;
var correct = [];
var time = 60;
var timerId = setInterval(timeDecrement, 1000);

var startBtn = document.getElementById('start-button');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var endScreenEl  = document.getElementById('end-screen')
var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var responseEl = document.getElementById('response');

function buildQuestionCard() {
    var currentQuestion = questions[Q];

    questionTitleEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = '';

    
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceButtons = document.createElement('button');
        choiceButtons.setAttribute('class', 'choice');
        choiceButtons.setAttribute('value', choice);

        choiceButtons.textContent = choice;

        choiceButtons.onclick = questionClick;

        choicesEl.appendChild(choiceButtons);
        
    });

    timeEl.textContent = time;
}
function timeDecrement() {
    time--;
    timeEl.textContent = time;
  
}

function questionClick() {
   
    //if the answer is wrong
    console.log(this.value);
    if (this.value !== questions[Q].answer) {
        responseEl.textContent = 'wrong';
        time -= 10;
        if(time < 0) {
            time = 0;
        }
        timeEl.textContent = time;
        //conditional to make sure there is still time
    } else {
        correct.push(questions[Q]);
        responseEl.textContent = 'right'
        time += 10;
        //add time
    }
    Q++;
    if(Q === questions.length) {
        endQuiz();
    } else {
        buildQuestionCard();
    }
    // evaluate if we are out of questions
}
function endQuiz() {
    var score = parseInt(correct.length);
    console.log(score)

    questionCardEl.setAttribute('class', 'hide');
    endScreenEl.removeAttribute('class');

    scoreEl.textContent = "Score: " + score;
}

function startQuiz() {
    startScreenEl.setAttribute('class', 'hide');
    questionCardEl.removeAttribute('class');
    buildQuestionCard();
}

startBtn.addEventListener('click', startQuiz);