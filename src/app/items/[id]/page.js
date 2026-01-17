'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/items/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => setItem(data))
        .catch(err => console.error('Error fetching item:', err));
    }
  }, [id]);

  if (!item) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={item.image} alt={item.name} className="w-full h-96 object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">${item.price}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
