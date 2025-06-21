import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'breakfast', name: 'Breakfast' }
  ];

  const menuItems = {
    coffee: [
      { name: 'Signature Espresso', price: '$4.50', description: 'Rich, bold shot of our house blend' },
      { name: 'Americano', price: '$4.25', description: 'Espresso with hot water for a smooth finish' },
      { name: 'Cappuccino', price: '$5.00', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: '$5.25', description: 'Espresso with steamed milk and light foam' },
      { name: 'Vanilla Latte', price: '$5.75', description: 'Our signature latte with vanilla syrup' },
      { name: 'Caramel Macchiato', price: '$6.00', description: 'Espresso with vanilla and caramel drizzle' },
      { name: 'Mocha', price: '$5.75', description: 'Espresso with chocolate and steamed milk' },
      { name: 'Cold Brew', price: '$4.75', description: 'Slow-steeped for 12 hours, smooth and refreshing' }
    ],
    tea: [
      { name: 'Earl Grey', price: '$3.50', description: 'Classic bergamot-infused black tea' },
      { name: 'Green Tea', price: '$3.25', description: 'Delicate and refreshing Japanese sencha' },
      { name: 'Chamomile', price: '$3.75', description: 'Soothing herbal tea perfect for relaxation' },
      { name: 'Chai Latte', price: '$4.50', description: 'Spiced tea with steamed milk' },
      { name: 'Matcha Latte', price: '$5.25', description: 'Premium Japanese matcha with steamed milk' },
      { name: 'English Breakfast', price: '$3.50', description: 'Bold and robust traditional blend' }
    ],
    pastries: [
      { name: 'Croissant', price: '$3.25', description: 'Buttery, flaky French pastry' },
      { name: 'Chocolate Croissant', price: '$3.75', description: 'Pain au chocolat with dark chocolate' },
      { name: 'Blueberry Muffin', price: '$3.50', description: 'Fresh blueberries in a tender muffin' },
      { name: 'Banana Bread', price: '$3.25', description: 'Moist and flavorful homemade bread' },
      { name: 'Scone', price: '$3.00', description: 'Traditional British pastry with jam' },
      { name: 'Danish', price: '$3.75', description: 'Sweet pastry with seasonal fruit' }
    ],
    breakfast: [
      { name: 'Avocado Toast', price: '$8.50', description: 'Smashed avocado on artisan bread with lime' },
      { name: 'Breakfast Sandwich', price: '$7.25', description: 'Egg, cheese, and bacon on a fresh croissant' },
      { name: 'Granola Bowl', price: '$6.75', description: 'House-made granola with yogurt and berries' },
      { name: 'Oatmeal', price: '$5.50', description: 'Steel-cut oats with brown sugar and cinnamon' },
      { name: 'Bagel & Cream Cheese', price: '$4.25', description: 'Fresh bagel with your choice of cream cheese' },
      { name: 'Fruit Bowl', price: '$6.00', description: 'Seasonal fresh fruit selection' }
    ]
  };

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
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream-200"
          >
            Crafted with passion, served with love
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-coffee-600 text-white shadow-lg'
                    : 'bg-white text-coffee-600 hover:bg-coffee-50 border border-coffee-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold text-coffee-800">
                    {item.name}
                  </h3>
                  <span className="text-coffee-600 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Notice */}
      <section className="py-16 bg-coffee-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              Special Dietary Options
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We offer dairy-free milk alternatives including oat, almond, and soy milk.
              Gluten-free pastries are available daily. Please ask our baristas about
              seasonal specialties and daily features.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-coffee-600">
              <span className="bg-white px-4 py-2 rounded-full">Oat Milk Available</span>
              <span className="bg-white px-4 py-2 rounded-full">Gluten-Free Options</span>
              <span className="bg-white px-4 py-2 rounded-full">Vegan Friendly</span>
              <span className="bg-white px-4 py-2 rounded-full">Locally Sourced</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;