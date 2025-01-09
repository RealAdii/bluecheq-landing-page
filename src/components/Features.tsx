import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="w-full bg-white pt-56 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 pl-0 lg:pl-12">
            <h2 className="text-6xl font-normal leading-[1.2] tracking-tight text-gray-900">
              Ship in hours with<br />less than 10 lines of code
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Build faster, smarter, and simpler user experiences with only a few lines of code. All on a single dashboard.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200">
              Read SDK docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Right Column - Code Preview */}
          <div className="relative lg:pr-12">
            <div className="absolute -top-8 right-4">
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-[#e6f7f7] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-[#00b3b3]">⌛</div>
                </div>
                <div className="w-12 h-12 bg-[#e6f7f7] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-[#00b3b3]">🔒</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-gray-400 text-sm">/auth/get</div>
              </div>
              <pre className="text-sm">
                <code className="text-gray-100">
                  <span className="text-[#4ec9b0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">request</span> ={" "}
                  <span className="text-[#4ec9b0]">AuthGetRequest</span>(
                  <span className="text-[#ce9178]">access_token</span>)
                  {"\n"}
                  <span className="text-[#4ec9b0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">response</span> ={" "}
                  <span className="text-[#569cd6]">await</span>{" "}
                  <span className="text-[#9cdcfe]">client</span>.
                  <span className="text-[#4ec9b0]">auth_get</span>(request)
                  {"\n"}
                  <span className="text-[#4ec9b0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">routing_number</span> = response.numbers.ach[0].routing
                  {"\n"}
                  <span className="text-[#4ec9b0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">account_number</span> = response.numbers.ach[0].account
                  {"\n"}
                  <span className="text-[#4ec9b0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">balance</span> = response.accounts[0].balances.available
                </code>
              </pre>
            </div>
            <div className="absolute -bottom-8 right-4">
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-[#e6f7f7] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-[#00b3b3]">💸</div>
                </div>
                <div className="w-12 h-12 bg-[#e6f7f7] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-[#00b3b3]">🔑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;