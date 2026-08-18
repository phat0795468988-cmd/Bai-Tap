const calculate = (
    price, 
    tax = 0.1,
    discount = 0
) =>
{
   const totalMax= price * tax
   const total=  price * discount
   const sum = price + totalMax - total

 return `Giá: ${price}
Thuế: ${totalMax}
Giảm giá: ${total}
Thành tiền: ${sum}`
}

console.log(calculate(1000000,0.1,0.2))