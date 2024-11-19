'use client'
import React, { useState } from "react";
import Image from "next/image";  // Import next/image

const Education: React.FC = () => {
  // State to manage the current image
  const [currentImage, setCurrentImage] = useState<string>("/img/edu2.png");

  // Function to handle image change
  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Text and Content */}
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-green-700 font-bold sm:text-3xl dark:text-neutral-200">
              Eco-Friendly Education Through Mathematical Operations
            </h2>

            {/* Tab Navs */}
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {/* Tab 1 */}
              <button
                type="button"
                onClick={() => handleImageChange("/img/edu2.png")}
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-200 focus:outline-none focus:bg-green-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex gap-x-6">
                  {/* Icon */}
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-green-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold text-green-700 dark:text-neutral-200">
                      Eco-Friendly Math
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                      Explore math operations while understanding eco-friendly concepts through plants.
                    </span>
                  </span>
                </span>
              </button>

              {/* Tab 2 */}
              <button
                type="button"
                onClick={() => handleImageChange("/img/edu1.png")}
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-200 focus:outline-none focus:bg-green-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex gap-x-6">
                  {/* Icon */}
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-green-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold text-green-700 dark:text-neutral-200">
                      Sustainable Practices
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                      Understand how mathematics can help in promoting sustainable and eco-friendly practices.
                    </span>
                  </span>
                </span>
              </button>

              {/* Tab 3 */}
              <button
                type="button"
                onClick={() => handleImageChange("/img/edu3.png")}
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-200 focus:outline-none focus:bg-green-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex gap-x-6">
                  {/* Icon */}
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-green-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold text-green-700 dark:text-neutral-200">
                      Mathematical Greenhouse
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                      Apply mathematical concepts to the growth of plants, understanding how operations affect nature.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
            {/* End Tab Navs */}
          </div>

          {/* Plant Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Image */}
              <div>
                <Image
                  className="shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src={currentImage}
                  alt="Eco-Friendly Math"
                  width={500}  // Add width
                  height={300}  // Add height
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
