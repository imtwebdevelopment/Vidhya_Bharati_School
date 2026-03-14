import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/Emblemlogo.jpg'; // Assuming your logo image is here

const Footer = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <footer className="bg-sky-900 text-white shadow-inner shadow-sky-800">
      {/* Main Footer Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-8 md:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* 1. School Info & Social Media */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4">
              {/* Logo Area */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden p-1 shadow-xl">
                <img src={logoImage} alt="School Logo" className="w-full h-full object-cover rounded-full" />
              </div>

              <div>
                <div className="text-lg md:text-xl font-extrabold text-pink-400 leading-none">VIDYA BHARATI ENGLISH</div>
                <div className="text-sm md:text-base font-semibold text-sky-400">MEDIUM PRIMARY SCHOOL (CBSE)</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-sm md:text-base border-l-4 border-yellow-400 pl-3">
              Vidya Bharati English Medium Primary School is committed to providing quality education and fostering academic excellence.
              We strive to create a nurturing environment where students can grow intellectually, socially, and emotionally.
            </p>

            {/* Social Media Icons - Updated to Instagram, YouTube, WhatsApp */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-pink-500 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              {/* YouTube */}
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@VBCBSE" className="text-gray-300 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
              {/* WhatsApp */}
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.414 0 .018 5.393.015 12.03a11.794 11.794 0 0 0 1.592 5.961L0 24l6.149-1.613a11.78 11.78 0 0 0 5.895 1.57h.005c6.634 0 12.032-5.391 12.035-12.029a11.776 11.776 0 0 0-3.488-8.489z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg md:text-xl font-extrabold mb-4 text-pink-400 border-b-2 border-yellow-400 pb-1 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>ABOUT US</a></li>
              <li><a href="/admission" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>ADMISSIONS INFORMATIONS</a></li>
              <li><a href="/MandatoryPublicdisClosure" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>ACADEMICS</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>GALLERY</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>CONTACT</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base flex items-center">
                <span className="text-yellow-400 mr-2 text-sm">&rsaquo;</span>NEWS & EVENTS</a></li>
            </ul>
          </motion.div>

          {/* 3. Contact Info & Map */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h3 className="text-lg md:text-xl font-extrabold mb-4 text-pink-400 border-b-2 border-yellow-400 pb-1 inline-block">Contact Us</h3>
            <div className="space-y-3 md:space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm break-words">SriRam Nagar, Station Road</span>
              </div>
                <span className="text-gray-300 text-sm break-words ml-6">Raichur, Karnataka, 584 101</span>
               

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300 text-sm font-semibold hover:text-white transition-colors">Call Us: +91 8532-221980</span>
                
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300 text-sm break-words hover:text-white transition-colors">vbskcbse2014@gmail.com</span>
              </div>

              {/* Interactive Google Map of School Location */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full h-32 rounded-lg overflow-hidden border-2 border-sky-700 shadow-lg cursor-pointer"
              >
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.4249458737063!2d77.33807327420703!3d16.19857898449985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d76afbd796a1%3A0x4ff7ed96f2029310!2sVidya%20bharati%20state%20school!5e0!3m2!1sen!2sus!4v1772447342703!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-800 bg-sky-800">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-white text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vidya Bharati English Medium Primary School. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <a href="#" className="text-white hover:text-yellow-400 text-xs md:text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:text-yellow-400 text-xs md:text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white hover:text-yellow-400 text-xs md:text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
