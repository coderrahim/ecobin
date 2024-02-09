import { connectDB } from "@/utils/config/db";
import User from "@/utils/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs"
import { useRouter } from "next/navigation";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                    const user = await User.findOne({ email })
                    if (!user) {
                        return null;
                    }
                    const passMatch = await bcryptjs.compare(password, user.password)
                    if (!passMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error ", error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
                const { name, email, image } = user;
                try {
                    await connectDB();
                    const userExist = await User.findOne({ email });
                    if (!userExist) {
                        const res = await User.create({ fullname: name, email, profilepicture: image, userstatus: "user" });
                        if (res.ok) {
                            console.log(res);
                            // return router.replace("/")
                        }
                    }
                    // if (!userExist) {
                    //     const newUser = await User.create({ fullname: name, email, profilepicture: image, userstatus: "user" });
                    //     if (newUser) {
                    //         return "/"; // Redirect to homepage
                    //     }
                    // } else {
                    //     if (userExist.userstatus === "user") {
                    //         return "/"; // Redirect to homepage
                    //     } else if (userExist.userstatus === "admin") {
                    //         return "/admin"; // Redirect to admin dashboard
                    //     }
                    // }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        },
        async jwt({ token, user, account, profile }) {
            // console.log('token', token);
            // console.log(profile);
            if (user?._id) token._id = user._id;
            if (account?.provider === 'google' && profile) {
                token.name = profile.name;
                token.image = profile.picture;
                if (user && user.email) {
                    const userdata = await User.findOne({ email: user.email });
                    if (userdata) {
                        token.userstatus = userdata.userstatus;
                        token._id = userdata._id;
                    }
                }
            } else if (account?.provider === 'credentials' && user) {
                token.name = user.fullname;
                token.image = user.profilepicture;
                token.userstatus = user.userstatus;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?._id) session.user._id = token._id;
            if (token?.name) session.user.name = token.name;
            if (token?.image) session.user.image = token.image;
            if (token?.userstatus) session.user.userstatus = token.userstatus;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };