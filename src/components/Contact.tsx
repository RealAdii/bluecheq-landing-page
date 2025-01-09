import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-300">
            <img
              src="/form-bg.svg"
              alt="Contact us"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col justify-center lg:pl-12">
            <h2 className="text-4xl font-normal leading-[1.2] tracking-tight text-gray-900 mb-12">
              Ready to get started?
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Company email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base"
                />
              </div>
              <div>
                <select
                  name="country"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-base text-gray-500"
                  required
                >
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-200"
              >
                Talk with our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <p className="text-sm text-gray-500">
                By submitting this form, I confirm that I have read and understood Plaid's Privacy Statement
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;