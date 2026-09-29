import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-rose-900">🧵 Kishori</Link>
          <ul className="flex gap-8 text-gray-600">
            <li><Link href="/" className="hover:text-rose-600 transition">Home</Link></li>
            <li><Link href="/collections" className="hover:text-rose-600 transition">Collections</Link></li>
            <li><Link href="/shop" className="hover:text-rose-600 transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-rose-600 transition font-bold text-rose-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-rose-600 transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-rose-900 mb-2 font-serif">About Kishori</h1>
        <p className="text-gray-600 text-lg">Our story of elegance and tradition</p>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-rose-900 mb-6 font-serif">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Kishori Product was founded with a passion for bringing timeless elegance to modern women. 
                We believe that every saree tells a story—a story of tradition, beauty, and celebration.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our carefully curated collection features handcrafted sarees from trusted weavers and artisans. 
                Each piece is selected for its quality, craftsmanship, and ability to make you feel confident.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500" alt="About" className="rounded-2xl shadow-xl" />
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-yellow-50 p-12 rounded-2xl mb-20">
            <h2 className="text-3xl font-bold text-rose-900 mb-6 font-serif">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To celebrate the grace and beauty of women through premium, handcrafted sarees that blend tradition with contemporary style. 
              We're committed to providing exceptional quality, personal styling advice, and an unforgettable shopping experience.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-rose-900 mb-12 font-serif">Why Choose Kishori</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: '✦', title: 'Premium Fabrics', desc: 'Handpicked materials for comfort and elegance' },
                { icon: '✓', title: 'Curated Collection', desc: 'Fresh styles for every occasion' },
                { icon: '♡', title: 'Personal Styling', desc: 'Expert guidance for your perfect drape' },
                { icon: '⚡', title: 'Fast Delivery', desc: 'Quick service with safe packaging' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-950 text-white py-12 px-6 text-center">
        <p>&copy; 2026 Kishori Product. All rights reserved.</p>
      </footer>
    </div>
  );
}
