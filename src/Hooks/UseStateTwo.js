import React, { useState } from 'react'

function UseStateTwo() {

    const [names, setNames] = useState([]);
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const appendData = () => {
        console.log('ok')
        setNames([...names,
        {
            id: names.length,
            value: data,
        },
        ]);
    }


    return (
        <div>
            <h1>Names:</h1>
            <ul>
            {names.map(name => <li key={name.id}>{name.value}</li>)}
            </ul>
            <input onChange={handleChange}></input>
            <button onClick={appendData}>Click Me</button>
        </div>
    )
}

export default UseStateTwo
