function Active({list}){
    let totalQuantity = 0
    list.forEach((product)=>{
       totalQuantity = totalQuantity + product.quantity
    })
    if(totalQuantity === 0 ){
        return "Giỏ hàng trống"
    }
    else{
        return `Giỏ hàng đã có ${totalQuantity} sản phẩm `
    }
}
export default Active