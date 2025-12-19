import React, { useState } from 'react';

// Professional Academic Palette
const COLORS = {
  primary: '#0a4d6e',    // Deep Navy (from your Navbar)
  secondary: '#ff7eb9',  // Pink Accent
  accent: '#facc15',     // Yellow/Gold
  slate: '#64748b',
  bgLight: '#f8fafc',
};

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .pro-input {
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
    border-radius: 0.5rem;
  }

  .pro-input:focus {
    border-color: ${COLORS.primary};
    box-shadow: 0 0 0 4px rgba(10, 77, 110, 0.1);
    outline: none;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .map-container {
    filter: grayscale(0.2) contrast(1.1);
    transition: filter 0.3s ease;
  }

  .map-container:hover {
    filter: grayscale(0);
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Our Campus',
      detail: 'Yeramaras Camp, Raichur, Karnataka - 584134',
      subDetail: 'Visit us Mon-Sat: 8:30 AM - 4:00 PM'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Support',
      detail: '+91 8532-221980',
      subDetail: 'Admissions: +91 8532-221981'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Queries',
      detail: 'vbskcbse2014@gmail.com',
      subDetail: 'Response time: Within 24 hours'
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="bg-[#f8fafc] min-h-screen font-['Inter', 'sans-serif']">
        
        {/* Professional Hero Section */}
        <div className="relative bg-[#0a4d6e] py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Contact <span className="text-yellow-400">Our Office</span>
            </h1>
            <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-blue-100 text-lg md:text-xl font-light leading-relaxed">
              Whether you are a prospective parent or a current member of our community, 
              we are here to assist with your inquiries.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-12 pb-20 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Column: Info & Map */}
            <div className="lg:col-span-4 space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#0a4d6e]">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{info.title}</h3>
                    <p className="text-[#0a4d6e] font-semibold mt-1">{info.detail}</p>
                    <p className="text-slate-500 text-sm mt-1">{info.subDetail}</p>
                  </div>
                </div>
              ))}

              {/* Mini Map */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                  <span className="font-bold text-slate-700">Location Map</span>
                  <a href="https://maps.google.com" className="text-xs text-blue-600 font-bold hover:underline">Open in Maps</a>
                </div>
                <div className="h-64 bg-slate-200 map-container">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.571408354673!2d77.3619553!3d16.2155694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb999427b3d304b%3A0xc33e14620f4f954b!2sYeramaras%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000" 
                      className="w-full h-full border-0"
                      allowFullScreen="" 
                      loading="lazy"
                      title="School Location"
                    ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send an Inquiry</h2>
                <p className="text-slate-500 mb-8 italic">Please fill out the form below and our administrative team will contact you shortly.</p>

                {status === 'success' && (
                  <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-lg font-medium animate-fade-in">
                    Thank you. Your message has been received successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" required
                        className="w-full p-3 pro-input bg-white text-slate-800"
                        placeholder="e.g., John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" required
                        className="w-full p-3 pro-input bg-white text-slate-800"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Contact Number</label>
                      <input 
                        type="tel" required
                        className="w-full p-3 pro-input bg-white text-slate-800"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                      <select 
                        className="w-full p-3 pro-input bg-white text-slate-800"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      >
                        <option value="">Select Purpose</option>
                        <option value="admissions">Admission Inquiry</option>
                        <option value="fees">Fee Structure</option>
                        <option value="employment">Career Opportunities</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Detailed Message</label>
                    <textarea 
                      rows="5" required
                      className="w-full p-3 pro-input bg-white text-slate-800 resize-none"
                      placeholder="Please provide details regarding your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="bg-[#0a4d6e] hover:bg-[#073a54] text-white px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-3 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Processing...' : 'Submit Inquiry'}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;