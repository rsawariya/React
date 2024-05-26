import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout";
import { lazy } from "react";
import { PrivateRoute } from "./helpers";
import CounterUsingRedux from "./apps/counterUsingRedux";
import AppList from "./components/Dashboard/AppList";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const GitHub = lazy(() => import("./components/Github"))
const Fallback = lazy(() => import("./components/Fallback"));

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
        <Route path="/dashboard" element={<PrivateRoute />} >
            <Route path="counter-app" element={<CounterUsingRedux />}> </Route>
            <Route path="" element={<AppList />}> </Route>
        </Route>
    </>
))

export default Router