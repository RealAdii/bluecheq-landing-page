import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="relative max-w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Radial Gradients */}
      <div
        className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, #0000EE 0%, #D3D3FF 64%, #FFFFFF 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-[-40px] h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, #0000EE 0%, #D3D3FF 64%, #FFFFFF 100%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5 flex flex-col items-center">
            <h1 className="text-[6rem] font-normal leading-[1.1] text-[#0000EE] text-center tracking-normal">
              Verify before you hire.
            </h1>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group inline-flex items-center px-10 py-4 text-lg rounded-full bg-[#0000EE] text-white hover:bg-white hover:border hover:border-[#0000EE] hover:text-[#0000EE] transition-colors duration-200">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column - iPhone Mockup */}
          <div className="relative h-[500px] w-[800px] mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WXCduLA95jo"
              title="Reclaim Protocol Dev Tool V2 Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
