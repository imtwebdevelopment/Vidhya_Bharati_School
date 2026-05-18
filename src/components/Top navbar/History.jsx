import React from "react";
import { motion } from "framer-motion";

// ---- Data ----
const milestones = [
  { 
    year: "2014", 
    title: "School Founded", 
    text: "VIDYA BHARATI EMPS (CBSE) opens with a small yet passionate team in Raichur.",
    icon: "🏛️"
  },
  { 
    year: "2016", 
    title: "First Sports Meet", 
    text: "Inaugural inter-house sports day ignites house spirit and teamwork.",
    icon: "🏆"
  },
  { 
    year: "2018", 
    title: "Library & Labs", 
    text: "Dedicated reading corners and activity labs introduced across grades.",
    icon: "📚"
  },
  { 
    year: "2021", 
    title: "Digital Classrooms", 
    text: "Smart boards & blended learning help continuity during tough times.",
    icon: "💻"
  },
  { 
    year: "2024", 
    title: "Community Outreach", 
    text: "Scholarships and service projects expand our impact in the city.",
    icon: "🤝"
  },
  { 
    year: "2025", 
    title: "Future Vision", 
    text: "Expanding campus facilities with state-of-art infrastructure.",
    icon: "🚀"
  },
];

const stats = [
  { label: "Years of Learning", value: "> 10", icon: "📅" },
  { label: "Students Mentored", value: "1500+", icon: "👨‍🎓" },
  { label: "Clubs & Houses", value: "20+", icon: "🎭" },
  { label: "Events / Year", value: "30+", icon: "🎪" },
];

const founders = [
  { 
    name: "Founding Trust", 
    role: "Vision & Support", 
    contribution: "Established the foundation"
  },
  { 
    name: "Early Teachers", 
    role: "First Faculty", 
    contribution: "Built the academic framework"
  },
  { 
    name: "Parent Community", 
    role: "Partners in Growth", 
    contribution: "Supported expansion"
  },
];

const History = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* ===== HERO SECTION ===== */}
      <section className="pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium mb-4">
              Our Journey Since 2014
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              A Legacy of Excellence & Growth
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings in 2014 to a thriving educational institution, 
              our journey is a testament to dedication, innovation, and community spirit.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDING STORY SECTION ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Foundation</h2>
            <p className="text-gray-600 mt-2">The humble beginnings of our institution</p>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-12">
            <p className="text-lg text-gray-700">
              VIDYA BHARATI EMPS (CBSE) began as a community dream to create joyful, 
              value-based education in Raichur. With a handful of passionate educators 
              and a vision for holistic development, we started our journey in 2014.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{founder.role}</div>
                <p className="text-gray-600">{founder.contribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey Through Time</h2>
            <p className="text-gray-600 mt-2">Milestones that define our growth</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        {milestone.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <div className="text-4xl mb-4">💭</div>
              <p className="text-xl text-gray-700 italic mb-6">
                "Every batch writes a fresh chapter in our story. Our legacy is not just in numbers, but in the joy of learning that continues year after year."
              </p>
              <div className="font-bold text-gray-900">— School Leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Become Part of Our Continuing Story</h3>
            <p className="mb-6 opacity-90">Join us as we write the next chapter of excellence in education.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition"
              >
                Visit Our Campus
              </a>
              <a
                href="/about"
                className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;