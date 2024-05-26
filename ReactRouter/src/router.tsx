import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout";
import { lazy } from "react";
import PrivateRoute from "./components/PrivateRoute";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const GitHub = lazy(() => import("./components/Github"))
const Fallback = lazy(() => import("./components/Fallback"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const Router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about/:params" element={<About />} />
            <Route path="github" element={<GitHub />} loader={async () => {
                let response;
                try {
                    response = await fetch("https://api.github.com/users/rsawariya");
                } catch (error) {
                    console.log(error);
                }
                return response?.json();
            }} />
            <Route path="*" element={<Fallback />} />
        </Route>
        <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
    </>
))

export default Router