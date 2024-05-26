import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Suspense } from "react";
import Dashboard from "../components/Dashboard";
const PrivateRoute = () => {

    console.log("Inside Private route");

    const { isAuthenticated } = useAuth();

    if (isAuthenticated) return <Suspense fallback={<div>Redirecting...</div>}>
        <Dashboard />
    </Suspense>;

    return <Navigate to="/" />

}

export default PrivateRoute;