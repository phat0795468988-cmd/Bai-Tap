// Lấy link theo danh mục, lấy danh mục sản phẩm, chuyển trang
import { useParams, Link, useNavigate } from "react-router-dom"; 
// API danh mục mà người dùng click vào
import { useQuery } from "@tanstack/react-query";
import "./category.css";
// Gửi action đến redux
import { useDispatch } from "react-redux";
// Lấy chức năng thêm
import { addToCart } from "../../feature/CartSlice";

function Category() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  //Nút thêm sản phẩm
  function handleAdd(product) {
    const user = JSON.parse(localStorage.getItem("user")); // Kiểm tra đã đăng nhập chưa

    //Nếu chưa đăng nhập thì bắt buộc phải đăng nhập
    if (!user) {
      const confirmLogin = window.confirm(
        "Bạn chưa đăng nhập. Bạn có muốn đăng nhập không?",
      );

      if (confirmLogin) {
        nav("/login");
      }

      return;
    }
    //Đã đăng nhập thì được sử dụng chức năng 
    dispatch(addToCart(product));
    nav("/cart");
  }

  //Nút thêm danh sách yêu thích
  function handleWishlist(product) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      const confirmLogin = window.confirm(
        "Bạn chưa đăng nhập. Bạn có muốn đăng nhập không?",
      );

      if (confirmLogin) {
        nav("/login");
      }

      return;
    }

    //Dò sản phẩm đã có trong danh sách yêu thích chưa
    const key = `wishlist_${user.id}`;
    const wishlist = JSON.parse(localStorage.getItem(key)) || [];

    const existed = wishlist.some((item) => item.id === product.id);

    if (existed) {
      alert("Sản phẩm đã có trong danh sách yêu thích");
      return;
    }

    wishlist.push(product);
    localStorage.setItem(key, JSON.stringify(wishlist));

    alert("Đã thêm vào danh sách yêu thích");
  }

  //Danh mục sản phẩm
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["detail", category],

    queryFn: async () => {
      const response = await fetch( 
        `https://dummyjson.com/products/category/${category}`,
      );

      if (!response.ok) {
        throw new Error("Không thể lấy sản phẩm");
      }

      return await response.json();
    },

    staleTime: 1000,
  });

  if (isPending) {
    return <h2>Đang tải dữ liệu.....</h2>;
  }

  if (isError) {
    return <h2>{error.message} - Lỗi dữ liệu</h2>;
  }

  return (
    <>
      <div className="category-heading">
        <h2>{category}</h2>

        <Link className="category-back" to="/products">
          Quay lại sản phẩm
        </Link>
      </div>

      <div className="category-products">
        {data.products.map((product) => {
          return (
            <div className="category-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <h3>{product.title}</h3>

              <p className="category-description">{product.description}</p>

              <p className="category-price">
                Giá: {product.price.toLocaleString("vi-VN")} $
              </p>

              <p className="category-rating">⭐ {product.rating}</p>

              <div className="category-button-detail">
                <Link
                  className="category-btn-detail"
                  to={`/product/${product.id}`}
                >
                  Xem Chi Tiết
                </Link>
              </div>

              <div className="category-button-cart">
                <button
                  className="category-btn-cart"
                  onClick={() => handleAdd(product)}
                >
                  🛒 Thêm Giỏ Hàng
                </button>
              </div>

              <div className="category-button-wishlist">
                <button
                  className="category-btn-wishlist"
                  onClick={() => handleWishlist(product)}
                >
                  ❤️ Thêm Yêu Thích
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
