import axios from "axios"

export async function getProducts(){
    try{
        const reponse = await axios.get(`https://dummyjson.com/products/`)
        console.log("Đã kết nối được API ✔️ ")
        return reponse.data.products
    }
    catch(error){
        console.log("Chưa kết nối được với API ❌")
    }
}