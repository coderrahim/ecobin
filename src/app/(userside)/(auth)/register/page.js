import Register from "@/components/Register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const RegisterPage = async () => {

    const session = await getServerSession(authOptions);

    if(session) redirect("/");

    return (
        <Register></Register>
    );
};

export default RegisterPage;