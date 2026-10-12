//Đăng nhập
export async function loginApi(user) {
  
  try {
    const response = await fetch(
      "https://dummyjson.com/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: user.username,
          password: user.password,
          expiresInMins: 30,
        }),

        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Đăng nhập thất bại");
    }

    const data = await response.json();

    console.log("Đã kết nối được API ✔️");

    return data;
  } catch (error) {
    console.log("Chưa kết nối được API ❌");

    throw error;
  }
}

