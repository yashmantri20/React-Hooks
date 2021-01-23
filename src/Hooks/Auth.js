import React, { createContext } from 'react'
import UseContextOne from './UseContextOne';

export const UserContext = createContext();

const Auth = () => {
    return (
        <UserContext.Provider value={"Yash"}>
            <h1>Use Context</h1>
            <UseContextOne/>
        </UserContext.Provider>
    )
}

export default Auth;
