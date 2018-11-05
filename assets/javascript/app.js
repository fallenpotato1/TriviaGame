$(document).ready(function () {


    var theQuestions = {
        question1: {
            question: "How are socks made?",
            answers: ["With cotton", "With machines", "By humans", "By sheep"],
            correct: "Without sheep, you cant have socks... kinda"
        },
        question2: {
            question: "Who came up with your name?",
            answers: ["Your Father", "Your Mother", "Some random dude a long time go", "Not you"],
            correct: "Not you"
        },
        question3: {
            question: "What is my Name?",
            answers: ["Juan", "Pablo", "Richard", "Potato"],
            correct: "Fallenpotato1 is my xbox name soooooooo..."
        },
        question4: {
            question: "Who is your daughter's mother?",
            answers: ["You", "Me", "Us", "Some Lady"],
            correct: "Some Lady, every mother is some lady"
        },
        question5: {
            question: "What will be the next question?",
            answers: ["This Question", "The next question?", "What was the previous question?", "None of the above"],
            correct: "What was the previous question"
        }
    }
    
    

    var totalCorrect = 0
    function startGame() {
        var timeLeft = 10
        theInterval = setInterval(function () {
            $(".progressBar").text(timeLeft--)
            if (timeLeft === -1) {
                endGame()
                clearInterval(theInterval)
            }
        }, 1000);
        $(".question").append("<h2 class='questionWords'>" + theQuestions.question1.question + "</h2>")
        theQuestions.question1.answers.forEach(function (answers) {
            $(".answer").append("<input type='radio' name='firstAnswer' value='" + answers + "'>" + answers + "<br>")
        })
        $(".bottomCenter").append("<br><br>")
        $(".button").append("<button class='nextButton'>Next</button>")
        secondQuestion()
    }

    function secondQuestion() {
        $(".nextButton").on("click", function () {
            var firstAnswer = $("input[name='firstAnswer']:checked").val();
            if (firstAnswer === theQuestions.question1.answers[3]) {
                totalCorrect++
            }
            $(".question").empty()
            $(".answer").empty()
            $(".button").empty()

            $(".question").append("<h2 class='questionWords'>" + theQuestions.question2.question + "</h2>")
            theQuestions.question2.answers.forEach(function (answers) {
                $(".answer").append("<input type='radio' name='secondAnswer' value='" + answers + "'>" + answers + "<br>")
            })
            $(".bottomCenter").append("<br><br>")
            $(".button").append("<button class='nextButton'>Next</button>")
            thirdQuestion()
        })
    }

    function thirdQuestion() {
        $(".nextButton").on("click", function () {
            var secondAnswer = $("input[name='secondAnswer']:checked").val();
            if (secondAnswer === theQuestions.question2.answers[3]) {
                totalCorrect++
            }
            $(".question").empty()
            $(".answer").empty()
            $(".button").empty()

            $(".question").append("<h2 class='questionWords'>" + theQuestions.question3.question + "</h2>")
            theQuestions.question3.answers.forEach(function (answers) {
                $(".answer").append("<input type='radio' name='thirdAnswer' value='" + answers + "'>" + answers + "<br>")
            })
            $(".bottomCenter").append("<br><br>")
            $(".button").append("<button class='nextButton'>Next</button>")
            fourthQuestion()
        })
    }

    function fourthQuestion() {
        $(".nextButton").on("click", function () {
            var thirdAnswer = $("input[name='thirdAnswer']:checked").val();
            if (thirdAnswer === theQuestions.question3.answers[3]) {
                totalCorrect++
            }
            $(".question").empty()
            $(".answer").empty()
            $(".button").empty()

            $(".question").append("<h2 class='questionWords'>" + theQuestions.question4.question + "</h2>")
            theQuestions.question4.answers.forEach(function (answers) {
                $(".answer").append("<input type='radio' name='fourthAnswer' value='" + answers + "'>" + answers + "<br>")
            })
            $(".bottomCenter").append("<br><br>")
            $(".button").append("<button class='nextButton'>Next</button>")
            fifthQuestion()
        })
    }
    
    function fifthQuestion() {
        $(".nextButton").on("click", function () {
            var fourthAnswer = $("input[name='fouthAnswer']:checked").val();
            if (fourthAnswer === theQuestions.question4.answers[3]) {
                totalCorrect++
            }
            $(".question").empty()
            $(".answer").empty()
            $(".button").empty()

            $(".question").append("<h2 class='questionWords'>" + theQuestions.question5.question + "</h2>")
            theQuestions.question4.answers.forEach(function (answers) {
                $(".answer").append("<input type='radio' name='fifthAnswer' value='" + answers + "'>" + answers + "<br>")
            })
            $(".bottomCenter").append("<br><br>")
            $(".button").append("<button class='nextButton'>Next</button>")
            $(".nextButton").on("click", function () {
                endGame()
            })
        })
    }

    function endGame() {
        console.log(totalCorrect)
        var fourthAnswer = $("input[name='fouthAnswer']:checked").val();
            if (fourthAnswer === theQuestions.question4.answers[3]) {
                totalCorrect++
                console.log(totalCorrect)
            }
            $(".question").empty()
            $(".answer").empty()
            $(".button").empty()
        
    }


    startGame()



})