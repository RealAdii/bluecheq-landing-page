import React from 'react';

const LogoScroll = () => {
  const logos = [
    { url: 'https://logo.clearbit.com/rocketmortgage.com', alt: 'Rocket' },
    { url: 'https://logo.clearbit.com/sofi.com', alt: 'SoFi' },
    { url: 'https://logo.clearbit.com/shopify.com', alt: 'Shopify' },
    { url: 'https://img.logo.dev/ycombinator.com', alt: 'Acorns' },
  ];

  // Double the logos array for seamless infinite scroll
  const scrollLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-22xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-t">
          <div className="absolute -top-3 left-0 right-0 flex justify-center">
            <span className="text-xl bg-white px-6 text-base text-gray-500">Trusted by</span>
          </div>
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll space-x-16">
              {scrollLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-none w-40 h-20 flex items-center justify-center"
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="max-h-10 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;