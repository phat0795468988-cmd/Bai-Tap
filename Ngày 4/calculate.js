const calculate = (
    price,
    tax = 0.1,
    discount = 0
) => {
    const moneytax = price * tax
    const moneydiscount = price * discount
    const total = price + moneytax - moneydiscount

    return `Giá sản phẩm: ${price}
Giá khi cộng thuế: ${moneytax}
Giảm giá: ${moneydiscount}
Tổng tiền: ${total}`
}

console.log(calculate(1000000,0.1,0.2))
