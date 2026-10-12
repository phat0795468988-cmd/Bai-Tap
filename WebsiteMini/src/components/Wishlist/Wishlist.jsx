  import { useEffect, useState } from "react";
import "./wishlist.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../feature/CartSlice";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  // Lấy Wishlist từ localStorage
  function loadWishlist() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setWishlist([]);
      setSelected([]);
      return;
    }

    const data =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

    setWishlist(data);
    setSelected([]);
  }

  // Thêm sản phẩm đã chọn vào giỏ hàng
  function handleAdd() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      const confirmLogin = window.confirm(
        "Bạn chưa đăng nhập. Bạn có muốn đăng nhập không?"
      );

      if (confirmLogin) {
        nav("/login");
      }

      return;
    }

    const products = wishlist.filter((product) =>
      selected.includes(product.id)
    );

    if (products.length === 0) {
      window.alert("Vui lòng chọn sản phẩm cần thêm");
      return;
    }
    products.forEach((product) => {
      dispatch(addToCart(product));
    });

    // Xóa sản phẩm đã thêm khỏi danh sách
    const newWishlist = wishlist.filter(
      (product) => !selected.includes(product.id)
    );

    setWishlist(newWishlist);

    localStorage.setItem(
      `wishlist_${user.id}`,
      JSON.stringify(newWishlist)
    );
    window.dispatchEvent(new Event("wishlistUpdated"));

    setSelected([]);

    window.alert(
      "Đã thêm sản phẩm vào giỏ hàng và xóa khỏi danh sách yêu thích!"
    );
  }

  // Xóa sản phẩm đã chọn khỏi Wishlist
  function handleRemoveSelected() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      nav("/login");
      return;
    }

    if (selected.length === 0) {
      window.alert("Vui lòng chọn sản phẩm cần xóa");
      return;
    }

    const newWishlist = wishlist.filter(
      (product) => !selected.includes(product.id)
    );

    setWishlist(newWishlist);

    localStorage.setItem(
      `wishlist_${user.id}`,
      JSON.stringify(newWishlist)
    );
    window.dispatchEvent(new Event("wishlistUpdated"));

    setSelected([]);

    window.alert("Đã xóa sản phẩm được chọn!");
  }

  // Lấy Wishlist khi mở trang
  // Và cập nhật khi Wishlist thay đổi
  useEffect(() => {
    loadWishlist();

    function handleWishlistUpdate() {
      loadWishlist();
    }

    window.addEventListener(
      "wishlistUpdated",
      handleWishlistUpdate
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        handleWishlistUpdate
      );
    };
  }, []);

  // Chọn tất cả
  function handleSelectAll(e) {
    if (e.target.checked) {
      setSelected(wishlist.map((product) => product.id));
    } else {
      setSelected([]);
    }
  }

  // Chọn từng sản phẩm
  function handleSelect(id) {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  const isAllSelected =
    wishlist.length > 0 &&
    selected.length === wishlist.length;

  return (
    <div className="list-favorite">
      <h2>♥️ Danh Sách Được Yêu Thích ♥️</h2>

      <div className="select-all">
        <label>
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          Chọn tất cả
        </label>
      </div>

      {wishlist.length === 0 && (
        <p className="empty-wishlist">
          Chưa có sản phẩm yêu thích.
        </p>
      )}

      {wishlist.map((product) => (
        <div className="favorite-item" key={product.id}>
          <input
            type="checkbox"
            checked={selected.includes(product.id)}
            onChange={() => handleSelect(product.id)}
          />

          <img
            src={product.thumbnail}
            alt={product.title}
          />

          <div className="favorite-info">
            <h3>{product.title}</h3>

            <p>
              {product.price.toLocaleString("vi-VN")} $
            </p>
          </div>
        </div>
      ))}

      {wishlist.length > 0 && (
        <div className="btnselectAll">
          <button onClick={handleAdd}>
            🛒 Thêm sản phẩm đã chọn
          </button>

          <button onClick={handleRemoveSelected}>
            🗑️ Xóa sản phẩm đã chọn
          </button>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
