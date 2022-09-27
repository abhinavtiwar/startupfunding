import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children, currentStartup}) => {

    
    const [startupLoggedin, setStartupLoggedin] = useState(Boolean(currentStartup));

    return <UserContext.Provider value={{
        startupLoggedin,
        setStartupLoggedin
    }} >
        {children}
    </UserContext.Provider>
}