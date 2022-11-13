import React, { createContext } from 'react';
export const UserContext = createContext()

const AuthContext = ({children}) => {
    return (
       <UserContext.Provider value={'this is for testing purpose'}>
        {children}
       </UserContext.Provider>
    );
};

export default AuthContext;