import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./detail.css";

function Detail() {
  const { id } = useParams();

  // Lấy thông tin người dùng đang đăng nhập
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const userName =
    `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
    user.username ||
    "Khách";

  // Lấy đánh giá chung từ Local Storage
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("product_reviews")) || {};
  });

  // Lưu nội dung bình luận và số sao người dùng đang chọn
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // Lấy dữ liệu sản phẩm từ API
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["detail", id],

    queryFn: async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      if (!response.ok) {
        throw new Error("Không thể lấy sản phẩm");
      }

      return await response.json();
    },

    staleTime: 1000,
  });

  // Nút gửi đánh giá và lưu chung vào Local Storage
  function handleComment() {
    if (rating === 0) {
      alert("Vui lòng chọn số sao đánh giá");
      return;
    }

    if (!comment.trim()) {
      alert("Vui lòng nhập bình luận");
      return;
    }

    const newReview = {
      id: Date.now(),
      username: userName,
      rating: rating,
      comment: comment.trim(),
      createdAt: new Date().toLocaleString("vi-VN"),
    };

    const updatedReviews = {
      ...reviews,
      [id]: [...(reviews[id] || []), newReview],
    };

    localStorage.setItem("product_reviews", JSON.stringify(updatedReviews));

    setReviews(updatedReviews);
    setComment("");
    setRating(0);

    alert("Đã gửi đánh giá thành công");
  }

  // Kiểm tra trạng thái tải dữ liệu
  if (isPending) {
    return <h2>Đang tải dữ liệu.....</h2>;
  }

  if (isError) {
    return <h2>{error.message} - Lỗi dữ liệu</h2>;
  }

  // Lấy danh sách đánh giá của sản phẩm hiện tại
  const productReviews = reviews[id] || [];

  // Tính điểm đánh giá trung bình
  let averageRating = 0;

  if (productReviews.length > 0) {
    const totalRating = productReviews.reduce(
      (total, review) => total + review.rating,
      0,
    );

    averageRating = (totalRating / productReviews.length).toFixed(1);
  }

  return (
    <>
      {/* Nút quay lại */}
      <Link to="/products">
        <button className="detail-back">Quay lại</button>
      </Link>

      {/* Thông tin chi tiết sản phẩm */}
      <div className="detail-products">
        <div className="detail-item">
          <img src={data.thumbnail} alt={data.title} />

          <div>
            <h3>{data.title}</h3>

            <p>Giá: {data.price.toLocaleString("vi-VN")} $</p>

            <p>Số lượng: {data.stock}</p>

            <p>Đánh giá gốc: ⭐ {data.rating}</p>

            <p>Thương hiệu: {data.brand}</p>

            <p>Danh mục: {data.category}</p>

            <p>Mô tả: {data.description}</p>
          </div>
        </div>
      </div>

      {/* Khu vực đánh giá và bình luận */}
      <div className="detail-review">
        <h2>Đánh giá sản phẩm</h2>

        {/* Hiển thị điểm trung bình của người dùng */}
        <div className="detail-review-average">
          <span>⭐ {averageRating || "Chưa có"}</span>

          <p>{productReviews.length} lượt đánh giá</p>
        </div>

        {/* Hiển thị tên người dùng đang đánh giá */}
        <p className="detail-review-current-user">
          Người đánh giá: <strong>{userName}</strong>
        </p>

        {/* Chọn số sao đánh giá */}
        <h3>Chọn số sao của bạn</h3>

        <div className="detail-review-stars">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <button
                type="button"
                key={star}
                className={
                  star <= rating ? "detail-star active" : "detail-star"
                }
                onClick={() => setRating(star)}
              >
                ★
              </button>
            );
          })}
        </div>

        {/* Nhập nội dung bình luận */}
        <textarea
          className="detail-review-input"
          placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {/* Nút gửi bình luận */}
        <button
          type="button"
          className="detail-review-submit"
          onClick={handleComment}
        >
          💬 Gửi đánh giá
        </button>

        {/* Danh sách bình luận đã lưu */}
        <div className="detail-review-list">
          <h3>Bình luận ({productReviews.length})</h3>

          {productReviews.length === 0 && (
            <p>Chưa có đánh giá nào. Hãy là người đầu tiên!</p>
          )}

          {[...productReviews].reverse().map((review) => {
            return (
              <div className="detail-review-item" key={review.id}>
                {/* Hiển thị tên người dùng */}
                <h4 className="detail-review-username">
                  👤 {review.username || "Người dùng"}
                </h4>

                {/* Hiển thị số sao của từng bình luận */}
                <div className="detail-review-item-stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Nội dung bình luận */}
                <p>{review.comment}</p>

                {/* Thời gian bình luận */}
                <small>{review.createdAt}</small>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Detail;
