import React, { useEffect } from 'react';
import { FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jonathon Doe",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      testimonial: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations."
    },
    {
      id: 2,
      name: "Ruki Yead",
      role: "WordPress Developer",
      image: "/Images/businesswoman-with-glasses-crossed-arms.jpg",
      testimonial: "The collaboration was seamless and the results speak for themselves. Their technical expertise combined with creative vision delivered exactly what we needed."
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      testimonial: "I loved working with this team! They really understood the design process and delivered an exceptional product that exceeded my expectations."
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-2 lg:py-8 px-4">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-purple-600 font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <FaExternalLinkAlt className="text-purple-600 text-sm" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-8 font-extrabold">
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              my clients
            </span>{' '}
            have
            <br />
            to say{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              about me
            </span>
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <FaQuoteLeft className="text-pink-400 text-2xl opacity-60" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {testimonial.testimonial}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 ">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-100 group-hover:border-purple-200 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-purple-100 mb-6 text-lg">
              Join these satisfied clients and let's create something amazing together.
            </p>
            <button 
              onClick={() => navigate('/contact')} 
              className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
