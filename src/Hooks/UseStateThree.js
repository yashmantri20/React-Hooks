import React, { useState } from 'react'

function UseStateThree() {
    const [data,setData] = useState({name:'',age:''})

    return (
        <div>
        <h1>Data:</h1>
        <input onChange={e => setData({...data,name: e.target.value})}></input>
        <input onChange={e => setData({...data,age: e.target.value})}></input>

        <h2>Name is: {data.name}</h2>
        <h2>Age is: {data.age}</h2>

    </div>
    )
}

export default UseStateThree
