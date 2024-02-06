import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

const UserSideLayout = ({ children }) => {
    return (
        <div>
            <div className="hidden lg:block"><Header></Header></div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserSideLayout;