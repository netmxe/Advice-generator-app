"use strict";
const url = "https://api.adviceslip.com/advice";
const button = document.getElementById("button");
const advice = document.getElementById("advice");
const numadvice = document.getElementById("num-advice");
const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        advice.innerHTML = data.slip.advice;
        numadvice.innerHTML = data.slip.id;
    });
};
document.addEventListener("DOMContentLoaded", () => {
    getData();
});
button.addEventListener("click", () => {
    getData();
});
