import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <h2> Bài Viết </h2>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> Trang chủ </Link>
          </li>
          <li>
            <Link to={"/detail"}> Bài Viết </Link>
          </li>
          <li>
            <Link to={"/search"}> Tìm Kiếm </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
