import React, { useState } from "react";

// Local asset imports
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import Lifeimage1 from "../../assets/Life image1.jpeg";
import Lifeimage3 from "../../assets/Life image3.jpg";
import Lifeimage8 from "../../assets/Life image8.jpg";

/* =============================
   THEME CONFIGURATION
============================= */
const THEME = {
  // You can change 'bgBody' to any hex color like "#1a202c" or "#0f172a"
  bgBody: "#0f172a", 
  cardBg: "rgba(255, 255, 255, 0.96)",
  accentPink: "#ec4899",
  accentGold: "#facc15",
};

const styles = `
  .main-bg {
    background: radial-gradient(circle at top left, #1e293b, ${THEME.bgBody});
    background-attachment: fixed;
  }
  .glass-card {
    background: ${THEME.cardBg};
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 1);
  }
  .img-zoom { overflow: hidden; border-radius: 12px; }
  .img-zoom img { transition: transform 0.5s ease; }
  .img-zoom:hover img { transform: scale(1.1); }
`;

const clubs = [
  { icon: "🎨", title: "Art & Craft", text: "Sketching and painting activities.", color: "border-pink-400" },
  { icon: "🎼", title: "Music & Dance", text: "Classical dance and singing sessions.", color: "border-blue-400" },
  { icon: "🤖", title: "STEM", text: "Robotics and science experiments.", color: "border-yellow-400" },
  { icon: "📚", title: "Reading", text: "Book club and library activities.", color: "border-emerald-400" },
  { icon: "⚽", title: "Sports", text: "	Basketball,Cricket,Fitness & Games,Chess,	Football,Vollyball,Karate", color: "border-sky-400" },
  { icon: "🌱", title: "Eco Club", text: "Green drives and plantation.", color: "border-green-400" },
];

const highlights = [
  { title: "Morning Assembly", text: "Moral stories and news reading.", time: "8:30 AM" },
  { title: "Active Classrooms", text: "Activity‑based learning with labs.", time: "9:00 AM" },
  { title: "Play & PE", text: "Structured games and motor skills.", time: "11:00 AM" },
  { title: "Clubs Friday", text: "Weekly periods for hobbies.", time: "2:00 PM" },
];

const events = [
  { year: "2025", title: "Annual Day", month: "March", participants: "All Students" },
  { year: "2025", title: "Sports Meet", month: "January", participants: "500+ Students" },
  { year: "2024", title: "Science Expo", month: "November", participants: "200 Projects" },
  { year: "2024", title: "Field Trips", month: "October", participants: "All Grades" },
];

const galleryItems = [
  { src: gallery1, alt: "NCC Training" },
  { src: gallery2, alt: "School Assembly" },
  { src: gallery3, alt: "Cultural Event" },
  { src: Lifeimage1, alt: "Art Class" },
  { src: Lifeimage3, alt: "STEM Lab" },
  { src: Lifeimage8, alt: "Yoga Session" },
];

