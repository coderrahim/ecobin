"use client"

import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { BsJustifyLeft } from "react-icons/bs";
import { useState } from "react";

const NavbarUI = ({ services }) => {

    // console.log(services);

    const [show, setShow] = useState(false);
    const [showData, setShowData] = useState(null);
    const [title, setTitle] = useState("");

    const handleShow = (sc) => {
        setShow(true);
        const s = services.filter(service => {
            return service.servicecategory === sc;
        })
        setShowData(s);
        setTitle(sc)
    }

    // console.log(showData);

    return (
        <div onMouseLeave={() => setShow(false)} className="w-full h-24 relative">
            <div className="h-24 flex items-center w-full bg-[#f7f7f7] shadow relative">
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-8 lg:px-0 relative">
                    <div className="w-fit">
                        {/* logo */}
                        <Link href="/">
                            <Image
                                src="/EcoBin.png"
                                height={0}
                                width={0}
                                className="w-48"
                                sizes="100vw"
                                alt="Logo"
                                priority
                            // style={{ height: "90%", width: "30%" }}
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="text-[#4e4e4e] hidden lg:flex items-center gap-8">
                            <li onMouseEnter={() => handleShow("Residential")}><Link href="#" className="flex items-center gap-1 text-lg font-bold">Residential <FaCaretDown></FaCaretDown></Link></li>
                            <li onMouseEnter={() => handleShow("Commercial")}><Link href="#" className="flex items-center gap-1 text-lg font-bold">Commercial <FaCaretDown></FaCaretDown></Link></li>
                            <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Company <FaCaretDown></FaCaretDown></Link></li>
                            <li><Link href="#" className="flex items-center gap-1 text-lg font-bold">Jobs</Link></li>
                            <li><button className="btn bg-green-600 text-white text-lg">Start Service</button></li>
                        </ul>
                        <div className="lg:hidden">
                            <button><BsJustifyLeft className="text-3xl"></BsJustifyLeft></button>
                        </div>
                    </div>
                </div>
            </div>
            <div onMouseLeave={() => setShow(false)} className={`h-[400px] w-full absolute top-24 bg-white shadow flex justify-center ${show ? "" : "hidden"}`}>
                <div className="w-full max-w-7xl h-full py-5 px-2">
                    <h1 className="font-bold text-[#055194] text-lg mb-5 mt-10">Our {title} Services</h1>
                    <div className="flex justify-between">
                        <div className="grid grid-cols-3 gap-8">
                            {
                                showData?.map((data, index) => {
                                    return <Link onClick={() => setShow(false)} key={index} href={`/servicedetails/${data._id}`}>
                                        <div className="flex">
                                            <div className="flex gap-4 items-start mt-8">
                                                <Image
                                                    src={data.serviceiconimage}
                                                    height={0}
                                                    width={0}
                                                    className="w-6 h-6"
                                                    sizes="100vw"
                                                    alt="Logo"
                                                    priority
                                                />
                                                <div>
                                                    <h1 className="font-bold">{data.servicename}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarUI;