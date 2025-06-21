import React from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee, FiInstagram, FiFacebook, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FiCoffee className="text-cream-200 text-2xl" />
              <span className="font-serif font-bold text-xl text-cream-100">
                Brew & Bean
              </span>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mb-4">
              Where every cup tells a story. Experience the perfect blend of 
              artisan coffee and cozy atmosphere.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="mailto:hello@brewandbean.com"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-cream-100 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-cream-300">
              <p>123 Coffee Street</p>
              <p>Downtown District</p>
              <p>City, State 12345</p>
              <p className="mt-3">(555) 123-BREW</p>
              <p>hello@brewandbean.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-cream-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>7AM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-400 text-sm">
            © 2024 Brew & Bean. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-cream-400 hover:text-cream-200 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream-400 hover:text-cream-200 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;