import Product from "./Products.js";
import Cart from "./Cart.js";

const product1 = new Product(1, "Hoa Hồng", 100000, 2);
const product2 = new Product(2, "Hoa Hồng 1 ", 200000, 2);
const product3 = new Product(3, "Hoa Hồng 2 ", 300000, 2);
const product4 = new Product(4, "Hoa Hồng 3 ", 400000, 2);

const Products = new Cart([product1, product2, product3])


const addedProduct = Products.addProduct(product4);

const removedProduct = Products.removeProduct(3);

const total = Products.getTotal();

console.log("Sản phẩm đã thêm:");
console.log(addedProduct.showInfo());
console.log("---------------------")
console.log("Sản phẩm đã xóa:");
console.log(removedProduct.showInfo());
console.log("---------------------")
console.log("Giỏ hàng hiện tại:");
console.log(Products.showInfo());
console.log("---------------------")
console.log(`Tổng tiền giỏ hàng: ${total}`)