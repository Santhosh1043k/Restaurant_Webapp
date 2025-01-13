import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600" />
            <Link to="/" className="ml-2 font-bold text-xl text-gray-800">
              Restaurant App
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/menu" className="text-gray-600 hover:text-gray-900">
                  Menu
                </Link>
                <Link to="/orders" className="text-gray-600 hover:text-gray-900">
                  Orders
                </Link>
                <Link to="/cart" className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-600">{user.username}</span>
                  <button
                    onClick={logout}
                    className="text-red-600 hover:text-red-800"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}