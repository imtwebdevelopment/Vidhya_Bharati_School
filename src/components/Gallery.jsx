import React, { useState } from "react";

// Local asset imports
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import Lifeimage1 from "../assets/Life image1.jpeg";
import Lifeimage2 from "../assets/Life image2.jpg";
import Lifeimage3 from "../assets/Life image3.jpg";
import Lifeimage4 from "../assets/Life image4.jpg";
import Lifeimage5 from "../assets/Life image5.jpeg";
import Lifeimage6 from "../assets/Life image6.jpeg";
import Lifeimage8 from "../assets/Life image8.jpg";

/* =============================
   COLOR THEME & ASSETS
============================= */
const COLORS = {
  primary: "#0a4d6e",    // Deep Navy
  accent: "#ff7eb9",     // Pink Accent
  gold: "#facc15",       // School Gold
  bgOverlay: "rgba(10, 77, 110, 0.88)", // Solid Deep Navy Overlay
};

// High-quality academic background
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop";

/* =============================
   STABLE STYLES (No Entrance Animations)
============================= */
const styles = `
  .main-bg {
    background-image: linear-gradient(${COLORS.bgOverlay}, ${COLORS.bgOverlay}), url('${BACKGROUND_IMAGE}');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .gallery-card {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .gallery-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .img-zoom {
    transition: transform 0.5s ease;
  }

  .gallery-card:hover .img-zoom {
    transform: scale(1.05);
  }

  .filter-btn {
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .filter-active {
    background-color: ${COLORS.gold} !important;
    color: ${COLORS.primary} !important;
    font-weight: 800;
    border-color: ${COLORS.gold} !important;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #052c40;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: ${COLORS.gold};
    border-radius: 5px;
  }
`;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Campus Life", "Events", "NCC & Sports", "Academics"];

  const galleryData = [
    { id: 1, title: "School Assembly", category: "Campus Life", image: gallery2, description: "Fostering unity and discipline through our morning prayer and assembly." },
    { id: 2, title: "NCC Parade Training", category: "NCC & Sports", image: gallery1, description: "Building leadership and national pride through rigorous NCC drills." },
    { id: 3, title: "Creative Art Workshop", category: "Academics", image: Lifeimage1, description: "Nurturing the creative minds of our primary students with hands-on art." },
    { id: 4, title: "Annual Cultural Day", category: "Events", image: gallery3, description: "A celebration of talent, culture, and our school's vibrant community." },
    { id: 5, title: "Mass Yoga Session", category: "NCC & Sports", image: Lifeimage8, description: "Integrating physical health and mental peace through International Yoga Day." },
    { id: 6, title: "STEM Activities", category: "Academics", image: Lifeimage3, description: "Practical learning and scientific exploration in our dedicated labs." },
    { id: 7, title: "Outdoor Physical Education", category: "NCC & Sports", image: Lifeimage6, description: "Sportsmanship and physical fitness on our expansive school grounds." },
    { id: 8, title: "Meditation & Focus", category: "Campus Life", image: Lifeimage5, description: "Daily mindfulness sessions to enhance student concentration." },
    { id: 9, title: "NCC Leadership Training", category: "NCC & Sports", image: Lifeimage2, description: "Training the future leaders of India with discipline and honor." },
    { id: 10, title: "Quiet Reflection", category: "Campus Life", image: Lifeimage4, description: "Character building through value-based education and prayer." },
  ];

  const filteredImages = selectedCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <>
      <style>{styles}</style>

      <div className="min-h-screen main-bg font-['Inter', 'sans-serif'] custom-scrollbar pb-24">
        
        {/* Static Header Section */}
        <section className="py-20 px-4 text-center">
          <div>
            <h1 className="text-white text-2xl md:text-3xl font-black mb-4 tracking-tight uppercase">
              School <span className="text-yellow-400">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-blue-50 text-lg max-w-2xl mx-auto font-light">
              <span className="block font-bold text-white mt-1">Vidya Bharati English Medium School</span>
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-black/20 backdrop-blur-md p-1.5 rounded-xl flex flex-wrap justify-center gap-2 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                  ? "filter-active shadow-lg" 
                  : "text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stable Grid Layout */}
        <main className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden gallery-card shadow-xl"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-xs uppercase shadow-xl">
                      View Full Image
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#0a4d6e] text-[10px] font-black uppercase tracking-widest">
                      {item.category}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl mb-2 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Clean Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4 backdrop-blur-md">
            <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white md:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center z-10 text-xl"
              >
                ✕
              </button>
              
              {/* Modal Image */}
              <div className="md:w-2/3 bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] md:max-h-[85vh] w-full object-contain"
                />
              </div>

              {/* Modal Info */}
              <div className="md:w-1/3 p-8 flex flex-col justify-center bg-white">
                <span className="text-pink-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-black text-[#0a4d6e] mb-4">
                  {selectedImage.title}
                </h3>
                <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-slate-600 text-md leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-4 bg-[#0a4d6e] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;