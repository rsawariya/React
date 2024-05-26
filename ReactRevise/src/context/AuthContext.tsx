import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated:()=>{},
    user:"",
    setUser:()=>{}
});

export default AuthContext;

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState("");
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
