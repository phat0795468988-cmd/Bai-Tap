const caculateprice = (
    price,
    quantity = 0
) =>
{
    total = price * quantity
    return `Sản phẩm: ${price}
Số lượng: ${quantity}
Tổng tiền là ${total}`
}
console.log(caculateprice(5000,3))
