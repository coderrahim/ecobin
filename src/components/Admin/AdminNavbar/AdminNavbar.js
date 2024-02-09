import { MdMenu } from "react-icons/md";

const AdminNavbar = ({ setIsOpen, isOpenBtn, setIsOpenBtn }) => {

    return (
        <div className={`w-full h-20 bg-white shadow-md flex xl:justify-end items-center px-8 ${!isOpenBtn ? "justify-end" : "justify-between"}`}>
            {
                isOpenBtn ? <button onClick={() => {
                    setIsOpen(true);
                    setIsOpenBtn(false);
                }} className="btn btn-square xl:hidden"><MdMenu className="text-3xl"></MdMenu></button> : ""
            }
        </div>
    );
};

export default AdminNavbar;