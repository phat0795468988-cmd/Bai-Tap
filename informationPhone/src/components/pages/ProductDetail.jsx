import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((product) => {
    return product.id === Number(id);
  });

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Không tìm thấy sản phẩm</h1>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-card">

        <div className="product-detail-header">
          <h1>{product.name}</h1>

          <p className="product-price">
            {product.price.toLocaleString("vi-VN")} VNĐ
          </p>

          <p className="product-description">
            {product.description}
          </p>
        </div>

        <div className="product-info">

          <div className="info-item">
            <span>Thương hiệu</span>
            <strong>{product.brand}</strong>
          </div>

          <div className="info-item">
            <span>Màn hình</span>
            <strong>{product.screen}</strong>
          </div>

          <div className="info-item">
            <span>RAM</span>
            <strong>{product.ram}</strong>
          </div>

          <div className="info-item">
            <span>Bộ nhớ</span>
            <strong>{product.storage}</strong>
          </div>

          <div className="info-item">
            <span>Camera</span>
            <strong>{product.camera}</strong>
          </div>

          <div className="info-item">
            <span>Pin</span>
            <strong>{product.battery}</strong>
          </div>

          <div className="info-item">
            <span>Chip</span>
            <strong>{product.chip}</strong>
          </div>

        </div>

        <button className="buy-button">
          Mua ngay
        </button>

      </div>
    </div>
  );
}

export default ProductDetail;