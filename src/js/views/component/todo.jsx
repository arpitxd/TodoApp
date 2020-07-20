import React, { useState} from 'react';
import { setDataToLocalStorge, getDataFromLocalStorage } from 'basePath/views/component/utilities';

export default function Todo (props) {
    
    const [error, setError] = useState('');
    const [selectedTodoList, udpateSelectedTodoList] = useState(0);
    const [, updateState] = useState();
    let todoList = getDataFromLocalStorage('todoName');
    const [inputValue, changeValue] = useState('');
    const onChange = (e) => {
        changeValue(e.target.value);
    }
    const updateSelectedTodoList = (e) => {

       if(e.target.checked){
        udpateSelectedTodoList(selectedTodoList+1);
       } else {
        udpateSelectedTodoList(selectedTodoList-1);
       }
    }
    const addTodo = () => {
        let todoValue = document.getElementById('id_todo_add').value;
        if(!todoList){
            todoList = [];
        }
        if(todoValue){
            if(!todoList.includes(todoValue)){
                todoList.push(todoValue);
                setDataToLocalStorge('todoName', todoList);
                return '';
            } else{
                return 'Already Present';
            }
        } else {
            return 'Field is Required';
        }
    };

    const handleAdd = () => {
        let error = addTodo();
        if(!error){
            changeValue('');
        }
        setError(error);
    }
    return (
        <React.Fragment>
            <ul className="add_form">
                <li>
                    <input type="text" placeholder="Enter your Todo List" id="id_todo_add" value={inputValue} onChange={(e) => onChange(e)}/>
                    
                </li>
                <li>
                    <button type="button" onClick={handleAdd}>Add</button>
                </li>
            </ul>
            {error && (
                <label className="error">
                    {error}
                </label>
            )}
            {todoList && (
                <React.Fragment>
                    <strong>Total todos remaining: {selectedTodoList} out of {todoList.length}.</strong>
                    <ul className="todo_list">
                        {todoList.map((item,index) => (
                            <li key={index}>
                                
                                <label htmlFor={index}><input type="checkbox" id={index} onClick={(e) => updateSelectedTodoList(e)}/><strong>{item}</strong></label>

                            </li>
                        ))}
                    </ul>
                    </React.Fragment>
            )}
        </React.Fragment>
    );
}