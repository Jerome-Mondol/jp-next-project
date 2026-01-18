'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = Cookies.get('auth');
    setIsLoggedIn(!!auth);
  }, []);

  const handleLogout = () => {
    Cookies.remove('auth');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neutral-800 hover:text-primary transition duration-300">
          E-Shop
        </Link>
        <div className="space-x-6">
          {!isLoggedIn ? (
            <Link href="/login" className="text-gray-700 hover:text-primary font-medium transition duration-300">
              Login
            </Link>
          ) : (
            <>
              <Link href="/add-item" className="text-gray-700 hover:text-primary font-medium transition duration-300">
                Add Item
              </Link>
              <button onClick={handleLogout} className="text-gray-700 hover:text-primary font-medium transition duration-300">
                Logout
              </button>
            </>
          )}
          <Link href="/items" className="border border-primary text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition duration-300 bg-slate-800">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}
