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
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
              <span>Use cases</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 hover:text-gray-900 font-medium">
              Documentation
            </a>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
              <span>Blogs</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
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