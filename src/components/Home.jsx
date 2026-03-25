import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, ChevronRight, GraduationCap, Play,
  Users, BookOpen, MapPin, Phone, ArrowRight,
  Target, Eye, Star, Award, Youtube
} from 'lucide-react';
// banner images
import banner1 from "../assets/school banner1.jpeg"
import banner2 from "../assets/school banner2.jpg"
//life images 

import life1 from "../assets/Life image1.jpeg"
import life2 from "../assets/Life image2.jpg"
import life3 from "../assets/Life image3.jpg"
import life4 from "../assets/Life image4.jpg"
import life5 from "../assets/Life image5.jpeg"
import life6 from "../assets/Life image6.jpeg"
import life7 from "../assets/Life image7.jpeg"
import life8 from "../assets/Life image8.jpg"


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      url: banner1,
      subtitle: "Sa Vidya Ya Vimuktaye - Education for Liberation",
      // Custom animation for this specific slide
      animation: {
        initial: { opacity: 0, scale: 1.2 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, x: -100 }
      }
    },
    {
      url: banner2,
      subtitle: "Character Building and Academic Excellence under CBSE Curriculum",
      // Custom animation for this specific slide
      animation: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, scale: 0.8 }
      }
    }
  ];

  const lifeImages = [
    life1,
    life2,
    life3,
    life4,
    life5,
    life6,
    life7,
    life8
  ];

  const hallmarks = [
    { letter: 'V', word: 'Value-based Education', color: 'bg-[#E91E63]' },
    { letter: 'I', word: 'Intellectual Growth', color: 'bg-[#FFC107]' },
    { letter: 'D', word: 'Disciplined Life', color: 'bg-[#00BCD4]' },
    { letter: 'Y', word: 'Yearning for Knowledge', color: 'bg-[#FBC02D]' },
    { letter: 'A', word: 'Abiding Patriotism', color: 'bg-[#F06292]' },
    { letter: 'B', word: 'Balanced Development', color: 'bg-[#2196F3]' },
    { letter: 'H', word: 'Honesty & Integrity', color: 'bg-[#4CAF50]' },
    { letter: 'A', word: 'Aesthetic Appreciation', color: 'bg-[#FF9800]' },
    { letter: 'R', word: 'Respect for Culture', color: 'bg-[#9C27B0]' },
    { letter: 'A', word: 'Analytical Thinking', color: 'bg-[#F44336]' },
    { letter: 'T', word: 'Team Spirit', color: 'bg-[#009688]' },
  ];

