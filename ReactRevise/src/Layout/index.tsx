import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading....</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}
export default Layout;