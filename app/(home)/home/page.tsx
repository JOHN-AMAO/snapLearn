"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Page = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      <div className=''>
        <div>Hello users</div>
      </div>
    </>
  );
};

export default Page;
