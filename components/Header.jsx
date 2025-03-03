import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0">
        <nav>
          <Link href="/">
          <Image src={"/fintrack-logo.png"} alt="Fintrack app" width={200} height={60} className="h-12 w-auto object-contain"/>

          </Link>
        </nav>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
