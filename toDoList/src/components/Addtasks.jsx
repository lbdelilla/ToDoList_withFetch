import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm.jsx";

const AddTasks = () => {
  const [toDoList, setToDoList] = useState([]);
  

  const GetApiToDo = async () => {
    await fetch("https://assets.breatheco.de/apis/fake/todos/user/lbdelilla", {
      method: "GET",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setToDoList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetApiToDo();
  }, []);

  const PutApiToDo = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    await fetch("https://assets.breatheco.de/apis/fake/todos/user/lbdelilla", {
      method: "PUT",
      body: JSON.stringify(toDoList),
      headers: myHeaders,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
 

  useEffect(() => {
    toDoList.length ? PutApiToDo() : null;
  }, [toDoList]);

  function AddNewTask(inputValue) {
    setToDoList([
      ...toDoList,
      { label: inputValue, done: false, id: toDoList.length},
    ]);
  }

  function deleteTask() {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    fetch("https://assets.breatheco.de/apis/fake/todos/user/lbdelilla", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }
 
  return (
    <div className="taskManager text-center">
      <div className="otrodiv">
        <ToDoForm AddNewTask={AddNewTask} />
        <div className="content">
          <ul>
            {toDoList.map((item) => (
              <li className="sen" key={item.id}>
                {item.label}{" "}
                <i
                  onClick={(e) => deleteTask(item.id)}
                  className="fa-solid fa-xmark"
                ></i>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
