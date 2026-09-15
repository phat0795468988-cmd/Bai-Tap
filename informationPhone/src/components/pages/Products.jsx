import products from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <h2>{product.price.toLocaleString("vi-VN")} VNĐ</h2>

            <Link to={`/products/${product.id}`} className="product-button">
              Chi tiết sản phẩm
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
