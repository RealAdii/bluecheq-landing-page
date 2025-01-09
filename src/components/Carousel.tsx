import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Instantaneous",
    subtitle: "Takes only a few minutes to verify",
    image: "/1st.svg",
    cta: "Get the fastest verification",
    bgColor: "bg-[#e6f7f7]",
  },
  {
    title: "Cheap",
    subtitle:
      "Significantly lower cost than any existing verification service.",
    image: "/2nd.svg",
    cta: "Get the cheapest solution",
    bgColor: "bg-[#e6f7f7]",
  },
  {
    title: "Authentic",
    subtitle:
      "Don't rely on scraping data, use our authentic verification solution.",
    image: "/3rd.svg",
    cta: "Get the most authentic solution",
    bgColor: "bg-[#e6f7f7]",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically go to the next slide after 3 seconds
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    // Clear the timer when the component unmounts or when the user clicks a button
    return () => clearTimeout(autoSlide);
  }, [currentSlide]);

  // Go to the next slide and reset timer
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Go to the previous slide and reset timer
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-7xl font-normal leading-[1.2] tracking-tight text-[#0000EE]">
            Seamless Verification
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`rounded-2xl ${slide.bgColor} p-8`}>
                    <div className="grid grid-cols-1 gap-8 items-center">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="object-contain w-auto h-[300px]"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-7xl font-[600] leading-[1] tracking-normal text-gray-900">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-[#979797]">
                          {slide.subtitle}
                        </p>
                        <button className="mt-4 inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-[#0000EE] text-white hover:bg-white hover:border hover:border-[#0000EE] hover:text-[#0000EE] transition-colors duration-200">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#EDEDFF] shadow-lg hover:bg-gray-50"
          >
            <ArrowLeft className="h-6 w-6 text-[#6B6BFF]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#EDEDFF] shadow-lg hover:bg-gray-50"
          >
            <ArrowRight className="h-6 w-6 text-[#6B6BFF]" />
          </button>

          {/* Dots */}
          <div className="absolute -bottom-8 left-0 right-0">
            <div className="flex justify-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
