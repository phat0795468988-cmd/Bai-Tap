import { useState } from "react";
import products from "./components/product";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Active from "./components/Active";
import "./App.css";
function App(){
  const [list, setList] = useState(products)
  return(
    <>
      <h1>MINI SHOP</h1>
      <div className="List">
        {list.map((product) => {
        return(
          <ProductList
          key = {product.id}
          id = {product.id}
          name = {product.name}
          price={product.price}
          quantity={product.quantity}
          list={list}
          setList={setList}
          />
        )
      })}
      </div>
      <div className="cartShop">
          <h1>Giỏ hàng</h1>
          <Cart 
          list={list}/>
      </div>
      <div className="active">
          <Active list={list}/>
      </div>
    </>
  )
}
export default App;