import Count from "./components/Count";
import List from "./components/List";
function App() {
  return (
    <>
      <Count/>
      <h2>DANH SÁCH THÀNH VIÊN</h2>
      <List id = "1" name ="Nguyễn Thành Phát"/>
      <List id = "2" name ="Nguyễn Thành Lộc"/>
      <List id = "3" name ="Nguyễn Thành Tấn"/>
    </>
  );
}

export default App;
