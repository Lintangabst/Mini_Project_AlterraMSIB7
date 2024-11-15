// components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4">
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            Welcome to Mathematics Operation Online Development (MOOD)
          </h1>
          <p className="text-lg text-gray-700 mb-6">
          Learn number operations in a fun and eco-friendly way! Our materials and exercises are designed not only to boost your math skills but also to inspire care for the planet. Perfect for elementary school students!
          </p>

          <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600">
            Start Learning
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 px-4 mt-8 md:mt-0 flex justify-center">
          <img
            src="./img/hero.png" 
            alt="Learn Mathematics"
            className="w-full max-w-md object-cover rounded-md animate-shake"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
