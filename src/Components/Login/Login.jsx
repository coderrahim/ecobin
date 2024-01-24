"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  //   auth related start
  function AuthButton() {
    const { data: session } = useSession();

    if (session) {
      return (
        <>
          <h1 className="text-2xl">{session?.user?.name}</h1> <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      );
    }
    return (
      <>
        <h1 className="text-2xl">Not signed in</h1> <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
  //   auth related end
  return (
    <div className="flex justify-center items-center flex-col h-[50vh]">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-green-500">User</h1>
      <AuthButton />
    </div>
  );
};

export default Login;
