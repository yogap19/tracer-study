'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { assets } from '@/app/assets/asset';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('transition-all', 'duration-500');
  }, []);

  // Hindari SSR mismatch
  if (!mounted)
    return <div className="h-10 w-10 bg-gray-200 rounded-full"></div>;

  return (
    <div
      className="flex justify-between items-center px-12 py-5 shadow-md 
                    bg-white dark:bg-gray-900 transition duration-500"
    >
      {/* Logo */}
      <button className="w-28 shadow-md dark:bg-white rounded-md">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-full rounded-full"
          priority
        />
        {}
      </button>

      {/* Navigation */}
      <nav>
        <ul className="flex justify-center items-center gap-6">
          {['Home', 'About', 'Detail', 'Statistic'].map((item, index) => (
            <li
              key={index}
              className="font-semibold font-serif px-6 py-3 transition duration-500 
                        text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 
                        rounded-full hover:text-slate-700 dark:hover:text-gray-300 hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-between w-44">
        {/* Tombol Dark Mode */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle Dark Mode"
          className="px-4 py-2 rounded-full transition duration-500 bg-gray-600 dark:bg-gray-800 
                   hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Sign-in Button */}
        <button
          className="bg-slate-50 dark:bg-gray-800 rounded-full shadow-md px-6 py-3 
                         hover:text-yellow-400 font-semibold transition duration-500"
        >
          Sign-in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
