import React, { useEffect, useState } from 'react'

function UseEffectTwo() {
    const [todo, setTodo] = useState([]);


    useEffect(() => {
        async function fetchdata() {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos');
            setTodo(await data.json());
        }
        fetchdata();
    },[])  

    return (
        <div>
            {todo.slice(0,5).map( val => <h6 key={val.id}>{val.title}</h6>)}
        </div>
    )
}

export default UseEffectTwo
