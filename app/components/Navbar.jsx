import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black text-white text-4xl font-bold px-2 py-2">
      <Link href={`/`}>Film Finder</Link>
    </header>
  );
};

export default Navbar;
