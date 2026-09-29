import React from 'react';
import Link from 'next/link';

export default function Home() {
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
            <li><Link href="/about" className="hover:text-rose-600 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-rose-600 transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4 font-serif">Dress Your Story in Saree Grace</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Handcrafted sarees, bridal drapes, festive classics curated for graceful women</p>
          <div className="flex gap-4 justify-center">
            <Link href="/shop" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Shop Now
            </Link>
            <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold border border-white transition">
              Book Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-4 font-serif">Curated Collections</h2>
          <p className="text-center text-gray-600 mb-12">From vibrant festive drapes to graceful wedding statements</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Bridal', desc: 'Rich textures, regal colors', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400' },
              { name: 'Festive', desc: 'Bold embroidery, celebratory elegance', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400' },
              { name: 'Everyday Luxe', desc: 'Minimal, chic, versatile', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400' }
            ].map((col, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <img src={col.img} alt={col.name} className="w-full h-64 object-cover" />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2 font-serif">{col.name}</h3>
                  <p className="text-gray-600 mb-4">{col.desc}</p>
                  <Link href="/collections" className="text-rose-600 font-semibold hover:text-rose-700">View More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-12 font-serif">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✦', title: 'Premium Fabrics', desc: 'Handpicked materials for comfort and elegance' },
              { icon: '✓', title: 'Curated Collection', desc: 'Fresh styles for every occasion' },
              { icon: '♡', title: 'Personal Styling', desc: 'Expert guidance for your perfect drape' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick service with safe packaging' },
              { icon: '💎', title: 'Authentic Quality', desc: '100% genuine fabrics guaranteed' },
              { icon: '⭐', title: 'Trusted Brand', desc: '4.9★ rated by 12k+ customers' }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-bold text-rose-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-12 font-serif">Customer Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Riya Ahmed', text: 'The saree quality was exceptional. I felt beautiful at my wedding!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Nabila S.', text: 'Beautiful designs and very helpful staff. Perfect fit!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Tahsin R.', text: 'Premium and graceful. Perfect for special events.', rating: '⭐⭐⭐⭐⭐' }
            ].map((test, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-xl shadow-md">
                <p className="text-amber-400 mb-3">{test.rating}</p>
                <p className="text-gray-600 italic mb-4">\"{ test.text}\"</p>
                <p className="font-bold text-rose-900">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-rose-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 font-serif">Ready to Find Your Perfect Saree?</h2>
          <p className="text-xl mb-8 opacity-90">Chat with us on WhatsApp for personalized styling advice and exclusive offers</p>
          <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition inline-block">
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Kishori Product</h3>
            <p className="text-gray-300 text-sm">Premium handcrafted sarees for every celebration.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">📍 Dhaka, Bangladesh</p>
            <p className="text-gray-300 text-sm">📞 +880 17 0000 0000</p>
            <p className="text-gray-300 text-sm">✉️ hello@kishoriproduct.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-yellow-400 transition">📷</a>
              <a href="#" className="hover:text-yellow-400 transition">👍</a>
              <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">💬</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2026 Kishori Product. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
