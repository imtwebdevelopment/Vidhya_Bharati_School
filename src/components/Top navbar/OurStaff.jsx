import React, { useState } from "react";
// FIX: Add AnimatePresence to the import
import { motion, AnimatePresence } from "framer-motion"; 

// ---- Data ----
const STAFF = [
  { 
    id: 1, 
    name: "Mrs. Kavya Patil", 
    role: "Principal", 
    dept: "Administration", 
    exp: 14, 
    photo: "https://i.pravatar.cc/300?img=47", 
    skills: ["Leadership", "Academics", "Parent Connect", "Curriculum"],
    quote: "Education is not preparation for life; education is life itself."
  },
  { 
    id: 2, 
    name: "Mr. Nitin Shetty", 
    role: "Vice Principal", 
    dept: "Administration", 
    exp: 11, 
    photo: "https://i.pravatar.cc/300?img=15", 
    skills: ["Operations", "Discipline", "Clubs", "Events"],
    quote: "Every child is unique, and every day is a new opportunity to inspire."
  },
  { 
    id: 3, 
    name: "Mrs. Pooja Rao", 
    role: "Academic Coordinator", 
    dept: "Administration", 
    exp: 9, 
    photo: "https://i.pravatar.cc/300?img=5", 
    skills: ["Assessments", "NEP", "Training", "Research"],
    quote: "Great teachers empathize with kids, respect them, and believe that each one has something special."
  },
  { 
    id: 4, 
    name: "Ms. Shreya Kulkarni", 
    role: "Class Teacher, Grade 1", 
    dept: "Primary", 
    exp: 6, 
    photo: "https://i.pravatar.cc/300?img=31", 
    skills: ["Phonics", "Art", "EVS", "Storytelling"],
    quote: "The art of teaching is the art of assisting discovery."
  },
  { 
    id: 5, 
    name: "Mr. Arjun Desai", 
    role: "Math & Science", 
    dept: "Middle", 
    exp: 8, 
    photo: "https://i.pravatar.cc/300?img=11", 
    skills: ["STEM", "Lab", "Robotics", "Experiments"],
    quote: "Science is not just a subject, it's a way of thinking."
  },
  { 
    id: 6, 
    name: "Mrs. Nisha Verma", 
    role: "English", 
    dept: "Middle", 
    exp: 7, 
    photo: "https://i.pravatar.cc/300?img=20", 
    skills: ["Grammar", "Drama", "Debate", "Literature"],
    quote: "Words have power. Let's use them to build dreams."
  },
  { 
    id: 7, 
    name: "Mr. Ravi Kumar", 
    role: "PET (Sports)", 
    dept: "Sports", 
    exp: 10, 
    photo: "https://i.pravatar.cc/300?img=64", 
    skills: ["Athletics", "Yoga", "Team Games", "Fitness"],
    quote: "A healthy mind resides in a healthy body."
  },
  { 
    id: 8, 
    name: "Mrs. Anaya Shah", 
    role: "Art & Craft", 
    dept: "Arts", 
    exp: 5, 
    photo: "https://i.pravatar.cc/300?img=30", 
    skills: ["Drawing", "Craft", "Posters", "Design"],
    quote: "Every child is an artist. The problem is how to remain an artist once we grow up."
  },
  { 
    id: 9, 
    name: "Mr. Irfan Khan", 
    role: "Computer Science", 
    dept: "Middle", 
    exp: 6, 
    photo: "https://i.pravatar.cc/300?img=13", 
    skills: ["Coding", "Scratch", "Web", "AI Basics"],
    quote: "Technology is just a tool. In terms of getting kids working together, the teacher is most important."
  },
  { 
    id: 10, 
    name: "Mrs. Latha Reddy", 
    role: "Class Teacher, UKG", 
    dept: "Primary", 
    exp: 9, 
    photo: "https://i.pravatar.cc/300?img=38", 
    skills: ["EVS", "Rhymes", "Activities", "Motor Skills"],
    quote: "Play is the highest form of research."
  },
  { 
    id: 11, 
    name: "Mr. Varun Pai", 
    role: "Music", 
    dept: "Arts", 
    exp: 7, 
    photo: "https://i.pravatar.cc/300?img=28", 
    skills: ["Keyboard", "Choir", "Bhajans", "Composition"],
    quote: "Music can change the world because it can change people."
  },
  { 
    id: 12, 
    name: "Mrs. Ritu Sen", 
    role: "Counsellor", 
    dept: "Administration", 
    exp: 8, 
    photo: "https://i.pravatar.cc/300?img=67", 
    skills: ["Wellbeing", "SEL", "Career", "Guidance"],
    quote: "The greatest gift you can give a child is your belief in them."
  },
];

const DEPTS = ["All", "Administration", "Primary", "Middle", "Sports", "Arts"];

