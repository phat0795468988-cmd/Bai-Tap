import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getComment } from "../Data/Content";

function ContentDetail() {
  const { id } = useParams();

  const [userId, setuserId] = useState(null);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    async function getcontent() {
      const data = await getDetail(id);
      setuserId(data);
    }

    getcontent();
  }, [id]);

  useEffect(() => {
    async function getcomments() {
      const data = await getComment(id);
      setComment(data);
    }

    getcomments();
  }, [id]);

  return (
    <>
      <div className="information">
        {userId && (
          <div className="detail-card">
            <div className="detail-box">
              <span>User ID</span>
              <h2>{userId.userId}</h2>
            </div>

            <div className="detail-box">
              <span>Post ID</span>
              <h2>{userId.id}</h2>
            </div>

            <div className="detail-box title-box">
              <span>Title</span>
              <h2>{userId.title}</h2>
            </div>

            <div className="detail-box body-box">
              <span>Content</span>
              <p>{userId.body}</p>
            </div>
          </div>
        )}
      </div>

      <div className="comments">
        <div className="comments-title">
          <h1>Comments</h1>
          <span>{comments.length} bình luận</span>
        </div>

        <div className="comment-list">
          {comments.map((comment) => {
            return (
              <div className="comment-card" key={comment.id}>
                <div className="comment-box">
                  <span>Post ID</span>
                  <h2>{comment.postId}</h2>
                </div>

                <div className="comment-box">
                  <span>Comment ID</span>
                  <h2>{comment.id}</h2>
                </div>

                <div className="comment-box">
                  <span>Name</span>
                  <h2>{comment.name}</h2>
                </div>

                <div className="comment-box">
                  <span>Email</span>
                  <p>{comment.email}</p>
                </div>

                <div className="comment-box body-box">
                  <span>Comment</span>
                  <p>{comment.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ContentDetail;
