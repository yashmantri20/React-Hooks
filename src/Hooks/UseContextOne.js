import React, { useContext } from 'react'
import { UserContext } from './Auth'
import UseContextTwo from './UseContextTwo';

const UseContextOne = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <h1> Hi there, {user}</h1>
            {/* <UseContextTwo/> */}
        </div>
    )
}

export default UseContextOne
