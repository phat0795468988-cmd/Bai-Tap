const calculate = (
    price, 
    tax = 0.1,
    discount = 0
) =>
{
   const tax = price * tax
   const discount =  price * discount
   const total = price + totalMax - total

 return `Giá: ${price}
Thuế: ${tax}
Giảm giá: ${discount}
Thành tiền: ${total}`
}

console.log(calculate(1000000,0.1,0.2))