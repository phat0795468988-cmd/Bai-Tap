const caculate = (
    price,
    tax = 0.1,
    discount = 0
) =>
{
    moneytax = price * tax;
    moneydiscount = price * discount;
    total = price + moneytax - moneydiscount

    return` Giá: ${price}
Thuế: ${moneytax}
Giảm giá: ${moneydiscount}
Tổng tiền là: ${total}`
}
console.log(caculate(1000000,0.1,0.2))
