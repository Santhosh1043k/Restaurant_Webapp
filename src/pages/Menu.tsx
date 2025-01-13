import React from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, and basil',
    price: 499,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    category: 'Pizza'
  },
  {
    id: '2',
    name: 'Classic Burger',
    description: 'Beef patty with lettuce, tomato, and special sauce',
    price: 299,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'Burgers'
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
    price: 249,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
    category: 'Salads'
  }
];

export function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}