import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function NewToDoForm({ createToDo }) {
    const [formData, setFormData] = useState({
        todo: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        createToDo({...formData, id: uuid()});
        setFormData({todo: ""});
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>New To Do Form</h1>
            <label htmlFor="todo">To Do:</label>
            <input
            id="todo"
            name="todo"
            value={formData.todo}
            onChange={handleChange}
            />
            <button>Submit!</button>
        </form>
    )
}

export default NewToDoForm;