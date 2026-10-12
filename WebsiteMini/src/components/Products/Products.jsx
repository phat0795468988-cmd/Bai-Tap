//API Sản phẩm
import { getProducts } from "../../api/products.js";
//Dùng để gọi API
import { useQuery } from "@tanstack/react-query";
import "./products.css";
//Link dẫn tới URL của danh mục, useNavigate chuyển trang
import { Link, useNavigate } from "react-router-dom";
//Gửi Action đến redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/CartSlice.js";
//Cập nhật giao diện, Hàm chứa hành động được hiển thị 
import { useState, useEffect } from "react";

function Products() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 3000,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [name]);

  if (isPending) {
    return <h2>Đang tải dữ liệu......</h2>;
  }

  if (isError) {
    return <h2>{error.message} - Lỗi dữ liệu</h2>;
  }

  // Lọc sản phẩm
  let products = [...data];

  if (name !== "") {
    products = products.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Rating cao xuống thấp
  products.sort((a, b) => b.rating - a.rating);

  // Phân trang
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Nút yêu thích
  function handleWishlist(product) {
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

    const wishlist =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

    const existingProduct = wishlist.find(
      (item) => item.id === product.id
    );

    if (!existingProduct) {
      wishlist.push(product);

      localStorage.setItem(
        `wishlist_${user.id}`,
        JSON.stringify(wishlist)
      );

      window.alert("Đã thêm vào danh sách yêu thích");
    } else {
      window.alert("Sản phẩm đã có trong danh sách yêu thích");
    }
  }

  // Nút thêm giỏ hàng
  function handleAdd(product) {
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

    dispatch(addToCart(product));

    nav("/cart");
  }

  // Nút chuyển trang
  function handlePage(page) {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="category">
        <Link to="/category/beauty">
          Beauty
        </Link>

        <Link to="/category/fragrances">
          Fragrances
        </Link>

        <Link to="/category/furniture">
          Furniture
        </Link>

        <Link to="/category/groceries">
          Groceries
        </Link>

        <Link to="/category/home-decoration">
          Home Decoration
        </Link>
      </div>

      <div className="search-product">
        <input
          type="text"
          value={name}
          placeholder="Tìm kiếm sản phẩm..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="products">
        {currentProducts.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <p className="price">
                {product.price.toLocaleString("vi-VN")} $
              </p>

              <p className="rating">
                ⭐ {product.rating}
              </p>

              <div className="button-detail">
                <Link
                  to={`/product/${product.id}`}
                  className="btn-detail"
                >
                  Xem chi tiết
                </Link>
              </div>

              <div className="button-cart">
                <button
                  className="btn-cart"
                  onClick={() => handleAdd(product)}
                >
                  🛒 Thêm giỏ hàng
                </button>
              </div>

              <div className="button-wishlist">
                <button
                  className="btn-wishlist"
                  onClick={() => handleWishlist(product)}
                >
                  ♥️ Thêm Yêu thích
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {products.length === 0 && (
        <h2>Không tìm thấy sản phẩm</h2>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePage(currentPage - 1)}
          >
            « Trước
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePage(currentPage + 1)}
          >
            Sau »
          </button>
        </div>
      )}
    </>
  );
}

export default Products;
