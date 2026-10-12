import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../feature/CartSlice";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("accessToken");
  });

  //Đếm số lượng sản phẩm trong giỏ hàng
  const cartItem = useSelector((state) => state.cart.list);
  const cartCount = cartItem.length;

  //Đếm số lượng sản phẩm trong giỏ hàng
  let wishlist = [];

  if (user) {
    wishlist =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];
  }

  const wishlistCount = wishlist.length;

  //Nút Đăng xuất
  function handleLogout() {
    const Logout = window.confirm(
      "Bạn có chắc muốn đăng xuất không ?"
    );

    if (!Logout) {
      return;
    }

    dispatch(clearCart());

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    setUser(null);
    setToken(null);

    navigate("/login");
  }

  //Nút giỏ hàng
  function handleCart() {
    if (!user) {
      const confirmLogin = window.confirm(
        "Bạn chưa đăng nhập. Bạn có muốn đăng nhập không?"
      );

      if (confirmLogin) {
        navigate("/login");
      }

      return;
    }

    navigate("/cart");
  }

  // Xem lịch sử đơn hàng
  function handleHistory() {
    if (!user) {
      const confirmLogin = window.confirm(
        "Bạn chưa đăng nhập. Bạn có muốn đăng nhập không?"
      );

      if (confirmLogin) {
        navigate("/login");
      }

      return;
    }

    navigate("/history");
  }

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <img src="/images/logo.jpg" alt="Logo" />
        </Link>

        <nav className="nav">
          <ul>

            <li>
              <Link to="/">
                Trang chủ
              </Link>
            </li>

            <li>
              <Link to="/products">
                Sản phẩm
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="header-icon"
              >
                ❤️
                <span>{wishlistCount}</span>
              </Link>
            </li>

            {token && user && (
              <li>
                <button
                  className="history-link"
                  onClick={handleHistory}
                >
                  📋 Lịch sử mua hàng
                </button>
              </li>
            )}

          </ul>
        </nav>

        <div className="header-actions">

          {!token && (
            <button
              className="btn-login"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </button>
          )}

          {token && user && (
            <span className="username">
              Xin chào, {user.username}
            </span>
          )}

          {token && (
            <button
              className="btn-logout"
              onClick={handleLogout}
            >
              Đăng xuất
            </button>
          )}

          <button
            className="cart-shop header-icon"
            onClick={handleCart}
          >
            🛒
            <span>{cartCount}</span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;