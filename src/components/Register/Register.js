"use client"

import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const imgbbKey = process.env.NEXT_PUBLIC_VITE_imagebb_key;
    const imgbbAPI = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

    const router = useRouter();

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated' && session.user.userstatus === "user") {
            router.replace('/') // Redirect to dashboard after successful sign-in
        }
        else if (status === 'authenticated' && session.user.userstatus === "admin") {
            router.replace("/admin")
        }
    }, [status, router, session?.user.userstatus])

    const handleUserRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const imagefile = { image: form.profilepicture.files[0] };
        const ress = await axios.post(imgbbAPI, imagefile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        if (ress.data.success) {
            const profilepicture = ress.data.data.display_url.toString();
            // console.log(fullname, email, password, profilepicture);
            const user = { fullname, email, password, profilepicture, userstatus: "user" }
            const res = await axios.post("/api/register", user);
            if (res.status === 200 || res.status === 201) {
                console.log("user added successfully");
                form.reset();
                router.push("/login");
            }
        }
    }

    return (
        <div className="max-w-4xl mx-auto flex justify-center mt-6 h-[700px] shadow">
            <div className="hidden lg:block flex-1 bg-[#2a55e5] relative">
                <div className="px-10 pt-8">
                    <h2 className="text-white text-3xl font-bold">Looks like you are new here!</h2>
                    <p className="text-white font-bold mt-10">Sign up to get started</p>
                </div>
                <div className="w-2/3 mx-auto absolute bottom-0 translate-x-1/4">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/14454cb4-4d0a-4265-93fc-125f07fd08b1/7s3WH2L8pd.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>
            </div>
            <div className="flex-1 bg-[#f7f7f7] relative">
                <form onSubmit={handleUserRegister} className="w-5/6 mx-auto space-y-4 mt-8">
                    <input name="fullname" type="text" placeholder="Full Name" className="input input-bordered w-full focus:outline-none rounded" required />
                    <input name="email" type="email" placeholder="Email address" className="input input-bordered w-full focus:outline-none rounded" required />
                    <input name="password" type="password" placeholder="Password" className="input input-bordered w-full focus:outline-none rounded" required />
                    <input name="profilepicture" type="file" accept="image/*" className="file-input file-input-bordered w-full rounded focus:border-none" required />
                    <input className="btn h-14 bg-green-600 text-white w-full text-lg rounded" type="submit" value="Register" />
                </form>
                <div className="flex justify-center mt-4">
                    <button onClick={() => signIn("google")} className="w-5/6 btn border-2 border-[#00416d] rounded-none"><FcGoogle className="text-2xl"></FcGoogle>GOOGLE</button>
                </div>
                <h3 className="text-center mt-10 absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1">Have an account? <Link href="/login"><span className="font-bold text-[#2a55e5]">Login</span></Link></h3>
            </div>
        </div>
    );
};

export default Register;