import React, { useState } from "react";

const ToDoForm = ({AddNewTask}) => {
 
    const [inputValue, setInputValue] = useState("");

    
    const HandleClick = (e) => {
        e.preventDefault();
        AddNewTask(inputValue);
        setInputValue("");
    };

    
    return (
    <div className="form text-center">  
        <form >
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={HandleClick}className="button-1" role="button" type="submit"> Add </button>
        </form>
    </div>
)}

export default ToDoForm;