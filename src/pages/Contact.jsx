import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl text-coffee-600" />,
      title: 'Visit Us',
      details: ['123 Coffee Street', 'Downtown District', 'City, State 12345']
    },
    {
      icon: <FiPhone className="text-2xl text-coffee-600" />,
      title: 'Call Us',
      details: ['(555) 123-BREW', '(555) 123-2739']
    },
    {
      icon: <FiMail className="text-2xl text-coffee-600" />,
      title: 'Email Us',
      details: ['hello@brewandbean.com', 'events@brewandbean.com']
    },
    {
      icon: <FiClock className="text-2xl text-coffee-600" />,
      title: 'Hours',
      details: ['Mon-Fri: 6:00 AM - 8:00 PM', 'Sat-Sun: 7:00 AM - 9:00 PM']
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream-200"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <FiSend className="ml-2" />
                </button>
              </form>
            </motion.div>

            {/* Map and Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-6">
                  Find Our Location
                </h2>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brew & Bean Location"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FiMapPin className="text-coffee-600 mt-1" />
                    <div>
                      <p className="font-semibold text-coffee-800">Address</p>
                      <p className="text-gray-600">123 Coffee Street, Downtown District</p>
                      <p className="text-gray-600">City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiClock className="text-coffee-600 mt-1" />
                    <div>
                      <p className="font-semibold text-coffee-800">Parking</p>
                      <p className="text-gray-600">Street parking available</p>
                      <p className="text-gray-600">Public garage 2 blocks away</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Notice */}
              <div className="bg-coffee-100 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-3">
                  Private Events
                </h3>
                <p className="text-gray-700 mb-4">
                  Interested in hosting a private event or meeting? We offer catering 
                  services and can accommodate groups of various sizes.
                </p>
                <a
                  href="mailto:events@brewandbean.com"
                  className="inline-flex items-center text-coffee-600 font-semibold hover:text-coffee-700 transition-colors"
                >
                  Contact our events team
                  <FiMail className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;