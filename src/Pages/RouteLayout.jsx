import { Outlet} from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";





function RouteLayout() {


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default RouteLayout;