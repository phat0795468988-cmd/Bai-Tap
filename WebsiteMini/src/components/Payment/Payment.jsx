import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../feature/CartSlice";

function Payment() {
  const cart = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(
    `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim(),
  );

  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [note, setNote] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalProduct = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? 2 : 0;

  const total = totalProduct + shipping;

  //Nút Đặt Hàng
  function handleOrder() {
    if (!user) {
      alert("Bạn chưa đăng nhập!");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Giỏ hàng đang trống!");
      return;
    }

    if (!name.trim()) {
      alert("Vui lòng nhập họ và tên!");
      return;
    }

    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại!");
      return;
    }

    if (!email.trim()) {
      alert("Vui lòng nhập email!");
      return;
    }

    if (!address.trim()) {
      alert("Vui lòng nhập địa chỉ!");
      return;
    }

    if (!city) {
      alert("Vui lòng chọn tỉnh / thành phố!");
      return;
    }

    if (!district) {
      alert("Vui lòng chọn quận / huyện!");
      return;
    }

    const order = {
      id: Date.now(),
      userId: user.id,

      customer: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        district: district,
      },

      products: cart,

      totalProduct: totalProduct,
      shipping: shipping,
      total: total,

      paymentMethod: paymentMethod,

      note: note,

      status: "Đã đặt hàng",

      createdAt: new Date().toLocaleString("vi-VN"),
    };

    const oldOrders =
      JSON.parse(localStorage.getItem(`orders_${user.id}`)) || [];

    oldOrders.push(order);

    localStorage.setItem(`orders_${user.id}`, JSON.stringify(oldOrders));

    // Đưa giỏ hàng về trạng thái ban đầu
    dispatch(clearCart());

    alert("🎉 Đặt hàng thành công!");

    navigate("/history");
  }
  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-left">
          <h2>Thanh toán</h2>

          <div className="payment-box">
            <h3>Thông tin giao hàng</h3>

            <div className="payment-row">
              <div className="payment-group">
                <label>Họ và tên</label>

                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="payment-group">
                <label>Số điện thoại</label>

                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="payment-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="payment-group">
              <label>Địa chỉ</label>

              <input
                type="text"
                placeholder="Số nhà, tên đường..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="payment-row">
              <div className="payment-group">
                <label>Tỉnh / Thành phố</label>

                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Chọn tỉnh / thành phố</option>

                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>

                  <option value="Hà Nội">Hà Nội</option>

                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>

              <div className="payment-group">
                <label>Quận / Huyện</label>

                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value="">Chọn quận / huyện</option>

                  <option value="Quận 1">Quận 1</option>

                  <option value="Quận 3">Quận 3</option>

                  <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                </select>
              </div>
            </div>

            <div className="payment-group">
              <label>Ghi chú</label>

              <textarea
                placeholder="Ghi chú cho đơn hàng..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="payment-box">
            <h3>Phương thức thanh toán</h3>

            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div>
                <strong>Thanh toán khi nhận hàng</strong>

                <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
              </div>
            </label>

            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div>
                <strong>Chuyển khoản ngân hàng</strong>

                <p>Chuyển khoản trước khi nhận hàng</p>
              </div>
            </label>

            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="wallet"
                checked={paymentMethod === "wallet"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div>
                <strong>Ví điện tử</strong>

                <p>Thanh toán bằng ví điện tử</p>
              </div>
            </label>
          </div>
        </div>

        <div className="payment-right">
          <div className="payment-box">
            <h3>Đơn hàng của bạn</h3>

            {cart.length === 0 ? (
              <p>Giỏ hàng đang trống</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="payment-product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="payment-product-info">
                      <h4>{item.title}</h4>

                      <p>Số lượng: {item.quantity}</p>

                      <span>{(item.price * item.quantity).toFixed(2)} $</span>
                    </div>
                  </div>
                ))}

                <div className="payment-summary">
                  <div>
                    <span>Tạm tính</span>

                    <strong>{totalProduct.toFixed(2)} $</strong>
                  </div>

                  <div>
                    <span>Phí vận chuyển</span>

                    <strong>{shipping.toFixed(2)} $</strong>
                  </div>

                  <div className="payment-total">
                    <span>Tổng cộng</span>

                    <strong>{total.toFixed(2)} $</strong>
                  </div>
                </div>

                <button className="payment-button" onClick={handleOrder}>
                  Đặt hàng
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
