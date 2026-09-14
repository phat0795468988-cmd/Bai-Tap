function Accordion({ isOpen, setIsOpen }) {
  function Change() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <h2>React là gì </h2>
      <button onClick={Change}>
        <span>{isOpen ? "Mở" : "Đóng"}</span>
        {isOpen && (
          <p>
            React là thư viện JavaScript dùng để xây dựng giao diện người dùng.
          </p>
        )}
      </button>
    </div>
  );
}

export default Accordion;
