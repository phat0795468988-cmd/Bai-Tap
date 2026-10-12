import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/auth";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Lấy API
  const loginMutation = useMutation({
    mutationFn: async (user) => {
      const users = JSON.parse(
        localStorage.getItem("registerUsers") || "[]"
      );

      const registerUser = users.find(
        (item) =>
          item.username.toLowerCase() === user.username.toLowerCase() &&
          item.password === user.password
      );
      if (registerUser) {
      return {
        ...registerUser,
        loginType: "register",
      };
    }

      const data = await loginApi(user);

      return {
        ...data,
        loginType: "api",
      };
    },

    onSuccess: (data) => {
      const user = {
        ...data,
        id: data.id,
        username: data.username,
      };

      localStorage.setItem("user", JSON.stringify(user));

      if (data.loginType === "register") {
        localStorage.setItem("accessToken", "user-register-token");
      } else {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      if (!localStorage.getItem(`cart_${user.id}`)) {
        localStorage.setItem(`cart_${user.id}`, JSON.stringify([]));
      }

      if (!localStorage.getItem(`wishlist_${user.id}`)) {
        localStorage.setItem(`wishlist_${user.id}`, JSON.stringify([]));
      }

      if (!localStorage.getItem(`orders_${user.id}`)) {
        localStorage.setItem(`orders_${user.id}`, JSON.stringify([]));
      }

      alert("Đăng nhập thành công!");

      navigate("/");
      window.location.reload();
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  //Nút đăng nhập
  function handleLogin(e) {
    e.preventDefault();

    if (!username.trim() || !password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

      loginMutation.mutate({
        username: username.trim(),
        password: password,
      });
  }

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mời bạn nhập Tên"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mời bạn nhập Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn-login"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending
            ? "Đang đăng nhập..."
            : "Đăng Nhập"}
        </button>
      </form>

      <Link to="/register">
        <h2>Hãy đăng ký</h2>
      </Link>
    </div>
  );
}

export default Login;