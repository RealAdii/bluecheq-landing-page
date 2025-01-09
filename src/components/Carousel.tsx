import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Instantaneous',
    subtitle: 'Only takes a few minutes.',
    image: 'https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    cta: 'Fight fraud at scale',
    bgColor: 'bg-[#e6f7f7]'
  },
  {
    title: 'Cheaper',
    subtitle: 'SIgnificantly lower cost than any existing verification service.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    cta: 'Onboard users faster',
    bgColor: 'bg-[#fff4cc]'
  },
  {
    title: 'Authentic.',
    subtitle: "Don't rely on scraping data, use our authentic verification solution.",
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    cta: 'Move money safely',
    bgColor: 'bg-[#e6f0ff]'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <h3 className="text-4xl font-normal leading-[1.2] tracking-tight text-gray-900">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-gray-600">{slide.subtitle}</p>
                        <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ArrowRight className="h-6 w-6" />
          </button> */}

          {/* Dots */}
          <div className="absolute -bottom-8 left-0 right-0">
            <div className="flex justify-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
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