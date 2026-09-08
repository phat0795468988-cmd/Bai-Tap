function Cart({list}){
    let totalQuantity = 0
    let totalPrice = 0

  list.forEach((product) => {
    totalQuantity = totalQuantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity
  })

  return(
    <div className="Cart">
        <h2>Tổng sản phẩm: {totalQuantity}</h2>
        <h2>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</h2>
    </div>
  )
}
export default Cart;