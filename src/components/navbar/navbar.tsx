import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
  
    <div className="flex flex-col items-center justify-center mt-32">
        <div className="flex flex-col">
            <nav className="flex justify-around py-6 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center mr-auto ml-10">
                        <h3 className="text-3xl font-title mr-20 ">Neviox Digital</h3>
                </div>
                <div className="flex items-center w-auto space-x-5 ml-auto mr-10 font-title">
                    <Link href="#" className="flex text-xl transition-colors duration-300">Home</Link>
                    <Link href="#" className="flex text-xl transition-colors duration-300">About</Link>
                    <Link href="#" className="flex text-xl transition-colors duration-300">Contact</Link>
                </div>
            </nav>
        </div>
    </div>
  );
};
