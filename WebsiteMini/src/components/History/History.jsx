import { useState } from "react";
import "./history.css";

function History() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders] = useState(() => {
    if (!user) {
      return [];
    }

    return (
      JSON.parse(
        localStorage.getItem(`orders_${user.id}`)
      ) || []
    );
  });

  return (
    <div className="history-page">

      <div className="history-container">

        <h2>Lịch sử mua hàng</h2>

        {!user ? (

          <div className="history-empty">

            <div className="history-empty-icon">
              🔒
            </div>

            <h3>
              Bạn chưa đăng nhập
            </h3>

            <p>
              Vui lòng đăng nhập để xem lịch sử mua hàng.
            </p>

          </div>

        ) : orders.length === 0 ? (

          <div className="history-empty">

            <div className="history-empty-icon">
              🛒
            </div>

            <h3>
              Chưa có đơn hàng
            </h3>

            <p>
              Bạn chưa có đơn hàng nào.
            </p>

          </div>

        ) : (

          orders
            .slice()
            .reverse()
            .map((order) => (

              <div
                className="history-order"
                key={order.id}
              >

                <div className="history-header">

                  <div>

                    <h3>
                      Đơn hàng #{order.id}
                    </h3>

                    <p>
                      Ngày đặt: {order.createdAt}
                    </p>

                  </div>

                  <span className="history-status">
                    {order.status}
                  </span>

                </div>


                <div className="history-customer">

                  <h4>
                    Thông tin giao hàng
                  </h4>

                  <p>
                    <strong>
                      Họ tên:
                    </strong>{" "}
                    {order.customer.name}
                  </p>

                  <p>
                    <strong>
                      Số điện thoại:
                    </strong>{" "}
                    {order.customer.phone}
                  </p>

                  <p>
                    <strong>
                      Email:
                    </strong>{" "}
                    {order.customer.email}
                  </p>

                  <p>
                    <strong>
                      Địa chỉ:
                    </strong>{" "}
                    {order.customer.address},{" "}
                    {order.customer.district},{" "}
                    {order.customer.city}
                  </p>

                </div>


                <div className="history-products">

                  <h4>
                    Sản phẩm
                  </h4>

                  {order.products.map((item) => (

                    <div
                      className="history-product"
                      key={item.id}
                    >

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                      />

                      <div className="history-product-info">

                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          Số lượng: {item.quantity}
                        </p>

                        <strong>
                          {(item.price * item.quantity).toFixed(2)} $
                        </strong>

                      </div>

                    </div>

                  ))}

                </div>


                <div className="history-payment">

                  <p>

                    <strong>
                      Phương thức thanh toán:
                    </strong>{" "}

                    {order.paymentMethod === "cod"
                      ? "Thanh toán khi nhận hàng"
                      : order.paymentMethod === "bank"
                      ? "Chuyển khoản ngân hàng"
                      : "Ví điện tử"}

                  </p>

                  {order.note && (

                    <p>

                      <strong>
                        Ghi chú:
                      </strong>{" "}

                      {order.note}

                    </p>

                  )}

                </div>


                <div className="history-total">

                  <span>
                    Tổng tiền:
                  </span>

                  <strong>
                    {order.total.toFixed(2)} $
                  </strong>

                </div>

              </div>

            ))

        )}

      </div>

    </div>
  );
}

export default History;