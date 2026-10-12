import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2>🤗PT STORE</h2>
          <p>
            Cửa hàng bán sản phẩm online.
            Đa dạng sản phẩm, giá tốt và giao hàng nhanh.
          </p>
        </div>

        <div className="footer-column">
          <h3>Hỗ trợ</h3>
          <a href="#">Chính sách mua hàng</a>
          <a href="#">Chính sách đổi trả</a>
          <a href="#">Chính sách bảo hành</a>
          <a href="#">Liên hệ</a>
        </div>

        <div className="footer-column">
          <h3>Liên hệ</h3>
          <p>📍 TP. Hồ Chí Minh</p>
          <p>📞 0123 456 789</p>
          <p>✉️ shop@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 🤗PT STORE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;