const questions1 = [
    {
        question: "What is the correct way of the strings in Python?",
        answers: ["\"\"", "\'\'", "Both", "None of these"],
        correct: 2
    },
    {
        question: "A list in a Python contains:",
        answers: ["Multiple datatypes values", "Same datatypes values", "Only integers", "All of these"],
        correct: 3
    },
    {
        question: "Which type of Programming does Python support?",
        answers: ["Object-oriented programming", "Structured programming", "Functional programming", "All of the mentioned"],
        correct: 3
    },
    {
        question: "Which of the following is the correct extension of the Python file?",
        answers: [".python", "pl", ".py", ".ipynb"],
        correct: 2
    },
    {
        question: "Output of: 4 + 3 % 5",
        answers: ["7", "2", "4", "1"],
        correct: 0
    },
    {
        question: "Which keyword is used for function in Python language?",
        answers: ["def", "function", "fun", "Define"],
        correct: 0
    },
    {
        question: "Which of the following character is used to give single-line comments in Python?",
        answers: ["//", "#", "!", "/*"],
        correct: 1
    },
    {
        question: "Which of the following functions is a built-in function in python?",
        answers: ["factorial()", "print()", "speed()", "sqrt()"],
        correct: 1
    },
    {
        question: "What will be the output of the following Python function? len([\"hello\",2,4,6,[1,3]])",
        answers: ["6", "5", "7", "12"],
        correct: 1
    },
    {
        question: "What will be the output of the following Python expression? round(4.576)",
        answers: ["4", "4.5", "4.6", "5"],
        correct: 3
    }
];
const questions2 = [
    {
        question: ">>>\"javatpoint\"[5:] ",
        answers: ["javapoint", "java", "point", "javatpoint"],
        correct: 2
    },
    {
        question: "How is a code block indicated in Python?",
        answers: ["Brackets", "Indentation", "Key", "None"],
        correct: 1
    },
    {
        question: "Which of the following types of loops are not supported in Python?",
        answers: ["for", "while", "do-while", "None"],
        correct: 2
    },
    {
        question: "Which of the following modules need to be imported to handle date time computations in Python?",
        answers: ["datetime", "date", "time", "timedate"],
        correct: 0
    },
    {
        question: "In which language is Python written?",
        answers: ["C++", "C", "java", "None"],
        correct: 1
    },
    {
        question: "Which of the following concepts is not a part of Python?",
        answers: ["Pointers", "loops", "Dynamic Typing", "All of above"],
        correct: 0
    },
    {
        question: "Which of the following statements are used in Exception Handling in Python?",
        answers: ["try", "except", "finally", "All of the above"],
        correct: 3
    },
    {
        question: "Amongst which of the following is / are the application areas of Python programming?",
        answers: ["Web Development", "Game Development", "Artificial Intelligence and Machine Learning", "All of the mentioned above"],
        correct: 3
    },
    {
        question: "The % operator returns the ___.",
        answers: ["Quotient", "Divisor", "Remainder", "None"],
        correct: 2
    },
    {
        question: "Python Dictionary is used to store the data in a ___ format.",
        answers: ["Key value pair", "Group value pair", "Select value pair", "None"],
        correct: 0
    }
];
const questions3 = [
    {
        question: "Which of the following brackets are used in python to create a list?",
        answers: ["( )", "[ ]", "{ }", "None of these"],
        correct: 1
    },
    {
        question: "Which of the following is invalid variable?",
        answers: ["string_123", "_hello", "12_hello", "None of these"],
        correct: 2
    },
    {
        question: "Which function is used to get the version of python?",
        answers: ["system.getversion", "sys.version(1)", "system.get", "None of the above"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a data type in python?",
        answers: ["list", "tuple", "string", "array"],
        correct: 3
    },
    {
        question: "What is the correct syntax to create a function in Python?",
        answers: ["def myfunction()", "function myfunction", "create myfunction", "None of these"],
        correct: 0
    },
    {
        question: "Which is the data type of the following Python code?  x = [1 ,2 , 3]",
        answers: ["list", "tuple", "dictionary", "integer"],
        correct: 0
    },
    {
        question: "DataFrames in python can be handled through library:",
        answers: ["sys", "numpy", "pandas", "re"],
        correct: 2
    },
    {
        question: "By default data type of the input in python is:",
        answers: ["string", "float", "integer", "depends on the variable data type"],
        correct: 0
    },
    {
        question: "Which key word is used as anonymous function in python?",
        answers: ["def", "lambda", "fun", "function"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a comparison operator in Python?",
        answers: ["==", "!=", "++", "<="],
        correct: 2
    }
];
function call_back(fn1){
    return fn1;
}

let r = Math.floor(Math.random() * 3);
let q = [questions1, questions2, questions3];
let questions = q[r];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    var answerButtons = document.querySelectorAll(".answer-btn");

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;

        for (let i = 0; i < 4; i++) {
            answerButtons[i].textContent = questions[currentQuestion].answers[i];
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    displayQuestion();
}

function endQuiz() {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");

    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "block";
}
function st_again(){
    location.reload();
}
displayQuestion();