const SchoolLifeActivities = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <div className="min-h-screen main-bg font-sans pb-16 text-slate-900">
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl shadow-pink-500/20">
            Our Campus Culture
          </span>
          <h1 className="text-4xl md:text-2xl font-black text-white mb-6 leading-tight uppercase">
            Joyful Learning, <br/>
            <span className="text-yellow-400 italic">Vibrant Campus</span>
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
            Beyond the classroom, we empower students to explore their passions through a 
            rich tapestry of arts, athletics, and scientific inquiry.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "20+", label: "Active Clubs" },
              { value: "500+", label: "Students" },
              { value: "50+", label: "Annual Events" },
              { value: "100%", label: "Participation" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl border-b-4 border-slate-200">
                <div className="text-2xl font-black text-pink-600">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CLUBS SECTION */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
           <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Liberal Arts And Sports Tradition</h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
          </div>
            <p className="text-base text-slate-300 mx-auto font-medium mb-10 ">
          We value the role of sports and arts in life. It is an integral part of our student’s learning experience. We believe in the positive benefits of participating in individual / team sports and performing arts. We deliver a curriculum that gives children the opportunity to experience a wide range of activities in an atmosphere of enjoyment and personal development. Through a mixture of competitive and non-competitive activities, the students learn about cooperation and evaluating performance. They also learn about making choices and about balanced and healthy lifestyles. From our Pre-Nursery year right through to our Grade 12, all students benefit from lessons delivered by specialist Sports & Arts coaches & teachers. Our scripted curriculum for Sports & Arts gives the children an opportunity to try out a wide range of different activities. Our students have access to state-of-the-art facilities for Football, Swimming, Basketball, Handball, Cricket, Judo, Skating, and Gymnastics, while 
          they are also trained in Dance, Music, Drama, Theatre, Photography, Short Filmmaking and many more.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Skill Development Activities</h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, index) => (
              <div key={index} className={`glass-card p-6 rounded-3xl border-l-8 ${club.color}`}>
                <div className="text-3xl mb-3">{club.icon}</div>
                <h3 className="text-sm font-black text-slate-800 uppercase mb-2 tracking-tight">{club.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{club.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   <div className="max-w-6xl mx-auto">
   <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider p-2">Post School Activities</h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
          </div>
           <p className="text-base text-slate-300 mx-auto font-medium mb-5 p-2">
          While students usually have the opportunity to pursue a wide range of core subjects and electives during school hours, post-school activities provide them with an additional opportunity after school, to explore an interest in more depth or even find
           a new passion, which they, themselves might not have been aware of earlier.
          </p>
           <p className="text-base text-slate-300 mx-auto font-medium mb-5 p-2">
          While students usually have the opportunity to pursue a wide range of core subjects and electives during school hours, post-school activities provide them with an additional opportunity after school, to explore an interest in more depth or even find
           a new passion, which they, themselves might not have been aware of earlier.
          </p>
          
           <p className="text-base text-slate-300 mx-auto font-medium mb-10 p-2">
         Additionally, our proficient trainers and coaches constantly engage with our young students while enhancing their knowledge, highlighting their achievements, challenging their thought-processes 
         and holistically nourishing their untapped capabilities.
          </p>
          </div>
      {/* SCHEDULE & HIGHLIGHTS */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Daily Schedule */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white uppercase flex items-center gap-3">
               <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]"></span> 
               Daily Routine
            </h2>
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:bg-slate-50">
                  <div>
                    <h4 className="font-black text-slate-800 text-xs uppercase group-hover:text-pink-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-[11px] font-medium">{item.text}</p>
                  </div>
                  <div className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-black text-[10px] shadow-inner">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white uppercase flex items-center gap-3">
               <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></span> 
               Event Calendar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {events.map((event, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1">
                     <div className="bg-pink-100 text-pink-600 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                        {event.year}
                     </div>
                  </div>
                  <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">{event.month}</span>
                  <h4 className="font-black text-slate-800 text-xs uppercase mt-1 mb-2">{event.title}</h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Target: {event.participants}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Memories in Motion</h2>
            <p className="text-slate-400 text-sm mt-2 font-medium">Click to view full moments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="img-zoom glass-card p-2 cursor-pointer shadow-2xl" 
                onClick={() => setSelectedGallery(index)}
              >
                <img src={item.src} alt={item.alt} className="w-full h-44 object-cover rounded-xl" />
                <div className="pt-3 pb-1">
                  <p className="text-center font-black text-slate-700 uppercase text-[9px] tracking-widest">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedGallery !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4" onClick={() => setSelectedGallery(null)}>
          <div className="relative max-w-4xl w-full">
            <button className="absolute -top-10 right-0 text-white font-black text-sm uppercase tracking-widest">Close ✕</button>
            <img src={galleryItems[selectedGallery].src} alt="Full View" className="w-full rounded-2xl shadow-2xl border-4 border-white/10 animate-in zoom-in duration-300" />
          </div>
        </div>
      )}

    </div>
  );
};

export default SchoolLifeActivities;