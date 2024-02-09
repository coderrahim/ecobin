import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { BsJustifyLeft } from "react-icons/bs";
import NavbarUI from "./NavbarUI";

const getServices = async () => {
    try {
        const res = await fetch("https://ecobinn-ten.vercel.app/api/svc", {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("failed to fetch services");
        }
        return res.json();
    } catch (error) {
        console.log("error loading services ", error);
    }
}

const Navbar = async () => {

    const { services } = await getServices();

    return <NavbarUI services={services}></NavbarUI>
};

export default Navbar;