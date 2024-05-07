import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({createBox}) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createBox({...formData, id: uuid()});
        setFormData({height: "", width: "", backgroundColor: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>New Box Form</h1>
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            /> <br/>
    
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            /> <br/>
    
            <label htmlFor="backgroundColor">Background Color: </label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            /> <br/>
            <button>Add a new box!</button>
    
        </form>
    )
    
    
}


export default NewBoxForm;