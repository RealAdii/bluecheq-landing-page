import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
              <img className="w-16 h-16" src="/main-logo.png" alt="main-logo" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://reclaimprotocol.org/blog/" className="text-[#979797] hover:text-gray-900 font-medium">
              Use cases
            </a>
            <a href="https://reclaimprotocol.org/blog/" className="text-[#979797] hover:text-gray-900 font-medium">
              Documentation
            </a> 
            <a href="https://docs.reclaimprotocol.org/" className="text-[#979797] hover:text-gray-900 font-medium">
              Blogs
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="group inline-flex items-center px-5 py-2.5 text-base font-medium rounded-sm bg-white border border-[#0000ee] text-[#0000ee] hover:bg-[#0000ee] hover:border hover:border-white hover:text-white transition-colors duration-200">
              Contact sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;