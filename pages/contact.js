import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
            <li><Link href="/contact" className="hover:text-rose-600 transition font-bold text-rose-600">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-rose-900 mb-2 font-serif">Get In Touch</h1>
        <p className="text-gray-600 text-lg">We'd love to hear from you</p>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-rose-900 mb-8 font-serif">Contact Information</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-rose-600 mb-2">📍 Location</h3>
              <p className="text-gray-600">Dhanmondi, Dhaka<br/>Bangladesh</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-rose-600 mb-2">📞 Phone</h3>
              <p className="text-gray-600"><a href="tel:+8801700000000" className="hover:text-rose-600">+880 17 0000 0000</a></p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-rose-600 mb-2">✉️ Email</h3>
              <p className="text-gray-600"><a href="mailto:hello@kishoriproduct.com" className="hover:text-rose-600">hello@kishoriproduct.com</a></p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-rose-600 mb-2">⏰ Hours</h3>
              <p className="text-gray-600">11:00 AM - 8:00 PM<br/>All Days</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-rose-600 mb-2">💬 WhatsApp</h3>
              <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-700 font-semibold">Chat with us on WhatsApp</a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-rose-900 mb-8 font-serif">Send us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-rose-600 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-rose-600 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-rose-600 focus:outline-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition">
                Send Message
              </button>
            </form>
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
