import React, { useEffect, useState } from 'react';

// Color Palette for Clear UI
const COLORS = {
  iceBlue: '#F0F9FF',    // Header & Hallmarks Section BG
  softPink: '#FFF1F2',  // Principal Message Section BG
  softYellow: '#FFFBEB',// Stats/Contact Section BG
  primaryPink: '#E11D48',
  vidyaBlue: '#0EA5E9',
  textSlate: '#1E293B'
};

const FromPrincipalsDesk = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Vidya Bharati Hallmarks data
  const hallmarks = [
    { l: 'V', t: 'Value-based Education', c: '#E11D48' },
    { l: 'I', t: 'Intellectual Growth', c: '#F59E0B' },
    { l: 'D', t: 'Disciplined Life', c: '#06B6D4' },
    { l: 'Y', t: 'Yearning for Knowledge', c: '#EAB308' },
    { l: 'A', t: 'Abiding Patriotism', c: '#EC4899' },
    { l: 'B', t: 'Balanced Development', c: '#2563EB' },
    { l: 'H', t: 'Honesty & Integrity', c: '#10B981' },
    { l: 'A', t: 'Aesthetic Appreciation', c: '#F97316' },
    { l: 'R', t: 'Respect for Culture', c: '#A855F7' },
    { l: 'A', t: 'Analytical Thinking', c: '#EF4444' },
    { l: 'T', t: 'Team Spirit', c: '#14B8A6' },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">

      {/* --- HEADER --- */}
      <header style={{ backgroundColor: COLORS.iceBlue }} className="py-12 px-6 border-b border-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              VIDYA BHARATI
            </h1>
            <p className="text-sky-600 font-bold text-xl mt-2 tracking-wide uppercase">
              English Medium Primary School (CBSE)
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-200 text-center min-w-[120px]">
              <p className="text-[10px] font-black text-slate-400 uppercase">Affiliation No</p>
              <p className="text-lg font-bold text-blue-600">830589</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-200 text-center min-w-[120px]">
              <p className="text-[10px] font-black text-slate-400 uppercase">School Code</p>
              <p className="text-lg font-bold text-blue-600">45582</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* --- PRINCIPAL MESSAGE --- */}
          <section style={{ backgroundColor: COLORS.softPink }} className="rounded-[2.5rem] p-8 md:p-12 border border-rose-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10">
              <div className="mb-10 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-white rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

                  {/* ✅ Dummy Image Only */}
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                    alt="Principal"
                    className="relative w-full h-[400px] object-cover rounded-3xl border-4 border-white shadow-2xl"
                  />

                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-lg border border-rose-100">
                    <p className="font-black text-slate-900">Principal Desk</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900">Dear Students and Parents,</h2>

                <div className="p-6 bg-white/60 rounded-2xl border-l-8 border-rose-500 italic shadow-sm">
                  <p className="text-xl font-bold text-slate-800 leading-snug">
                    "You must be the change you wish to see in the world"
                  </p>
                  <p className="mt-2 text-rose-600 font-bold">— MAHATMA GANDHI</p>
                </div>

                <div className="text-slate-700 text-lg leading-relaxed space-y-4 font-medium">
                  <p>
                    We live in a world that is diverse from the one we grew up in.
                    The world today is changing at an exponential rate where we as educators
                    need to pause and envision quality education.
                  </p>
                  <p>
                    We pride ourselves to help children grow and develop into sensitive
                    and responsible citizens of the future.
                  </p>
                </div>

                <div className="pt-8 border-t border-rose-200 flex items-center gap-4">
                  <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    VB
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">The Principal</p>
                    <p className="text-rose-600 font-bold uppercase text-xs tracking-widest">
                      Vidya Bharati School, Raichur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-12">

            {/* Hallmarks */}
            <section style={{ backgroundColor: COLORS.iceBlue }} className="p-10 rounded-[2.5rem] border border-blue-100 shadow-sm">
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase">
                The Vidya Bharati Hallmarks
              </h3>

              <div className="grid gap-4">
                {hallmarks.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white/80 rounded-2xl border hover:shadow-md transition-all">
                    <div style={{ backgroundColor: item.c }} className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl">
                      {item.l}
                    </div>
                    <p className="text-slate-800 font-bold text-lg">{item.t}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats */}
            <section style={{ backgroundColor: COLORS.softYellow }} className="p-10 rounded-[2.5rem] border border-amber-100 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { v: '24+', l: 'Expert Teachers' },
                  { v: '100%', l: 'Safe Campus' },
                  { v: '500+', l: 'Happy Students' },
                  { v: '10+', l: 'Years Legacy' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl font-black text-amber-600">{stat.v}</p>
                    <p className="text-xs font-black text-slate-500 uppercase mt-1">{stat.l}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Vidya Bharati School. All Rights Reserved.
        </p>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default FromPrincipalsDesk;
