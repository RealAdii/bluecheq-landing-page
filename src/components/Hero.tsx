import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-20 border-red-500 border-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-5">
          <h1 className="text-[6rem] font-normal leading-[1.1] tracking-tight text-gray-900">
            Verify before<br />
            you Hire.<br />
          </h1>
          <p className="text-[1.5rem] text-gray-600 max-w-lg font-normal leading-relaxed">
            Increase conversion, lower fraud, and grow revenue
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="group inline-flex items-center px-5 py-2.5 border border-black text-base font-medium rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-200">
              Talk to our team
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="inline-flex items-center px-5 py-2.5 border border-gray-200 text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50">
              Start building
            </button>
          </div>
        </div>

        {/* Right Column - iPhone Mockup */}
        <div className="relative h-[450px] w-full max-w-[220px] mx-auto md:mr-0">
          <div className="absolute inset-0 bg-black rounded-[2.5rem] p-[3px] shadow-xl">
            <div className="relative h-full w-full bg-gray-800 rounded-[2.3rem] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center px-5 text-xs text-white">
                <span className="flex-1">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2.5 bg-white rounded-sm"></div>
                  <div className="h-2 w-2.5 bg-white rounded-sm"></div>
                  <div className="h-2 w-2.5 bg-white rounded-sm"></div>
                  <div className="h-2 w-2.5 bg-white rounded-sm"></div>
                </div>
              </div>
              {/* Video Placeholder */}
              <div className="h-full w-full bg-white flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                Video Demo
                <br />
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;