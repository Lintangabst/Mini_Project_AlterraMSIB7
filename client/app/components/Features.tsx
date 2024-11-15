'use client';
import React from 'react';
import Slider from 'react-slick';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  { title: "Virtual Garden", description: "Get a virtual plant every time you solve a problem.", icon: "🌳" },
  { title: "Interactive Problems", description: "Problems that are easy to understand with eco-friendly examples.", icon: "📐" },
  { title: "Gamification", description: "Collect points and water your plants.", icon: "🏆" },
  { title: "Learning Material", description: "Learn various number operation concepts with an eco-friendly theme.", icon: "📖" },
];

const Features: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="features" className="py-12 md:py-16 bg-green-600 px-6 lg:px-8">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-12">Main Features</h3>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-3 md:px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 transition-transform transform hover:scale-105">
                <div className="text-4xl md:text-5xl mb-3">{feature.icon}</div>
                <h4 className="text-xl md:text-2xl font-semibold text-green-700">{feature.title}</h4>
                <p className="mt-2 text-base md:text-lg text-green-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Features;
