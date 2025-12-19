import React, { useEffect, useRef, useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import logoImage from "../assets/Emblemlogo.jpg";

// --- Icons ---
const PhoneIcon = () => <span className="text-lg">📞</span>;
const MailIcon = () => <span className="text-lg">📧</span>;
const MenuIcon = (props) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const ChevronDown = (props) => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [admissionHover, setAdmissionHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);
  const location = useLocation();
  const tickingRef = useRef(false);

  // Exact Colors
  const brandDarkBlue = "#0a4d6e"; 
  const brandPink = "#ff7eb9";
  const brandSkyBlue = "#33ccff";

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 250, damping: 30, mass: 0.2 });

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-400 font-extrabold" : "text-white/90 hover:text-yellow-400";

  // Navigation Data
  const aboutItems = [
    { label: "About VBSK", to: "/about" },
    { label: "Principal's Desk", to: "/about/principal" },
  ];

  const admissionItems = [
    { label: "Requirements", to: "/admission-requirements" },
    { label: "Application Process", to: "/admission-process" },
    { label: "Documents", to: "/required-documents" },
    { label: "Fees & Charges", to: "/fees" },
    { label: "Scholarships", to: "/scholarships" },
    { label: "Online Form", to: "/onlineformfields" },
  ];

  const subNavItems = [
    { label: "Management", to: "/management" },
    { label: " Vision & Mission", to: "/mission-vision" },
    { label: "Activities", to: "/schoollife-activities"},
    { label: "History", to: "/history" },
    { label: "Our Staff", to: "/our-staff" },
    { label: "Accreditations", to: "/accreditations" },
  ];

  const mainNavItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about", hasDropdown: true },
    { label: "ADMISSIONS", to: "/admission", hasDropdown: true },
    { label: "ACADEMICS", to: "/MandatoryPublicdisClosure" },
    { label: "GALLERY", to: "/gallery" },
    { label: "CONTACT", to: "/contact" },
    { label: "NEWS", to: "/news" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 350, damping: 25, staggerChildren: 0.03, delayChildren: 0.02 },
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
  };

  // --- REDUCED HEIGHTS ---
  const subNavH = 32;     // Reduced from 40
  const logoRowH = 80;    // Reduced from 100
  const totalHiddenHeight = subNavH + logoRowH;
  const yOffset = isCondensed ? -totalHiddenHeight : 0;
  const spacerHeight = totalHiddenHeight + 40; // Reduced gap

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setIsCondensed(y > 20);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <motion.div 
        className="w-full fixed top-0 z-50 shadow-2xl" 
        animate={{ y: yOffset }} 
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        style={{ backgroundColor: brandDarkBlue }}
      >
        {/* Progress Bar */}
        <div className="relative">
          <motion.div 
            style={{ scaleX: progress }} 
            className="origin-left h-1 bg-yellow-400 z-10 relative"
          />
        </div>

        {/* Sub-Navigation */}
        <div className="w-full py-1 border-b border-white/10" style={{ height: `${subNavH}px` }}>
          <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
            <div className="hidden md:flex items-center justify-center w-full space-x-6 text-[10px] font-medium text-white/80 uppercase">
              {subNavItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <Link to={item.to} className="hover:text-yellow-400 transition-colors">
                    {item.label}
                  </Link>
                  {idx < subNavItems.length - 1 && <div className="w-px h-2 bg-white/20" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* BRANDING SECTION */}
        <div className="max-w-7xl mx-auto px-4 flex items-center" style={{ height: `${logoRowH}px` }}>
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-4">
              <div className="rounded-full bg-white p-1 shadow-lg">
                <img src={logoImage} alt="Logo" className="w-11 h-11 object-cover rounded-full" />
              </div>
              <div>
                <div 
                  className="text-xl md:text-2xl font-black tracking-tighter leading-none"
                  style={{ color: brandPink }}
                >
                  VIDYA BHARATI ENGLISH
                </div>
                <div 
                  className="text-[12px] md:text-sm font-bold tracking-wide uppercase leading-tight"
                  style={{ color: brandSkyBlue }}
                >
                  MEDIUM PRIMARY SCHOOL (CBSE)
                </div>
              </div>
            </Link>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-5 text-white">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-full"><PhoneIcon /></div>
                <div>
                    <p className="text-[9px] opacity-60 font-bold uppercase leading-none">Call Us</p>
                    <p className="text-xs font-bold">+91 8532-221980</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-full"><MailIcon /></div>
                <div>
                    <p className="text-[9px] opacity-60 font-bold uppercase leading-none">Email</p>
                    <p className="text-xs font-bold">vbskcbse2014@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="w-full py-0 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
            <button 
              className="md:hidden text-white py-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon />
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const isAbout = item.label === "ABOUT US";
                const isAdmission = item.label === "ADMISSIONS";
                
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => { if(isAbout) setAboutHover(true); if(isAdmission) setAdmissionHover(true); }}
                    onMouseLeave={() => { setAboutHover(false); setAdmissionHover(false); }}
                  >
                    <Link 
                        to={item.to} 
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-1 ${isActive(item.to)}`}
                    >
                      {item.label}
                      {(isAbout || isAdmission) && <ChevronDown />}
                    </Link>

                    <AnimatePresence>
                      {((isAbout && aboutHover) || (isAdmission && admissionHover)) && (
                        <motion.div
                          initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}
                          className="absolute top-full left-0 w-52 bg-white rounded-b-xl shadow-2xl py-1 mt-0 overflow-hidden"
                        >
                          {(isAbout ? aboutItems : admissionItems).map((sub) => (
                            <Link 
                                key={sub.label} to={sub.to} 
                                className="block px-4 py-1.5 text-xs text-slate-800 hover:bg-slate-100 transition-colors font-semibold"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a4d6e] border-t border-white/10 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto"
            >
              {mainNavItems.map(item => (
                <div key={item.label}>
                  <Link to={item.to} className="block text-white font-bold py-1.5 border-b border-white/5 text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className="pt-2 mt-2 border-t border-white/20">
                <p className="text-yellow-400 text-[9px] uppercase font-black tracking-widest mb-2">Quick Links</p>
                <div className="grid grid-cols-2 gap-2">
                  {subNavItems.map(item => (
                    <Link 
                      key={item.label} 
                      to={item.to} 
                      className="text-white/80 text-[11px] font-semibold py-1 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div style={{ height: `${spacerHeight}px` }} aria-hidden="true" />
    </Fragment>
  );
};

export default Navbar;