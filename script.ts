const url: string= "https://api.adviceslip.com/advice";
const button: HTMLElement = document.getElementById("button")!;
const advice: HTMLElement = document.getElementById("advice")!;
const numadvice: HTMLElement = document.getElementById("num-advice")!;

const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        advice.innerHTML = data.slip.advice;
        numadvice.innerHTML = data.slip.id;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    getData();
}
);

button.addEventListener("click", () => {
    getData();
}
);
