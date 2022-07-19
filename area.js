var base1 = document.querySelector("#base1");
var height1 = document.querySelector("#height1");
var base2 = document.querySelector("#base2");
var base3 = document.querySelector("#base3");
var base4 = document.querySelector("#base4");
var calculate1 = document.querySelector("#btn1");
var calculate2 = document.querySelector("#btn2");
var result1 = document.querySelector("#result1");
var result2 = document.querySelector("#result2");

calculate1.addEventListener("click", function findarea1() {
    var c = (1 / 2) * Number(base1.value) * Number(height1.value);
    if (c === 0) {
        result1.innerText = "Invalid input";
        result1.style.color = "red";


    } else {
        result1.innerText = "The area of the triangle  is " + c + " sq units";
        result1.style.color = "green";

    }
})

function findarea2() {
    var a = Number(base2.value);
    var b = Number(base3.value);
    var c = Number(base4.value);
    var s = (a + b + c) / 2

    var value = s * (s - a) * (s - b) * (s - c);
    var area = Math.sqrt(value).toFixed(4);
    if (area === 0) {
        result2.innerText = "Invalid input";
        result2.style.color = "red";


    } else {
        result2.innerText = "The area of the triangle  is " + area + " sq units";
        result2.style.color = "green";
    }

}



calculate2.addEventListener("click", findarea2);