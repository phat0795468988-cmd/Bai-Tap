const API = `https://jsonplaceholder.typicode.com`;

export async function getContent() {
  const Content = await axios.get(`${API}/posts`);
  return Content.data;
}

export async function getDetail(postId) {
  const Detail = await axios.get(`${API}/posts/${postId}`);
  return Detail.data;
}

export async function getComment(postId) {
  const Comment = await axios.get(`${API}/posts/${postId}/comment`);
  return Comment.data;
}
