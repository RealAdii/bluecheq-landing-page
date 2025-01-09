import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="w-full bg-white pt-56 pb-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 pl-0 lg:pl-12">
            <h2 className="text-6xl font-normal leading-[1.2] tracking-tight text-[#0000EE]">
            Integrate the verification sdk in less <br />than 10 minutes
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Build faster, smarter, and simpler user experiences with only a few lines of code. All on a single dashboard.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-[#0000EE] text-white hover:bg-white hover:border hover:border-[#0000EE] hover:text-[#0000EE] transition-colors duration-200">
              <a className="flex items-center" href="https://docs.reclaimprotocol.org/">Read SDK docs <ArrowRight className="ml-2 h-4 w-4" /></a>
            </button>
          </div>

          {/* Right Column - Code Preview */}
          <div className="relative lg:pr-12">
            <img src="/code-snippet.svg" alt="code" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;