import React,{useContext} from 'react'
import { UserContext } from './Auth'

const UseContextTwo = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Hello, {user}</h1>
        </div>
    )
}

export default UseContextTwo
