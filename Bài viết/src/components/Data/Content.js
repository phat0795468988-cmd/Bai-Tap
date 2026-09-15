import axios from "axios";

const API = ` https://jsonplaceholder.typicode.com`;

export async function getContent() {
  try {
    const content = await axios.get(`${API}/posts/`);
    return content.data;
  } catch (error) {
    return console.log("Chưa thể kết nối với API");
  }
}

export async function getDetail(postId) {
  try {
    const detail = await axios.get(`${API}/posts/${postId}`);
    return detail.data;
  } catch (error) {
    return console.log("Chưa thể kết nối với API");
  }
}
export async function getComment(postId) {
  try {
    const comment = await axios.get(`${API}/posts/${postId}/comments/`);
    return comment.data;
  } catch (error) {
      console.log("Chưa thể kết nối với API");
      return [] ;
  }
}
