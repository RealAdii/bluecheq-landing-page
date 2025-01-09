import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    id: 1,
    title:
      "How TMR.NEWS is using Reclaim for a Noncustodial Trustless Prediction Market",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Reclaim Protocol: A Strategic Core for Stormbit’s Growth",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "How Icebreaker is using Reclaim for Professional Graph Imports",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    link: "#",
  },
];

const Stories = () => {
  return (
    <div className="w-full bg-white pt-56 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-7xl font-normal leading-[1.2] tracking-tight text-[#0000EE] mb-4">
            Testimonials
          </h2>

          <div className="w-full h-px bg-gray-200 my-4" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  {story.title}
                </h3>
                <a
                  href={story.link}
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                >
                  Read story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
