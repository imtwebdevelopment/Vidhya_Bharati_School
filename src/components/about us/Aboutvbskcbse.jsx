import React, { useState, useEffect } from "react";

/* ================= COLORS ================= */
const COLORS = {
  primary: "#FF6B8B",
  secondary: "#4ECDC4",
  accent: "#FFD166",
  blueDark: "#0977b3",
  light: "#f8fafc",
};

/* ================= DATA ================= */
const FEATURES = [
  {
    title: "Happy Classrooms",
    description:
      "Our classrooms are designed to be safe, welcoming, and child-friendly, where students feel comfortable, confident, and motivated to learn every day.",
  },
  {
    title: "Strong Basics",
    description:
      "We focus on building a strong foundation in reading, writing, numeracy, and critical thinking through age-appropriate teaching methods.",
  },
  {
    title: "Creative Activities",
    description:
      "Students actively participate in art, music, craft, storytelling, and celebrations that encourage creativity and self-expression.",
  },
  {
    title: "Value Education",
    description:
      "Moral values, discipline, respect, patriotism, and social responsibility are integrated into daily learning and school life.",
  },
];

const SCHOOL_INFO = [
  { label: "Pre-Primary", value: "Nursery • LKG • UKG" },
  { label: "Primary", value: "Classes I – V" },
  { label: "Board", value: "CBSE (Affiliation No: 830589)" },
  { label: "Location", value: "Raichur, Karnataka" },
];

/* ================= COMPONENT ================= */
function AboutVBSKCBSE() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-['Poppins'] text-gray-800 bg-gray-50">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            VIDYA BHARATI
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6 text-yellow-300">
            English Medium Primary School (CBSE)
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            Vidya Bharati English Medium Primary School is committed to nurturing
            young minds through quality education rooted in Indian culture,
            discipline, and values. We aim to create confident learners who are
            academically strong and socially responsible.
          </p>
        </div>
      </section>

      {/* ================= ABOUT / VIDYA ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            The Vidya Bharati Philosophy
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mb-10"></div>

          <p className="text-lg text-gray-600 max-w-4xl mb-6 leading-relaxed">
         	The Vidya Bharati CBSE School’s journey towards education excellence began in 2014 with an
            ideal mix of academic and corporate professionals who felt the shared need to provide 
            inclusive education. At VIDAY BHARATI CBSE Schools, we challenge our students with a
             unique educational experience which emphasises a seamless blend of academics, sports,
              performing arts, community and experiential learning programmes. Today we are one of the 
              leading schools in the nation, offering a wide choice of educational streams such as the Council 
              for The Indian School Certificate Examinations (CISCE), Central Board of Secondary Education
               (CBSE) and University of Cambridge International Education (CIE) as well as the option of
                National and International curriculum for students up to Grades K-12.

          </p>
          <div className="space-y-5">
            {[
              ["V", "Value-based Education"],
              ["I", "Intellectual Growth"],
              ["D", "Disciplined Life"],
              ["Y", "Yearning for Knowledge"],
              ["A", "Abiding Patriotism"],
            ].map(([letter, text]) => (
              <div key={letter} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {letter}
                </div>
                <span className="text-lg font-medium text-gray-700">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Why Choose Our School
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-6" style={{ backgroundColor: COLORS.blueDark }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 text-white">
          <div className="bg-white/10 p-8">
            <h3 className="text-3xl font-extrabold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
            "To provide our students ample opportunities and means to help them imbibe, all into their character that is fair, moral and pious. To impart a strong sense of culture, values and deep knowledge to our students,
             so that each one is looked upon as a role model by the present and following generations".
            </p>

            <p  className="text-lg opacity-90 leading-relaxed">
             " To impart value based Quality Education with an analytical approach to enable
               students to convert acquired knowledge into wisdom which help them to be worthy human beings".
            </p>
          </div>

          <div className="bg-white/10 p-8">
            <h3 className="text-3xl font-extrabold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
            "	At VBSK Institution, education is a noble instrument with which we mould 
            future generations into responsible citizens and good human beings"
            </p>
          </div>
        </div>
      </section>

      {/* ================= SCHOOL INFO ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOOL_INFO.map((info) => (
            <div
              key={info.label}
              className="border border-gray-200 p-6 text-center shadow-sm"
            >
              <div className="text-sm text-gray-500">{info.label}</div>
              <div className="text-lg font-bold text-gray-800 mt-2">
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <footer
        id="contact"
        className="py-20 px-6 text-white"
        style={{ backgroundColor: COLORS.blueDark }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-6">Contact Us</h3>
          <p className="text-lg mb-4">
            Email:{" "}
            <a href="mailto:vbskcbse2014@gmail.com" className="underline">
              vbskcbse2014@gmail.com
            </a>
          </p>
          <p className="text-lg mb-8">
            Phone:{" "}
            <a href="tel:+918532221980" className="underline">
              +91 8532-221980
            </a>
          </p>

          <p className="text-base opacity-80 max-w-3xl mx-auto leading-relaxed mb-6">
            We welcome parents and guardians to visit our campus and experience
            our learning environment. Our staff is always ready to guide you
            through admissions and academic details.
          </p>

          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Vidya Bharati English Medium Primary School (CBSE) <br />
            Raichur, Karnataka
          </p>
        </div>
      </footer>

      {/* ================= SCROLL TOP ================= */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default AboutVBSKCBSE;
