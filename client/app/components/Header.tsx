'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = (href: string) => {
    return pathname === href
      ? 'text-green-500 font-semibold py-2' // Active link style
      : 'py-2 text-black hover:text-green-500';
  };

  return (
    <header className="bg-white p-4 text-gray-700 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-500">MOOD</h1>

        {/* Hamburger icon for mobile view */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Links (visible on larger screens) */}
        <div className="hidden lg:flex space-x-4 text-gray-700">
          <Link href="/" className={getLinkClassName('/')}>Home</Link>
          <Link href="/Garden" className={getLinkClassName('/Garden')}>Virtual Garden</Link>
          <Link href="/Materials" className={getLinkClassName('/Materials')}>Learning Materials</Link>
          <Link href="/Exercises" className={getLinkClassName('/Exercises')}>Start Exercises</Link>
          <Link
            href="/Chatbot"
            className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-green-500 to-green-500 rounded-md hover:from-green-600 hover:to-green-400 transition-all duration-300 ease-in-out"
          >
            Exercises with AI
          </Link>
        </div>
      </nav>

      {/* Mobile menu (visible when the menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-700 p-4 flex flex-col space-y-4 mt-2 border-t border-gray-200">
          <Link href="/" className={getLinkClassName('/')} onClick={toggleMenu}>Home</Link>
          <Link href="/Garden" className={getLinkClassName('/Garden')} onClick={toggleMenu}>Virtual Garden</Link>
          <Link href="/Materials" className={getLinkClassName('/Materials')} onClick={toggleMenu}>Learning Materials</Link>
          <Link href="/Exercises" className={getLinkClassName('/Exercises')} onClick={toggleMenu}>Start Exercises</Link>
          <Link
            href="/Chatbot"
            className="block py-2 px-4 text-white text-center font-semibold bg-gradient-to-r from-green-500 to-green-500 rounded-md hover:from-green-600 hover:to-green-400 transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Exercises with AI
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
