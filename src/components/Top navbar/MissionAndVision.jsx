import React from "react";
import { motion } from 'framer-motion';

const MissionAndVision = () => {
  // Updated hallmarks based on the school's core values
  const hallmarks = [
    { letter: 'V', word: 'Value-based Education', color: 'bg-[#E91E63]' }, // Pink
    { letter: 'I', word: 'Intellectual Growth', color: 'bg-[#FFC107]' },   // Yellow
    { letter: 'D', word: 'Disciplined Life', color: 'bg-[#00BCD4]' },      // Cyan
    { letter: 'Y', word: 'Yearning for Knowledge', color: 'bg-[#FBC02D]' }, // Gold/Yellow
    { letter: 'A', word: 'Abiding Patriotism', color: 'bg-[#F06292]' },    // Light Pink
    { letter: 'B', word: 'Balanced Development', color: 'bg-[#2196F3]' },  // Blue
    { letter: 'H', word: 'Honesty & Integrity', color: 'bg-[#4CAF50]' },   // Green
    { letter: 'A', word: 'Aesthetic Appreciation', color: 'bg-[#FF9800]' },// Orange
    { letter: 'R', word: 'Respect for Culture', color: 'bg-[#9C27B0]' },   // Purple
    { letter: 'A', word: 'Analytical Thinking', color: 'bg-[#F44336]' },   // Red
    { letter: 'T', word: 'Team Spirit', color: 'bg-[#009688]' },            // Teal
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 font-sans pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full bg-pink-500 text-white text-sm font-bold mb-6 shadow-lg uppercase tracking-widest"
          >
            Mission & Vision
          </motion.div>
          
          <h1 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight">
            Our <span className="text-pink-600">Foundation</span> & <span className="text-blue-600">Goals</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building a generation committed to <span className="font-bold text-pink-600">National Values</span> and 
            <span className="font-bold text-blue-600"> Academic Excellence</span>.
          </p>
        </div>
      </section>

      {/* --- VISION & MISSION CONTENT (From Home) --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Text Content */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-pink-500"
              >
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800 mb-4">Vision</h2>
                <p className="text-slate-600 leading-relaxed text-lg ">
                  "At VBSK Institutions, education is a noble instrument with which we mould future generations into responsible citizens and good human beings".
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-blue-500"
              >
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800 mb-4">Mission</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  	"To provide our students ample opportunities and means to help them imbibe, all into their character that is fair, moral and pious. To impart a strong sense of culture, values and deep knowledge to our students, so that each one is looked upon as a role model by the present and following generations".
                </p>
                  <p  className="text-slate-600 mt-2 leading-relaxed text-lg">
              " To impart value based Quality Education with an analytical approach to enable
               students to convert acquired knowledge into wisdom which help them to be worthy human beings".
            </p>
              </motion.div>
            </div>

            {/* Right Column: The Vidya Bharati Hallmarks (Updated from Image) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border border-cyan-100 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8 border-b-4 border-yellow-400 w-fit pb-2">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800">THE VIDYA BHARATI</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {hallmarks.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`${item.color} w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg text-white font-bold shadow-md group-hover:scale-110 transition-transform`}>
                      {item.letter}
                    </div>
                    <span className="text-lg font-semibold text-slate-700 uppercase tracking-wide">
                      — {item.word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>

            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of Our Mission
            </h4>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Join us in nurturing a generation that is modern in outlook yet deeply rooted in our cultural values.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/admission"
                className="px-10 py-4 rounded-full bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-500/50"
              >
                Start Admission
              </a>
              
              <a
                href="/contact"
                className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-all shadow-lg"
              >
                Visit Campus
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionAndVision;
