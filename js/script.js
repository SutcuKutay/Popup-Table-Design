var firstButtonClick = true;
var secondButtonClick = false;
var thirdButtonClick = false;
var fourthButtonClick = false;

var pinkColor = "#E91E63";
var blueColor = "#03A9F4";

function button1() {
    var firstButton = document.getElementById("first-button");
    var secondButton = document.getElementById("second-button");
    var thirdButton = document.getElementById("third-button");
    var fourthButton = document.getElementById("fourth-button");

    if (firstButtonClick) {
        return null;
    }
    else {
        firstButton.style.background = pinkColor;
        secondButton.style.background = blueColor;
        thirdButton.style.background = blueColor;
        fourthButton.style.background = blueColor;

        firstButtonClick = true;
        secondButtonClick = false;
        thirdButtonClick = false;
        fourthButtonClick = false;
    }
}

function button2() {
    var firstButton = document.getElementById("first-button");
    var secondButton = document.getElementById("second-button");
    var thirdButton = document.getElementById("third-button");
    var fourthButton = document.getElementById("fourth-button");

    if (secondButtonClick) {
        return null;
    }
    else {
        firstButton.style.background = blueColor;
        secondButton.style.background = pinkColor;
        thirdButton.style.background = blueColor;
        fourthButton.style.background = blueColor;

        firstButtonClick = false;
        secondButtonClick = true;
        thirdButtonClick = false;
        fourthButtonClick = false;
    }
}

function button3() {
    var firstButton = document.getElementById("first-button");
    var secondButton = document.getElementById("second-button");
    var thirdButton = document.getElementById("third-button");
    var fourthButton = document.getElementById("fourth-button");

    if (thirdButtonClick) {
        return null;
    }
    else {
        firstButton.style.background = blueColor;
        secondButton.style.background = blueColor;
        thirdButton.style.background = pinkColor;
        fourthButton.style.background = blueColor;

        firstButtonClick = false;
        secondButtonClick = false;
        thirdButtonClick = true;
        fourthButtonClick = false;
    }
}

function button4() {
    var firstButton = document.getElementById("first-button");
    var secondButton = document.getElementById("second-button");
    var thirdButton = document.getElementById("third-button");
    var fourthButton = document.getElementById("fourth-button");

    if (fourthButtonClick) {
        return null;
    }
    else {
        firstButton.style.background = blueColor;
        secondButton.style.background = blueColor;
        thirdButton.style.background = blueColor;
        fourthButton.style.background = pinkColor;

        firstButtonClick = false;
        secondButtonClick = false;
        thirdButtonClick = false;
        fourthButtonClick = true;
    }
}