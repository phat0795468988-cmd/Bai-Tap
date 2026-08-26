const btnThem = document.querySelector("#btnThem")
const input = document.querySelector("#textContent")
const Content = document.querySelector("#content")

btnThem.addEventListener("click", () => {
    const work = input.value;

    const btnXoa = document.createElement("button")
    btnXoa.textContent = "Xóa"
    btnXoa.classList = "delete"
    const active = document.createElement("li")
    
    active.append(work, btnXoa)
    Content.append(active)
    input.value = ""
})


Content.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove()
    }
})

