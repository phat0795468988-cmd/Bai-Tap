import { useEffect, useState, useRef, useMemo } from "react";
import { getContent } from "../Data/Content";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState([]);
  const input = useRef();

  useEffect(() => {
    async function getcontent() {
      const data = await getContent();
      setContents(data);
    }

    getcontent();
  }, []);

  const result = useMemo(() => {
    return contents.filter((content) => {
      return content.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [contents, search]);

  return (
    <>
      <div className="input">
        <input
          ref={input}
          placeholder="Mời bạn nhập"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => input.current.focus()}>Click me</button>
      </div>

      <div className="search">
        {result.map((content) => {
          return (
            <div key={content.id}>
              <h2>userId: {content.userId}</h2>
              <h2>id: {content.id}</h2>
              <h2>title: {content.title}</h2>
              <h2>body: {content.body}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchPage;
