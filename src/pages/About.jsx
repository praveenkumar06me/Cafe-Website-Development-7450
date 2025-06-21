import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCoffee, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: <FiCoffee className="text-3xl text-coffee-600" />,
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms around the world'
    },
    {
      icon: <FiHeart className="text-3xl text-coffee-600" />,
      title: 'Passion Driven',
      description: 'Every cup is crafted with love and attention to detail by our skilled baristas'
    },
    {
      icon: <FiUsers className="text-3xl text-coffee-600" />,
      title: 'Community Focused',
      description: 'Building connections and creating a warm, welcoming space for everyone'
    },
    {
      icon: <FiAward className="text-3xl text-coffee-600" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional experiences with every visit'
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream-200"
          >
            Where passion meets perfection in every cup
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl font-bold text-coffee-800 mb-6">
                Born from a Love of Coffee
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Brew & Bean was founded in 2018 by Sarah and Michael Chen, two coffee enthusiasts 
                  who traveled the world in search of the perfect cup. After years of exploring 
                  coffee cultures from Ethiopia to Colombia, they returned home with a mission: 
                  to share their passion for exceptional coffee with their community.
                </p>
                <p>
                  What started as a small neighborhood café has grown into a beloved gathering place 
                  where friends meet, students study, and coffee lovers discover new flavors. We 
                  believe that great coffee has the power to bring people together and create 
                  meaningful connections.
                </p>
                <p>
                  Today, we continue to honor our founders' vision by sourcing ethically-traded 
                  beans, supporting local farmers, and maintaining the highest standards of quality 
                  in everything we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee shop interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coffee-600 text-white p-6 rounded-2xl">
                <p className="font-bold text-2xl">5+</p>
                <p className="text-cream-200">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-coffee-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-coffee-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind your perfect cup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Co-Founder & Head Roaster',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Co-Founder & Operations',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Head Barista',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-coffee-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-cream-200 leading-relaxed">
              "To create a space where exceptional coffee, genuine hospitality, and 
              community connection come together. We're committed to sourcing responsibly, 
              crafting carefully, and serving with heart - one cup at a time."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;