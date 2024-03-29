"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Page = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      {" "}
      <div>Hello users</div>
      <h1>{session?.data?.user?.email}</h1>
      <Image
        src={session?.data?.user?.image}
        width={50}
        height={50}
        alt='me'
      />
      <button onClick={() => signOut()}>Log out</button>
    </>
  );
};

export default Page;
