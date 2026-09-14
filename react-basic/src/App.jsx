import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import User from "./components/User";

function App() {
  const [isDark, setIsDark] = useState("")
  const [isOpen, setIsOpen] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const [student, setStudent] = useState("");
  const [students, setStudents] = useState([]);



  return(
    <>
    <ThemeToggle isDark = {isDark} setIsDark = { setIsDark}/>
    <Accordion isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Card quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}/>
    <User student={student} setStudent={setStudent} students={students} setStudents={setStudents}/>
    </>
  )
}
export default App;