import React, { useState } from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const TodoComponents = todos.map(todo => {
        <ToDo 
        key={todo.id}
        id={todo.id}
        todo={todo.task}
        handleRemove={remove}
        />
    })

    return (
        <div>
            <NewToDoForm createToDo={add}/>
            <ul>
                {TodoComponents}
            </ul>
        </div>
    )
}

export default TodoList;