import { filter } from "./Filter.js";
import { NewProduct } from "./Map.js";
import { total } from "./Reduce.js";
const products = [
  { id: 1, name: "Bàn phím cơ", price: 1200000, category: "Gear", active: true },
  { id: 2, name: "Chuột không dây", price: 500000, category: "Gear", active: false },
  { id: 3, name: "Màn hình 24 inch", price: 3500000, category: "Display", active: true },
  { id: 4, name: "Tai nghe Bluetooth", price: 800000, category: "Gear", active: true }
];
const filterResult = filter(products);

const mapResult = NewProduct(products);

const totalResult = total(products)

console.log("Filter:", filterResult);
console.log("Map:", mapResult);
console.log("total:", totalResult);