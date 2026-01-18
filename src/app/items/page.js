'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jp-next-project-server.onrender.com/api/items')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our curated collection of high-quality items
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h2>
                <p className="text-gray-800 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-black">${item.price}</span>
                  <Link href={`/items/${item.id}`} className="bg-gray-200 text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
