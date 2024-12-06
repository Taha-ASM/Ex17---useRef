import React from 'react';
import { useRef } from 'react';

export default function Navbar() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <button onClick={handleClick}>Click me!</button>
                <input type="text" ref={inputRef} />
            </div>
        </div>
    );
}
