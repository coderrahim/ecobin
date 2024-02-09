"use client"

import Link from "next/link";
import { BsClockFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineProfile } from "react-icons/ai";

const Header = () => {

    const { status } = useSession();
    // console.log(status);

    const router = useRouter();

    return (
        <div className="flex items-center w-full">
            <div className="w-full max-w-7xl mx-auto flex justify-end items-center">
                <ul className="text-[#006f51] py-2 flex items-center gap-3">
                    <li><div className="flex items-center gap-2 pr-3 border-r-2 border-[#d3d3d3]"><BsClockFill></BsClockFill>Scheudle</div></li>
                    <li><div className="flex items-center gap-2 pr-3 border-r-2 border-[#d3d3d3]"><BsEnvelopeFill></BsEnvelopeFill>Contact</div></li>

                    {
                        status === "loading" ? <span className="loading loading-ring loading-xs"></span> : (status === "authenticated" ?
                            <>
                                {/* <li><Link href="/userprofile"><div className="flex items-center gap-2"><BsFillPersonFill></BsFillPersonFill>My Profile</div></Link></li> */}
                                <li>
                                    <div className="dropdown dropdown-end">
                                        <button><div className="flex items-center gap-2"><BsFillPersonFill></BsFillPersonFill>My Profile</div></button>
                                        <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md border w-52 mt-2 text-black">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-semibold text-black">Administrator</p>
                                                    <Link href={"/admin"}><h1 className="font-bold text-[#006f51]">Dashboard</h1></Link>
                                                </div>
                                                <div className="divider w-full"></div>
                                            </div>
                                            <Link href={"/userprofile"}><button className="flex items-center gap-2 mb-5 font-bold"><AiOutlineProfile className="text-lg"></AiOutlineProfile> Go to profile</button></Link>
                                            <button onClick={() => signOut()} className="btn w-full bg-red-600 text-white">Logout</button>
                                        </div>
                                    </div>
                                </li>
                            </>
                            :
                            <li><Link href="/login"><div className="flex items-center gap-2"><BsFillPersonFill></BsFillPersonFill>Login | Signup</div></Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;