const celebrations = [
  { title: "Annual Prize Distribution", videoId: "b-YdXPz8zHk" },
  { title: "Republic Day Celebration", videoId: "a2bK7_tFwWI" },
  { title: "FIRELESS COOKING", videoId: "29D44JwaTuA" },
   { title: "Maths Day Celebration", videoId: "X8nOprM2NDc" }
];

  const testimonials = [
    {
      text: "Vidya Bharati focuses not just on marks but on the overall sanskar of the child. The teachers are incredibly dedicated to national values.",
      image: "/p.jpeg",
      name:" Smt. Anuradha"
    },
    {
      text: "The integration of modern science with our cultural roots makes Vidya Bharati the best choice for my children's future.",
      image: "/p1.jpeg",
       name:"Gyanchand saklecha"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={bannerImages[currentSlide].animation.initial}
            animate={bannerImages[currentSlide].animation.animate}
            exit={bannerImages[currentSlide].animation.exit}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={bannerImages[currentSlide].url}
              className="w-full h-full object-cover"
              alt="Vidya Bharati Campus"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase">
                Vidya Bharati <br />
                <span className="text-yellow-400 text-3xl md:text-5xl">ENGLISH MEDIUM PRIMARY SCHOOL (CBSE)</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
                {bannerImages[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- PARIKSHA PE CHARCHA VIDEOS --- */}
    

      {/* --- SECRETARY'S MESSAGE --- */}
    

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-700 uppercase tracking-widest">Central Board of Secondary Education</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
          </div>
          <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto"> <b>At VIDYA BHARATI CBSE </b> School offers a nationally established CBSE (Central Board of Secondary Education) curriculum across the majority of its schools. The school is affiliated with the Central Board of Secondary Education and students are prepared for the All-India Secondary School
            Exams (Class X) and the All India Secondary School Certificate Examination (Class XII).</p>
          <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto">Our holistic approach to education prepares our students to excel in
            the Board Examinations, making  VIDYA BHARATI CBSE Schools one of the <b> best CBSE schools in India</b>.</p>
          <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto">The graded system of evaluation is the most current in a series of examination and evaluation reforms that CBSE has implemented. Our curriculum's main goal is to modernise
            teaching-learning techniques by creating paradigms that are helpful to students.</p>
          <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto">Students are urged to explore the connection between diverse disciplines' theoretical and practical concepts at the primary and secondary levels. An interdisciplinary approach dissolves the boundaries of subjects and encourages learning across the curriculum. We have developed a plan where the theme encompasses all curricular areas. Subjects like Math, English, Social Studies, and Science are integrated and taught focusing on a specific issue. With this, we have eliminated the age-old concept of teaching subjects in isolation. This cultivates higher order thinking abilities,
             encouraging our young geniuses to focus on their critical thinking and problem-solving skills.</p>
          <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto"><b>The CBSE curriculum at VIDYA BHARATI CBSE School is based on:</b></p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-md font-medium mx-auto max-w-4xl mt-2">
            <li>Integrated Curriculum</li>
            <li>Interdisciplinary Approach</li>
            <li>Experiential Learning</li>
            <li>Research Work</li>
          </ul>
        </div>
      </section>

      {/* --- LIFE AT VIDYA BHARATI SLIDER --- */}
      <section className="bg-pink-500 py-20 overflow-hidden">
        <div className="text-center mb-10 text-white">
          <h2 className="text-5xl font-light tracking-tight uppercase">A Look Into</h2>
          <p className="text-xl tracking-[0.3em] font-medium mt-1 text-yellow-200">LIFE AT VIDYA BHARATI</p>
        </div>
        <div className="flex w-full overflow-hidden px-10">
          <motion.div className="flex gap-6" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }}>
            {[...lifeImages, ...lifeImages].map((img, idx) => (
              <div key={idx} className="min-w-[350px] md:min-w-[450px] h-[400px] rounded-sm overflow-hidden border-[8px] border-white/20 shadow-xl flex-shrink-0">
                <img src={img} className="w-full h-full object-cover" alt={`Vidya Bharati Life ${idx}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    <section className="py-10">
  <div className="flex flex-col items-center">

    <div className="mb-6 border-b-4 border-pink-500 w-fit">
      <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800 pb-2 text-center">
        	Our Mission
      </h2>
    </div>

    <p className="text-slate-600 leading-relaxed text-lg text-center max-w-3xl">
    	To impart value based Quality Education with an analytical approach to enable students to convert
     acquired knowledge into wisdom which help them to be worthy human beings.
    </p>

  </div>
</section>
      {/* --- VISION & MISSION --- */}
      <section className="py-24 px-6 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6 border-b-4 border-pink-500 w-fit">
                  <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800 pb-2">Vision</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                 	At VBSK Institutions, education is a noble instrument with which we mould future generations into responsible citizens and good human beings.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-4 mb-6 border-b-4 border-pink-500 w-fit">
                  <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800 pb-2">Mission</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                 	To provide our students ample opportunities and means to help them imbibe, all into their character that is fair, moral and pious. To impart a strong sense of culture, values and deep knowledge to our students, 
                 so that each one is looked upon as a role model by the present and following generations.
                </p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-10 rounded-sm border border-cyan-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8 border-b-4 border-yellow-400 w-fit pb-2">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800">THE VIDYA BHARATI</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {hallmarks.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${item.color} w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm text-white font-bold shadow-sm`}>
                      {item.letter}
                    </div>
                    <span className="text-md font-medium text-slate-700">— {item.word}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CELEBRATIONS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-800">Celebrations</h2>
          <p className="text-xl tracking-widest text-pink-400 mt-2 uppercase font-medium">Rooted in Culture</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-16"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {celebrations.map((item, index) => (
    <motion.div
      key={index}
      className="bg-white border-[3px] border-cyan-100 rounded-sm overflow-hidden shadow-lg hover:border-pink-300 transition-colors"
      whileHover={{ scale: 1.02 }}
    >

      <a
        href={`https://www.youtube.com/watch?v=${item.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-video bg-black group cursor-pointer">
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
            className="w-full h-full object-cover opacity-80"
            alt={item.title}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center shadow-2xl">
              <Play fill="white" className="text-white ml-1" size={24} />
            </div>
          </div>
        </div>
      </a>

      <div className="p-6 text-center border-t border-slate-100">
        <h3 className="text-lg font-medium text-slate-700">{item.title}</h3>
      </div>

    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-6 bg-pink-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Parent Voices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white p-10 rounded-lg shadow-lg relative">
                  <p className="text-slate-800 leading-relaxed text-md font-medium text-center italic">
                    "{item.text}"
                  </p>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 transform"></div>
                </div>
                <div className="mt-12">
                  <div className="w-32 h-32 rounded-full border-[6px] border-yellow-400 overflow-hidden shadow-xl bg-white">
                    <img src={item.image} className="w-full h-full object-cover" alt="Vidya Bharati Parent" />
                 
                  </div>
                    <span className="mt-4  text-center font-medium text-white">
      {item.name}
    </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;