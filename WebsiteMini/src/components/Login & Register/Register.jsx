
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Nút đăng ký
  function handleRegister(e) {
    e.preventDefault();


    //Không được bỏ trống
    if (!username.trim() || !password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không giống nhau");
      return;
    }

    //Dò xem có bị trùng tên tk khác không
    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];

    const existingUser = users.find(
      (user) => user.username.toLowerCase() === username.trim().toLowerCase()
    );

    if (existingUser) {
      alert("Tên đăng nhập đã tồn tại");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: username.trim(),
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("registerUsers", JSON.stringify(users));

    alert("Đăng ký tài khoản thành công!");

    setUsername("");
    setPassword("");
    setConfirmPassword("");

    navigate("/login");
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>📝 Đăng ký</h1>

        <p className="register-title">Tạo tài khoản mới</p>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="register-btn">
            Đăng ký
          </button>
        </form>

        <div className="register-login">
          <span>Đã có tài khoản?</span>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;