const OurStaff = () => {
  const [dept, setDept] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);

  const filtered = STAFF.filter((staff) => {
    if (dept !== "All" && staff.dept !== dept) return false;
    if (!query) return true;
    
    const searchTerm = query.toLowerCase();
    return (
      staff.name.toLowerCase().includes(searchTerm) ||
      staff.role.toLowerCase().includes(searchTerm) ||
      staff.dept.toLowerCase().includes(searchTerm) ||
      staff.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    );
  });

  const spotlightStaff = filtered[0] || STAFF[0];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <div className="bg-white">
      {/* ===== HERO SECTION (Updated to Pink/Blue Gradient) ===== */}
      <section className="pt-12 pb-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <motion.span 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium mb-4"
            >
              Meet Our Team
            </motion.span>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Dedicated Educators
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Passionate teachers who inspire and guide our students every day
            </motion.p>
            
            {/* Stats (Updated color: Pink/Blue) */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-pink-600">80+</div>
                <div className="text-sm text-gray-600">Staff Members</div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">12+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-pink-600">6</div>
                <div className="text-sm text-gray-600">Departments</div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Special Skills</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPOTLIGHT SECTION (Updated to Pink/Blue Gradient) ===== */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Staff Spotlight</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={spotlightStaff.photo}
                  alt={spotlightStaff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{spotlightStaff.name}</h3>
                <div className="text-pink-600 font-medium mb-2">{spotlightStaff.role} • {spotlightStaff.dept}</div>
                <p className="text-gray-600 italic mb-3">"{spotlightStaff.quote}"</p>
                
                <div className="flex flex-wrap gap-2">
                  {spotlightStaff.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">{spotlightStaff.exp}+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTER SECTION (Updated to light Pink) ===== */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-pink-50/50 rounded-xl p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Department Filter */}
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Filter by Department</div>
                <div className="flex flex-wrap gap-2">
                  {DEPTS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDept(d)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                        dept === d
                          ? "bg-pink-600 text-white shadow-md hover:bg-pink-700" // Active: Pink
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-pink-100" // Inactive: White/Pink hover
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Search */}
              <div className="w-full md:w-auto">
                <div className="text-sm font-medium text-gray-700 mb-2">Search Staff</div>
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Name, role, or skill..."
                    className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-2.5 text-gray-400">🔍</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              Showing {filtered.length} of {STAFF.length} staff members
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAFF GRID (Updated color badges) ===== */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">😔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No matching staff found</h3>
              <p className="text-gray-600">Try a different search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((staff) => (
                <motion.div
                  key={staff.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(236, 72, 153, 0.1)' }} // Pink shadow on hover
                  onClick={() => setSelectedStaff(staff)}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={staff.photo}
                      alt={staff.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    
                    {/* Department Badge (Neutral/Light) */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg shadow">
                      <span className="text-sm font-medium text-gray-900">{staff.dept}</span>
                    </div>
                    
                    {/* Experience Badge (Primary Pink) */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-pink-600 text-white rounded-lg shadow">
                      <span className="text-sm font-medium">{staff.exp}+ yrs</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{staff.name}</h3>
                    <div className="text-pink-600 font-medium mb-3">{staff.role}</div> {/* Pink Role */}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {staff.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded" // Blue Skill Tags
                        >
                          {skill}
                        </span>
                      ))}
                      {staff.skills.length > 2 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          +{staff.skills.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 italic truncate">
                      "{staff.quote}"
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== MODAL (Fixed with AnimatePresence) ===== */}
      <AnimatePresence>
      {selectedStaff && (
        <motion.div 
            key="staff-modal-backdrop" // Added key for AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div 
              key="staff-modal-content" // Added key for AnimatePresence
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedStaff.name}</h2>
                <button
                  onClick={() => setSelectedStaff(null)}
                  className="text-gray-500 hover:text-pink-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedStaff.photo}
                      alt={selectedStaff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-pink-50 rounded-lg"> {/* Pink Stat */}
                      <div className="text-lg font-bold text-pink-600">{selectedStaff.exp}+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg"> {/* Blue Stat */}
                      <div className="text-lg font-bold text-blue-600">{selectedStaff.dept}</div>
                      <div className="text-sm text-gray-600">Department</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-pink-600 mb-2">{selectedStaff.role}</h3> {/* Pink Role */}
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Teaching Philosophy</h4>
                    <p className="text-gray-600 italic">"{selectedStaff.quote}"</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" // Blue Skill Tags
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                </div>
                
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">About</h4>
                    <p className="text-gray-600">
                      Passionate educator with {selectedStaff.exp}+ years of experience dedicated to creating engaging 
                      learning environments. Specializes in innovative teaching methodologies that foster 
                      curiosity and holistic development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* ===== CTA SECTION (Updated to Pink/Blue Gradient) ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Connect With Our Team</h3>
            <p className="mb-6 opacity-90">
              Have questions about our teaching methodology or want to meet our educators?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-pink-600 font-medium rounded-lg hover:bg-gray-100 transition"
              >
                Contact School
              </a>
              <a
                href="/visit"
                className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStaff;