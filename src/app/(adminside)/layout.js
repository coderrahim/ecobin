"use client"

import Link from 'next/link';
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation';
import AdminNavbar from '@/components/Admin/AdminNavbar/AdminNavbar';
import Logo from '@/components/Admin/Logo/Logo';
import { TbBrandBooking } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const AdminDashboardLayout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenBtn, setIsOpenBtn] = useState(true);

    const path = usePathname();

    // Product part show or not
    const [showServicesPart, setShowServicesPart] = useState(true);
    const handleServicesShowing = () => {
        setShowServicesPart(!showServicesPart);
    }

    // Category part show or not
    const [showCategoryPart, setShowCategoryPart] = useState(true);
    const handleCategoryShowing = () => {
        setShowCategoryPart(!showCategoryPart);
    }

    return (
        <div className="h-screen overflow-hidden flex relative">
            <div className={`${isOpen ? "" : "hidden xl:flex"}  w-72 bg-[#232b35] h-full flex absolute xl:relative z-50`}>
                <div className="h-full w-full flex flex-col">
                    <div className="h-20 px-5 bg-[#181d24] flex justify-between items-center">
                        <Logo></Logo>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsOpenBtn(true);
                            }} className="btn btn-square xl:hidden"><ImCancelCircle className="text-3xl"></ImCancelCircle>
                        </button>
                    </div>
                    <div className="flex-grow mb-4 flex flex-col gap-5 justify-between text-white overflow-hidden">

                        {/* Admin main section start */}
                        <div className="m-5 overflow-y-auto">
                            {/* Dashboard */}
                            <Link href={"/admin"}><button className={`flex items-center gap-2 mb-2 hover:bg-[#181d24] w-full px-2 py-3 rounded-md ${path === "/admin" ? "bg-[#181d24]" : ""}`}><LuLayoutDashboard></LuLayoutDashboard>Dashboard</button></Link>

                            {/* Services */}
                            <button onClick={handleServicesShowing} className={`flex justify-between items-center gap-3 mb-2 hover:bg-[#181d24] w-full px-2 py-3 rounded-md `}><div className="flex items-center gap-2"><GrServices></GrServices>Services</div><IoIosArrowForward></IoIosArrowForward></button>
                            <div className={`ml-6 space-y-2 mb-2 ${showServicesPart ? "" : "hidden"}`}>
                                <Link href={"/admin/addservice"}>
                                    <li className={`px-2 py-2 rounded-md ${path === "/admin/addservice" ? "bg-[#181d24]" : ""}`}>Add Service</li>
                                </Link>
                                <Link href={"/admin/alladdedservices"}>
                                    <li className={`px-2 py-2 rounded-md ${path === "/admin/alladdedservices" ? "bg-[#181d24]" : ""}`}>All Added Services</li>
                                </Link>
                            </div>

                            {/* Booking */}
                            <Link href={"/admin/userbooking"}><button className={`flex items-center gap-2 mb-2 hover:bg-[#181d24] w-full px-2 py-3 rounded-md ${path === "/admin/userbooking" ? "bg-[#181d24]" : ""}`}><TbBrandBooking></TbBrandBooking>User Booking</button></Link>

                            {/* Users */}
                            <Link href={"/admin/manageusers"}><button className={`flex items-center gap-2 mb-2 hover:bg-[#181d24] w-full px-2 py-3 rounded-md ${path === "/admin/manageusers" ? "bg-[#181d24]" : ""}`}><FaUsers></FaUsers>Manage Users</button></Link>

                        </div>
                        <div className="border-t-2 px-5 pt-5">
                            <Link href={"/"}><button className="flex items-center gap-2 mb-2 bg-[#181d24] w-full px-2 py-3 rounded-md"><IoMdHome></IoMdHome>Home</button></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar setIsOpen={setIsOpen} isOpenBtn={isOpenBtn} setIsOpenBtn={setIsOpenBtn}></AdminNavbar>
                <div className="px-5 pt-7 flex-grow bg-[#f8f7f6] overflow-y-auto w-screen lg:w-full">{children}</div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;