import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";


const Root = () => {
    return (
        <div className="px-20">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;