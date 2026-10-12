import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removeToCard, sumProduct, subtraction } from "../../feature/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.list);
  const nav = useNavigate();
  //Nút Thanh Toán
  function handlePay() {
    nav("/payment");
  }

  const Total = cartItem.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  //Nút xóa giỏ hàng
  function handleRemove(product) {
    dispatch(removeToCard(product.id));
  }
  //Nút tăng số lượng
  function handleSum(product) {
    dispatch(sumProduct(product.id));
  }
  //Nút giảm số lượng
  const handleSubtraction = (product) => {
    dispatch(subtraction(product.id));
  };

  return (
    <div className="cart-page">
      <h1>🛒 Giỏ hàng</h1>

      {cartItem.length === 0 ? (
        <div className="empty-cart">
          <h2>🛒 Giỏ hàng đang trống</h2>
          <p>Hãy thêm sản phẩm vào giỏ hàng nhé!</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItem.map((product) => (
              <div className="cart-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />

                <div className="cart-info">
                  <h2>{product.title}</h2>

                  <p className="cart-price">${product.price}</p>

                  <p className="cart-category">{product.category}</p>

                  <p className="cart-description">{product.description}</p>

                  <button onClick={() => handleSum(product)}>+</button>

                  <span>{product.quantity}</span>

                  <button onClick={() => handleSubtraction(product)}>-</button>
                  <button onClick={() => handleRemove(product)}>
                    Xóa sản phẩm
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Tổng tiền:</span>

            <strong>${Total}</strong>

            <button onClick={handlePay}>THANH TOÁN</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
