import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const Layouts = () => {
    return (
        <div className=" font-serif">
            <Navber />
            <Outlet />
        </div>
    );
};

export default Layouts;