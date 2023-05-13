import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between items-center py-4 px-8 text-2xl wave">
      <div className="ml-1 md:ml-2 mr-auto md:text-3xl text-xl text-black ">
        Neviox Digital &copy; 2023
      </div>
      <div className="flex justify-center">
        <Link
          href="https:/instagram.com/nevioxdigital?igshid=NTc4MTIwNjQ2YQ=="
          className="md:mr-8 mr-2 p-4 "
        >
          <FontAwesomeIcon icon={faInstagram} color="#000" />
        </Link>
        <Link href="https:/g.co/kgs/2cS9Hb" className="md:mx-12 mx-3 p-4">
          <FontAwesomeIcon icon={faGoogle} color="#000" />
        </Link>
        <Link
          href="https:/github.com/NevioxDigital"
          className="md:ml-8 ml-2 p-4"
        >
          <FontAwesomeIcon icon={faGithub} color="#000" />
        </Link>
      </div>
      <div className="mr-1 md:mr-2 ml-auto md:text-3xl text-xl text-black">
        <Link href="/#hire">Contact</Link>
      </div>
    </footer>
  );
};
