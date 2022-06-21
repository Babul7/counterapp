import React, { useState } from 'react'
import './style.css'

function Counter() {

    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)} className='button'>Add</button>
            <button onClick={() => (number > 0 ? setNumber(number - 1) : setNumber(0))} className='button'>Sub</button>
            <button onClick={() => setNumber(0)} className='button'>Reset</button>
        </div>
    )
}

export default Counter