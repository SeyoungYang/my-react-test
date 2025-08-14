import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  const [lastAdded, setLastAdded] = useState("");

  const handleAdd = (value) => {
    setLastAdded(value);
    console.log(`할 일 "${value}"이(가) 추가되었습니다.`);
  };

  return (
    <main className="container">
      <h1>To-Do List</h1>
      <p>다음 단계에서 목록을 만들 예정입니다.</p>

      <TodoForm onSubmit={handleAdd} />

      {lastAdded && (
        <p style={{marginTop:12, color:'#556'}}>
          마지막으로 입력한 항목 : <strong>{lastAdded}</strong> 
        </p>
      )}
    </main>
  );
}

export default App;
