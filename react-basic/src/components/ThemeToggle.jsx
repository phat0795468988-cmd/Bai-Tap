function ThemeToggle({isDark, setIsDark}){
    function ChangeColor(){
      setIsDark(!isDark)
    }
    return(
      <div>
        <h2>Đổi trạng thái màu</h2>
        <p>{isDark ? "Dark" : "Light"}</p>
        <button onClick={ChangeColor}>Đổi màu</button>
      </div>
    )

}
export default ThemeToggle