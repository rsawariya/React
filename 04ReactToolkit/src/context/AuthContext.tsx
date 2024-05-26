import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    isAuthenticated: false,
    user: "",
}

const AuthContext = createContext({
    ...initialState,
    setIsAuthenticated: () => { },
    setUser: () => { }
});

export default AuthContext;

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        const { isAuthenticated, user } = JSON.parse(localStorage.getItem("auth")) ?? initialState;
        if (isAuthenticated) setIsAuthenticated(true); setUser(user);
    }, []);

    useEffect(() => {
        if (isAuthenticated) localStorage.setItem("auth", JSON.stringify({ isAuthenticated, user }));
    }, [isAuthenticated, user])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
