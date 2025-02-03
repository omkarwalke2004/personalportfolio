import { Button } from '@/components/ui/button';
import React from 'react';
import { CiShare1 } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactme = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 space-y-8 px-6">
      {/* Contact Button */}
      <a href="mailto:omkarwalke647@gmail.com">
        <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          <span className="text-base sm:text-lg font-medium text-white">
            Contact Me
          </span>
          <CiShare1 className="text-white text-xl sm:text-2xl" />
        </Button>
      </a>

      {/* Social Links */}
      <div className="absolute bottom-6 right-6 flex space-x-4 sm:space-x-6 bg-black/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg">
        <a href="https://github.com/omkarwalke2004" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl sm:text-3xl transition-transform transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/omkar-walke-28b61b249/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="mailto:omkarwalke647@gmail.com" className="text-gray-400 hover:text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Contactme;
