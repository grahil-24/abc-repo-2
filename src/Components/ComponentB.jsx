import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../redux/inputSlice';


const ComponentB = () => {
    const dispatch = useDispatch();

    //sends action to redux store, which runs the reducer function to update the state
    //here we send setInputValue action with text input val as the payload
    const handleUpdate = (e) => {
        dispatch(setInputValue(e.target.value))
    };

    return (
        <div>
            <h3>Component B</h3>
            <input type = "text" placeholder="Enter Text" onChange={handleUpdate} />
        </div>
    );
}

export default ComponentB;

