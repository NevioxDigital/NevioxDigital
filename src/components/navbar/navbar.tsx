import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
  
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
            <nav className="flex justify-around py-6 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center mr-auto ml-10">
                        <Link href="/#welcome" className="text-3xl font-title font-bold mr-20 navbar-logo ">Neviox Digital</Link>
                </div>
                <div className="flex items-center w-auto space-x-5 ml-auto mr-10 font-title font-bold">
                    <Link href="/#welcome" className="flex text-xl transition-colors duration-300 navbar-items">Home</Link>
                    <Link href="/#about" className="flex text-xl transition-colors duration-300 navbar-items">About</Link>
                    <Link href="/#solutions" className="flex text-xl transition-colors duration-300 navbar-items">Solutions</Link>
                    <Link href="/#hire" className="flex text-xl transition-colors duration-300 navbar-items">Hire Us</Link>
                </div>
            </nav>
        </div>
    </div>
  );
};
