const products = [
  { id: 1, name: "Bàn phím cơ", price: 1200000, category: "Gear", active: true },
  { id: 2, name: "Chuột không dây", price: 500000, category: "Gear", active: false },
  { id: 3, name: "Màn hình 24 inch", price: 3500000, category: "Display", active: true },
  { id: 4, name: "Tai nghe Bluetooth", price: 800000, category: "Gear", active: true }
];
//Lọc danh sách
const item = products.filter(product =>
    product.active ===true && product.category === "Gear"
)

//Tạo mảng mới có 2 giá trị name, price
const item1 = products.map(
    product =>{
        return{
            name: product.name,
            price: product.price * 0.9
        }
    }
)

//Tính tổng tiền các sản phẩm đang active

const item2 = products.reduce((sum,product) => {
        if(product.active === true){
           sum += product.price;
        }
        return sum;
},0
);

console.log(item)
console.log(item1)
console.log(item2)