import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between items-center py-4 px-8 text-2xl border-footer-top">
      <div className="ml-2 mr-auto">
        &copy; 2023 Neviox Digital
      </div>
      <div className="flex justify-center">
        <Link href="https://www.instagram.com/https://instagram.com/nevioxdigital?igshid=NTc4MTIwNjQ2YQ==" className="mr-8">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href=" https://g.co/kgs/2cS9Hb" className="mx-12">
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link href="https://github.com/sacredzero" className="ml-8">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div className="mr-2 ml-auto">
        <Link href="/#hire">
          Contact
        </Link>
      </div>
    </footer>
  );
};
