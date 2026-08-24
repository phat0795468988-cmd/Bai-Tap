const btn = document.querySelector("#btn")
const exit = document.querySelector("#exit")
const btn1 = document.querySelector("#btn1")
const exit1 = document.querySelector("#exit1")
const modal = document.querySelector("#modal")
const modal1 = document.querySelector("#modal1")

btn.addEventListener("click", () => {
    modal.style.display = "flex";
})

exit.addEventListener("click", () => {
    modal.style.display = "none";
})

btn1.addEventListener("click", () => {
    modal1.style.display = "flex";
})

exit1.addEventListener("click", () => {
    modal1.style.display = "none";
})