import { useEffect } from "react";
import { useState } from "react";
import { getContent } from "../Data/Content";
import { Link } from "react-router-dom";

function Content() {
  const [document, setdocument] = useState([]);

  useEffect(() => {
    async function Get() {
      const data = await getContent();
      setdocument(data);
    }
    Get();
  }, []);

  return (
    <div className="content">
      {document.map((document) => {
        return (
          <div key={document.id}>
            <h2>userId: {document.userId}</h2>
            <h2>id: {document.id}</h2>
            <h2>title: {document.title}</h2>
            <h2>body: {document.body}</h2>

            <Link to={`/detail/${document.id}`}> Xem chi tiết </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Content;
