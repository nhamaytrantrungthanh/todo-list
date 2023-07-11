import { useState } from "react";

const AddNewTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      title: todoTitle,
      isCompleted: false,
    };

    props.onAddTodo(newTodo);
    setTodoTitle("");
  };

  return (
    <form className="add-todo" onSubmit={onSubmitHandler}>
      <input className="search-form" type="text" placeholder="Nhập vào đây..." value={todoTitle} onChange={onChangeHandler} />
      <button className="button-form"type="submit">Add new todo</button>
    </form>
  );
};

export default AddNewTodo;
