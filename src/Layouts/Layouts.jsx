import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Layouts = () => {
    return (
        <div className="font-serif">
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layouts;