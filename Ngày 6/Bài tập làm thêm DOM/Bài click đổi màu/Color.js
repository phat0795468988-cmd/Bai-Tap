const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const cls1 = document.getElementsByClassName("cls1")[0];

btn.addEventListener("click", () => {
    cls1.style.backgroundColor = "blue";
});

btn1.addEventListener("click", () => {
    cls1.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
    cls1.style.backgroundColor = "purple";
});

btn3.addEventListener("click", () => {
    cls1.style.backgroundColor = "white";
});