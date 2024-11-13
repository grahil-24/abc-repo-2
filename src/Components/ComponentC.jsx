import {useSelector} from "react-redux";
import React from 'react';

const ComponentC = () => {
    // Use useSelector to access the current input value from Redux store
    const value = useSelector((state) => state.input.value)

    return (
        <div>
            <h3>Component C</h3>
            <p>Value of textbox: {value}</p>
        </div>
    );
}

export default ComponentC;
