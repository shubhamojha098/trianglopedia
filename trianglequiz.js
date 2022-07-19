var quizForm = document.querySelector(".quiz-Form");
var score = document.querySelector(".angles-btn");
var result = document.querySelector(".result");

var correctAnswers = ["Right", "180°", "Equilateral", "90°", "isosceles", "30", "5"];

function checkAnswers() {
    var count = 0;
    var index = 0;
    const userAnswers = new FormData(quizForm);
    for (let entry of userAnswers.values()) {
        if (entry === correctAnswers[index]) {
            count = count + 1;
        }
        index = index + 1;
    }

    if (index != 7) {
        result.innerText = "Answer all above Questions 👆";
        console.log(index + " ");
    } else {
        result.innerText = "Score : " + count + " / 7";
        console.log(count + " ");
    }

}

score.addEventListener('click', checkAnswers);