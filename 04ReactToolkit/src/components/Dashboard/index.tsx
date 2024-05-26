import { Outlet } from "react-router-dom";
import { Navbar } from "../../helpers";
const Dashboard = () => {
    return <div className="flex flex-col justify-center bg-slate-600 h-screen">
        <Navbar />
        <div className="h-full m-8">
            <Outlet />
        </div>
    </div>
}

export default Dashboard;
