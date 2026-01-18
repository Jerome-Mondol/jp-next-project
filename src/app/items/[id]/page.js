'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jp-next-project-server.onrender.com/api/items/${id}`)
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-700">Loading...</p>
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
              <h1 className="text-3xl font-bold text-neutral-900 mb-4">{item.name}</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-black">${item.price}</span>
              </div>
              <button className="w-full bg-gray-200 text-black py-3 px-6 rounded-full font-medium hover:bg-gray-300 transition duration-300 mb-8">
                Add to Cart
              </button>
              
              {/* Customer Reviews Section */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-neutral-900">John D.</span>
                      <div className="ml-2 flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700">"Excellent product! Highly recommend."</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-neutral-900">Jane S.</span>
                      <div className="ml-2 flex text-yellow-400">
                        ★★★★☆
                      </div>
                    </div>
                    <p className="text-gray-700">"Good quality, fast delivery."</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-neutral-900">Mike R.</span>
                      <div className="ml-2 flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700">"Worth every penny!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
