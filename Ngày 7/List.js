const btnThem = document.querySelector("#btnThem")
const inputFood = document.querySelector("#input")
const List = document.querySelector(".Food")

//Nút thêm
btnThem.addEventListener("click", () => {
    //Nhập tên món//
    const input = inputFood.value;
    const a = document.createElement("a")

    //Thêm nút xóa//
    const btnXoa = document.createElement("button")
    btnXoa.textContent = "Xóa"
    btnXoa.classList.add = "delete"

    //Thêm vào <a>
    a.append(input, btnXoa)

    //Thêm vào <ul>
    List.append(a)

    inputFood.value = ""
    
})

//Nút xóa
List.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
       event.target.parentElement.remove()
    }
})