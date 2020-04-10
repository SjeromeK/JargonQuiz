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
            'All of the above'],
    },
    {
        question: 'Operators are always taken to indicate the same value b javascript regardless of context',
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
var time = 1000;

var startBtn = document.getElementById('start-button');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('timer');

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

function questionClick() {
    //if the answer is wrong
    console.log(this.value);
    if (this.value !== questions[Q].answer) {
        console.log('wrong');
        alert("wrong");
        //show wrong on screen
        //subtract time
        //conditional to make sure there is still time
    } else {
        correct.push(questions[Q]);
        console.log(correct);
        //show right on the screen
        //add time
    }
    Q++;
    buildQuestionCard();
    //if the answer is right
}

function startQuiz() {
    startScreenEl.setAttribute('class', 'hide');
    questionCardEl.removeAttribute('class');
    buildQuestionCard();
}

startBtn.addEventListener('click', startQuiz);