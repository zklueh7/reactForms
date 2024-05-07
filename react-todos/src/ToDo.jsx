import React from 'react';

function ToDo({id, handleRemove, task}) {
    const remove = () => handleRemove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default ToDo