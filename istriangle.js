var angles = document.querySelectorAll(".angle-input");
var angle2 = document.querySelectorAll("#inp2");
var angle3 = document.querySelectorAll("#inp3");
var calculate = document.querySelector(".angles-btn");
const result = document.querySelector(".result");



function calculateSumOfAngles(a, b, c) {
    const sumOfAngles = a + b + c;
    return sumOfAngles;
}

function checkIfTriangle() {

    const sumValue = calculateSumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    console.log(sumValue);
    if (sumValue === 180) {
        result.innerText = "Yay! the angle values form a triangle 🥳";
        result.style.color = "green";
    } else {
        result.innerText = "Oops! the angles don't form a triangle 😓";
        result.style.color = "red";
    }
}

calculate.addEventListener('click', checkIfTriangle);