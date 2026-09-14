
import { useCallback, useMemo, useState, useRef } from "react";
import products from "./Test/products";
import "./App.css";
import Product from "./Test/Product";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(products);

  const inputName = useRef(null);

  const handleQuantity = useMemo(() => {
    return list.reduce((sum, product) => {
      return sum + product.quantity;
    }, 0);
  }, [list]);

  const handleTotal = useMemo(() => {
    return list.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }, [list]);

  const handleName = useMemo(() => {
    if (name === "") {
      return list;
    }

    return list.filter((product) => {
      return product.name.toLowerCase().includes(name.toLowerCase());
    });
  }, [name, list]);

  const handleSetup = useCallback(() => {
    setList((currentList) => {
      return currentList.map((product) => {
        return {
          ...product,
          price: product.price + 100000,
          quantity: product.quantity + 1
        };
      });
    });
  }, []);

  return (
    <>
      <h1>📱 PHONE STORE</h1>

      <p>
        Tìm kiếm{" "}
        <input
          ref={inputName}
          value={name}
          placeholder="Mời bạn nhập"
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <button onClick={() => inputName.current.focus()}>
        Focus
      </button>

      <p>Tổng số lượng: {handleQuantity}</p>

      <p>
        Tổng tiền: {handleTotal.toLocaleString("vi-VN")} VNĐ
      </p>

      <Product onBuy={handleSetup} />

      {handleName.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>

            <h2>
              {product.price.toLocaleString("vi-VN")} VNĐ
            </h2>

            <p>Số lượng: {product.quantity}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
