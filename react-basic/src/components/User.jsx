function User({ student, setStudent, students, setStudents }) {
  function Array() {
    if (student.trim() === "") {
      return;
    }
    setStudents([...students, student]);
    setStudent("");
  }
  return (
    <div>
      <h1>DANH SÁCH CÔNG VIỆC</h1>
      <input
        placeholder="Nhập công việc"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      ></input>

      <button onClick={Array}>Thêm</button>
      <ul>
        {students.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default User