'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export default function AddItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = Cookies.get('auth');
    if (!auth) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jp-next-project-server.onrender.com/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price: parseFloat(price), image }),
      });
      if (response.ok) {
        toast.success('Item added successfully!');
        router.push('/items');
      } else {
        toast.error('Failed to add item');
      }
    } catch (error) {
      toast.error('Error adding item');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Add New Product</h1>
            <p className="text-gray-700">Fill in the details to add a new item to our store</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g. Wireless Headphones"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Describe the product features and benefits"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="99.99"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-black py-3 px-4 rounded-md font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
