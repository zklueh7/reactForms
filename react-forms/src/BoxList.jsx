import React, { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box'

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    }
    
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box 
        key={box.id}
        id={box.id}
        handleRemove={remove}
        height={box.height}
        width={box.width}
        backgroundColor={box.backgroundColor}/>
    ));

    return (
        <div>
            <NewBoxForm createBox={add}/>
            {boxComponents}
        </div>
    )
}

export default BoxList