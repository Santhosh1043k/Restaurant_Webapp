import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Simulate order placement
    clearCart();
    navigate('/orders');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center py-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-red-600 hover:bg-red-50 rounded-md ml-4"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}