import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import TodoForm from "./TodoForm";
import DisplayData from "./DisplayData";
const NewTodo = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [edit, setEdit] = useState(null);
  const [toggle, setToggle] = useState(true);

  function validate_form() {
    let status = true;

    if (!name) {
      alert("*Name is mandatary");
      status = false;
    }
    if (!mobile) {
      alert("*Mobile is mandatary");
      status = false;
    }

    if (
      !email ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      alert("*Email is mandatary");
      status = false;
    }

    return status;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate_form()) return;
    if (!toggle) {
      const arr = todoItem.map((res) => {
        if (res.id === edit) {
          return { name, email, mobile };
        }
        return res;
      });
      setTodoItem(arr);
      setToggle(true);
      setName("");
      setMobile("");
      setEmail("");
    } else {
      setTodoItem([...todoItem, { id: uuidV4(), name, mobile, email }]);
      setName("");
      setMobile("");
      setEmail("");
    }
  };
  const deleteTodo = (id) => {
    let del = todoItem.filter((res) => res.id !== id);
    setTodoItem(del);
  };
  const filteredTodo = todoItem.filter((res) => {
    return res.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const editTodo = (id) => {
    const findTodo = todoItem.find((res) => res.id === id);
    setToggle(false);
    setName(findTodo.name);
    setMobile(findTodo.mobile);
    setEmail(findTodo.email);
    setEdit(id);
  };
  return (
    <>
      <TodoForm
        name={name}
        email={email}
        mobile={mobile}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DisplayData
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          search={search}
          setSearch={setSearch}
          filteredTodo={filteredTodo}
        />
      </div>
    </>
  );
};

export default NewTodo;
