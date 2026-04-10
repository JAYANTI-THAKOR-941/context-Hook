import { createContext, useState } from "react";

// create context
export const AuthContext = createContext();


// to send data using provider
export const UserProvider = ({children})=>{
    const [user,setUser] = useState({
        name:"Jayanti Thakor",
        email:"jayantithakor941@gmail.com",
        role:"admin"
    });
    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}