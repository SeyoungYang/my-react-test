import { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onSubmit?.(value);
    setText("");
  };

  return(
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
       />
       <button className="btn"  type="submit">추가</button>
    </form>
  );
}