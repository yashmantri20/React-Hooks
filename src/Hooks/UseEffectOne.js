import React, { useState,useEffect } from 'react'

function UseEffectOne() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default UseEffectOne
