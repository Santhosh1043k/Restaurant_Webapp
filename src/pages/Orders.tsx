import React from 'react';
import { Order } from '../types';

const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    items: [
      {
        id: '1',
        name: 'Margherita Pizza',
        description: 'Fresh tomatoes, mozzarella, and basil',
        price: 499,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
        category: 'Pizza',
        quantity: 2
      }
    ],
    total: 998,
    status: 'completed',
    createdAt: '2024-02-20T12:00:00Z'
  }
];

export function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
      <div className="space-y-6">
        {MOCK_ORDERS.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <div className="border-t border-b py-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-600">
                      {item.quantity} x ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <p className="text-lg font-bold">
                Total: ₹{order.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}