import React from 'react';
import Link from 'next/link';

export default function Collections() {
  const collections = {
    bridal: [
      { name: 'Maroon Aura', price: '৳ 4,499', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300' },
      { name: 'Ruby Red', price: '৳ 4,199', img: 'https://images.unsplash.com/photo-1606841837239-8d5b1c6e2cbe?w=300' },
      { name: 'Rose Gold', price: '৳ 3,899', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300' }
    ],
    festive: [
      { name: 'Garden Green', price: '৳ 2,990', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300' },
      { name: 'Pearl Silk', price: '৳ 3,199', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300' },
      { name: 'Golden Hour', price: '৳ 3,499', img: 'https://images.unsplash.com/photo-1606841837239-8d5b1c6e2cbe?w=300' }
    ],
    everyday: [
      { name: 'Soft Blue', price: '৳ 2,499', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300' },
      { name: 'Cream Dream', price: '৳ 2,299', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300' },
      { name: 'Blush Pink', price: '৳ 2,799', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-rose-900">🧵 Kishori</Link>
          <ul className="flex gap-8 text-gray-600">
            <li><Link href="/" className="hover:text-rose-600 transition">Home</Link></li>
            <li><Link href="/collections" className="hover:text-rose-600 transition font-bold text-rose-600">Collections</Link></li>
            <li><Link href="/shop" className="hover:text-rose-600 transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-rose-600 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-rose-600 transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-rose-900 mb-2 font-serif">Our Collections</h1>
        <p className="text-gray-600 text-lg">Explore sarees for every occasion</p>
      </section>

      {/* Collections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {['bridal', 'festive', 'everyday'].map((type) => (
            <div key={type} className="mb-20">
              <h2 className="text-3xl font-bold text-rose-900 mb-2 font-serif capitalize">{type} Collection</h2>
              <p className="text-gray-600 mb-8">Discover our curated {type} sarees</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {collections[type].map((product, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-rose-900 mb-2">{product.name}</h3>
                      <p className="text-rose-600 font-bold text-lg mb-4">{product.price}</p>
                      <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg transition font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-950 text-white py-12 px-6 text-center">
        <p>&copy; 2026 Kishori Product. All rights reserved.</p>
      </footer>
    </div>
  );
}
