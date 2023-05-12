import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="relative">
          <nav className="flex items-center justify-between py-6 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
            <button
              className="text-3xl transition-colors duration-300 ml-auto mr-4"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={faBarsStaggered} color="#D4AF37" />
            </button>
          </nav>

          <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black z-20 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <Link
                href="/#welcome"
                className="text-3xl font-title font-bold navbar-logo top-0 mb-32"
              >
                Neviox Digital
              </Link>
              <Link
                href="/#welcome"
                className="text-4xl font-bold mb-10 navbar-items"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-4xl font-bold mb-10 navbar-items"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#solutions"
                className="text-4xl font-bold mb-10 navbar-items"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/#hire"
                className="text-4xl font-bold mb-10 navbar-items"
                onClick={() => setMenuOpen(false)}
              >
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col">
            <nav className="flex justify-around py-6 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
              <div className="flex items-center mr-auto ml-10">
                <Link
                  href="/#welcome"
                  className="text-3xl font-title font-bold mr-20 navbar-logo "
                >
                  Neviox Digital
                </Link>
              </div>
              <div className="flex items-center w-auto space-x-5 ml-auto mr-10 font-title font-bold">
                <Link
                  href="/#welcome"
                  className="flex text-xl transition-colors duration-300 navbar-items"
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  className="flex text-xl transition-colors duration-300 navbar-items"
                >
                  About
                </Link>
                <Link
                  href="/#solutions"
                  className="flex text-xl transition-colors duration-300 navbar-items"
                >
                  Solutions
                </Link>
                <Link
                  href="/#hire"
                  className="flex text-xl transition-colors duration-300 navbar-items"
                >
                  Hire Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
