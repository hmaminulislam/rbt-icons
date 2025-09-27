import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="py-4 border-b border-primary-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between gap-5">
          <Link
            href={"/"}
            className="max-w-25"
          >
            <Image src="/images/logo/logo.png" width={466} height={199} alt="Rbt Logo"></Image>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
