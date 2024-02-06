"use client"

import Link from "next/link";
import { BsClockFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Header = () => {

    const { status } = useSession();
    console.log(status);

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
                                <li><button onClick={() => signOut()}><div className="flex items-center gap-2"><BsFillPersonFill></BsFillPersonFill>Logout</div></button></li>
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