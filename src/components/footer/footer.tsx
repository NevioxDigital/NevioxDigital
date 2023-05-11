import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between items-center py-4 px-8 text-2xl border-footer-top">
      <div className="ml-1 md:ml-2 mr-auto md:text-3xl text-xl ">
      Neviox Digital  &copy; 2023
      </div>
      <div className="flex justify-center">
        <Link href="https:/instagram.com/nevioxdigital?igshid=NTc4MTIwNjQ2YQ==" className="md:mr-8 mr-2 p-4 ">
          <FontAwesomeIcon icon={faInstagram}  />
        </Link>
        <Link href=" https:/g.co/kgs/2cS9Hb" className="md:mx-12 mx-3 p-4">
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link href="https:/github.com/sacredzero" className="md:ml-8 ml-2 p-4">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div className="mr-1 md:mr-2 ml-auto md:text-3xl text-xl">
        <Link href="/#hire">
          Contact
        </Link>
      </div>
    </footer>
  );
};
