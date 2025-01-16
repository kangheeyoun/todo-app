import { useState } from "react";
import "./App.scss";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const App = () => {
  //id,text,checked
  const [todos,setTodos] = useState([
    {id:1, text:"리엑트의 기초 알아보기", checked:false},
    {id:2, text:"컴포넌트 스타일링 해보기", checked:true}
  ]);
  const handleInsert = (value)=>{
    const todo = {id: todos.lenght+1, text:value, checked:false};
    setTodos([...todos,todo]);
  }
  const handleChecked = (id)=>{
    setTodos(
      todos.map((list)=>{
        return list.id === id ? {...list, checked:!list.checked} : list
      })
    );
  }
  return (
    <div className="app">
      todo app 만들기
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onChecked={handleChecked} />
      </TodoTemplate>
    </div>
  );
};
export default App;