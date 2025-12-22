import React, { useEffect, useState, Fragment } from "react";
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
  const [mobileSubMenus, setMobileSubMenus] = useState({
    about: false,
    admission: false
  });
  const [admissionHover, setAdmissionHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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

  const firstSubNavItems = [
    { label: "Management", to: "/management" },
    { label: "Vision & Mission", to: "/mission-vision" },
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

  const mobileNavItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about", hasDropdown: true, items: aboutItems },
    { label: "ADMISSIONS", to: "/admission", hasDropdown: true, items: admissionItems },
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
      transition: { type: "spring", stiffness: 350, damping: 25 }
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
  };

  const mobileSubMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.15 }
    }
  };

  // Nav scroll logic - all three nav sections stick together
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Scroll down > 100px - all three nav sections become sticky
        setIsNavSticky(true);
      } else {
        // Scroll to top - all three nav sections return to normal position
        setIsNavSticky(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubMenus({ about: false, admission: false });
  }, [location.pathname]);

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <Fragment>
      {/* Main Container - fixed position with transform based on scroll */}
      <motion.div 
        className="w-full fixed top-0 z-50 transition-all duration-300 shadow-xl"
        style={{ 
          backgroundColor: brandDarkBlue,
          transform: isNavSticky ? "translateY(-40px)" : "translateY(0px)"
        }}
      >
        {/* Progress Bar */}
        <div className="relative">
          <motion.div 
            style={{ scaleX: progress }} 
            className="origin-left h-1 bg-yellow-400 z-10 relative"
          />
        </div>

        {/* 1. FIRST SUB-NAV - All three nav sections stick together */}
        <div className="w-full py-1 border-b border-white/10 bg-gradient-to-r from-blue-900/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="hidden md:flex items-center justify-center w-full space-x-6 text-[10px] font-medium text-white/80 uppercase py-1">
              {firstSubNavItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <Link 
                    to={item.to} 
                    className={`hover:text-yellow-400 transition-colors whitespace-nowrap ${location.pathname === item.to ? "text-yellow-400 font-bold" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {idx < firstSubNavItems.length - 1 && <div className="w-px h-2 bg-white/20" />}
                </React.Fragment>
              ))}
            </div>
            
            {/* Mobile version of first sub-nav in menu */}
            <div className="md:hidden flex items-center justify-center w-full space-x-4 text-[9px] font-medium text-white/80 uppercase py-1 overflow-x-auto">
              {firstSubNavItems.slice(0, 4).map((item, idx) => (
                <React.Fragment key={item.label}>
                  <Link 
                    to={item.to} 
                    className="hover:text-yellow-400 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  {idx < 3 && <div className="w-px h-2 bg-white/20" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 2. SECOND SUB-NAV (BRANDING) */}
        <div className="w-full bg-black/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="flex items-center gap-3 md:gap-4">
                <div className="rounded-full bg-white p-1 shadow-lg">
                  <img src={logoImage} alt="School Logo" className="w-10 h-10 md:w-11 md:h-11 object-cover rounded-full" />
                </div>
                <div>
                  <div 
                    className="text-lg md:text-xl lg:text-2xl font-black tracking-tighter leading-none"
                    style={{ color: brandPink }}
                  >
                    VIDYA BHARATI ENGLISH
                  </div>
                  <div 
                    className="text-[10px] md:text-[12px] lg:text-sm font-bold tracking-wide uppercase leading-tight"
                    style={{ color: brandSkyBlue }}
                  >
                    MEDIUM PRIMARY SCHOOL (CBSE)
                  </div>
                </div>
              </Link>

              {/* Desktop Contact Info */}
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

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        {/* 3. MAIN NAVIGATION */}
        <div className="w-full py-0 bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="hidden md:flex items-center justify-center">
              {mainNavItems.map((item) => {
                const isAbout = item.label === "ABOUT US";
                const isAdmission = item.label === "ADMISSIONS";
                
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => { 
                      if(isAbout) setAboutHover(true); 
                      if(isAdmission) setAdmissionHover(true); 
                    }}
                    onMouseLeave={() => { 
                      if(isAbout) setAboutHover(false); 
                      if(isAdmission) setAdmissionHover(false); 
                    }}
                  >
                    <Link 
                      to={item.to} 
                      className={`px-4 py-3 text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-1 transition-colors ${isActive(item.to)}`}
                    >
                      {item.label}
                      {(isAbout || isAdmission) && (
                        <motion.span
                          animate={{ rotate: (isAbout && aboutHover) || (isAdmission && admissionHover) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown />
                        </motion.span>
                      )}
                    </Link>

                    <AnimatePresence>
                      {((isAbout && aboutHover) || (isAdmission && admissionHover)) && (
                        <motion.div
                          initial="hidden" 
                          animate="visible" 
                          exit="exit" 
                          variants={dropdownVariants}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white rounded-b-xl shadow-2xl py-2 mt-0 overflow-hidden z-50 border border-gray-100"
                        >
                          {(isAbout ? aboutItems : admissionItems).map((sub) => (
                            <Link 
                              key={sub.label} 
                              to={sub.to} 
                              className={`block px-4 py-2.5 text-sm transition-colors font-semibold ${location.pathname === sub.to ? "bg-yellow-50 text-yellow-700" : "text-gray-700 hover:bg-gray-50"}`}
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

        {/* Mobile Menu - Also moves with sticky header */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a4d6e] border-t border-white/10 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto shadow-inner"
            >
              {mobileNavItems.map(item => (
                <div key={item.label} className="border-b border-white/5 last:border-b-0">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubMenu(item.label.toLowerCase().replace(' ', ''))}
                        className="w-full flex justify-between items-center text-white font-bold py-3 text-sm hover:bg-white/10 px-2 rounded transition-colors"
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: mobileSubMenus[item.label.toLowerCase().replace(' ', '')] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown />
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {mobileSubMenus[item.label.toLowerCase().replace(' ', '')] && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={mobileSubMenuVariants}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 pr-2 pb-2 space-y-1">
                              {item.items.map(subItem => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.to}
                                  className={`block py-2 px-3 text-white/90 text-sm rounded transition-colors ${location.pathname === subItem.to ? "bg-white/20 text-white font-bold" : "hover:bg-white/10"}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className={`block text-white font-bold py-3 text-sm hover:bg-white/10 px-2 rounded transition-colors ${location.pathname === item.to ? "bg-white/20" : ""}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Quick Links in Mobile Menu */}
              <div className="pt-4 mt-2 border-t border-white/20">
                <p className="text-yellow-400 text-[10px] uppercase font-black tracking-widest mb-3 px-2">Quick Links</p>
                <div className="grid grid-cols-2 gap-2">
                  {firstSubNavItems.map(item => (
                    <Link 
                      key={item.label} 
                      to={item.to} 
                      className={`text-white/90 text-[11px] font-semibold py-2 px-3 rounded transition-colors text-center ${location.pathname === item.to ? "bg-white/20 text-white" : "hover:bg-white/10"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-white/20">
                <p className="text-yellow-400 text-[10px] uppercase font-black tracking-widest mb-3 px-2">Contact Info</p>
                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/10 rounded-full flex-shrink-0"><PhoneIcon /></div>
                    <div>
                      <p className="text-[9px] opacity-60 font-bold uppercase leading-none">Call Us</p>
                      <p className="text-xs font-bold text-white">+91 8532-221980</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/10 rounded-full flex-shrink-0"><MailIcon /></div>
                    <div>
                      <p className="text-[9px] opacity-60 font-bold uppercase leading-none">Email</p>
                      <p className="text-xs font-bold text-white">vbskcbse2014@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Spacer div that adjusts height based on sticky state */}
      <motion.div 
        className="w-full"
        animate={{ 
          height: isNavSticky ? "100px" : "140px" 
        }}
        transition={{ duration: 0.3 }}
        aria-hidden="true" 
      />
    </Fragment>
  );
};

export default Navbar;