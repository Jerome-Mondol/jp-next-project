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

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
          E-Shop
        </Link>
        <div className="space-x-6">
          <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            Login
          </Link>
          <Link href="/items" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">
            Shop
          </Link>
          {isLoggedIn && <Link href="/add-item" className="hover:underline">Add Item</Link>}
        </div>
      </div>
    </nav>
  );
}
