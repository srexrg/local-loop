import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          &copy; 2024 Local Loop. All rights reserved.
        </p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/srexrg"
            target="_blank"
            className="text-xs hover:underline underline-offset-4 text-gray-400"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-400"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
