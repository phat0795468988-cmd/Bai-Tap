import { Link } from "react-router-dom";
import "./main.css";

function PageMain() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-small">
            🛍️ CHÀO MỪNG ĐẾN VỚI PT STORE
          </span>

          <h1>
            Mua sắm dễ dàng
            <br />
            <span>Giá tốt mỗi ngày</span>
          </h1>

          <p>
            Khám phá hàng trăm sản phẩm chất lượng
            với mức giá hấp dẫn và giao hàng nhanh chóng.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">
              Mua sắm ngay
            </Link>

            <Link to="/products" className="btn-secondary">
              Xem sản phẩm
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-circle">
            🛒
          </div>

          <div className="sale-box">
            <strong>SALE</strong>
            <span>50%</span>
          </div>
        </div>
      </section>


      {/* CATEGORY
      <section className="category-section">

        <div className="section-title">
          <span>KHÁM PHÁ</span>
          <h2>Danh mục sản phẩm</h2>
          <p>
            Lựa chọn sản phẩm phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="category-list">

          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Điện thoại</h3>
            <p>Sản phẩm công nghệ</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>Laptop</h3>
            <p>Laptop chính hãng</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🎧</div>
            <h3>Phụ kiện</h3>
            <p>Phụ kiện điện tử</p>
          </div>

          <div className="category-card">
            <div className="category-icon">⌚</div>
            <h3>Đồng hồ</h3>
            <p>Phong cách hiện đại</p>
          </div>

        </div>

      </section> */}


  

      {/* CTA */}
      <section className="home-cta">

        <div>
          <h2>
            Sẵn sàng bắt đầu mua sắm?
          </h2>

          <p>
            Khám phá những sản phẩm tuyệt vời
            đang chờ bạn.
          </p>

          <Link to="/products" className="cta-button">
            Khám phá sản phẩm →
          </Link>
        </div>

      </section>

    </div>
  );
}

export default PageMain;