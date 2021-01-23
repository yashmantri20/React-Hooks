import React, { useContext, useState } from 'react'

function UseStateOne() {


    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Counter:</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default UseStateOne
