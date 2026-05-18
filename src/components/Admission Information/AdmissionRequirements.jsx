import React, { useEffect, useRef, useState } from "react";

/* ======================================================
   SOFT SCHOOL COLOR PALETTE (Professional + Kids Friendly)
====================================================== */
const COLORS = {
  pink: "#FADADD",      // Soft Pink
  yellow: "#FFF6CC",    // Soft Yellow
  iceBlue: "#F0F9FF",   // Ice Blue
  primary: "#2563EB",   // Professional Blue
  dark: "#1F2937",      // Slate Dark
};

/* Scroll Reveal (static – no animation noise) */
const useScrollReveal = () => {
  const ref = useRef(null);
  return [ref, true];
};

/* Scroll To Top */
const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
    >
      ↑
    </button>
  );
};

/* ======================================================
   FOOTER
====================================================== */
const Footer = () => (
  <footer className="mt-20 bg-gray-900 text-gray-300 py-10 px-4">
    <div className="max-w-7xl mx-auto text-center space-y-3">
      <h3 className="text-2xl font-bold text-white">
        VIDYA BHARATI ENGLISH MEDIUM PRIMARY SCHOOL
      </h3>
      <p>CBSE Affiliated | Raichur, Karnataka</p>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Vidya Bharati School. All Rights Reserved.
      </p>
    </div>
  </footer>
);

/* ======================================================
   FROM PRINCIPAL DESK
====================================================== */
const FromPrincipalsDesk = () => {
  const [headerRef] = useScrollReveal();

  return (
    <section
      ref={headerRef}
      className="py-16 px-4"
      style={{ backgroundColor: COLORS.iceBlue }}
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
            From the Principal’s Desk
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to Vidya Bharati English Medium Primary School – a place
            where young minds are nurtured with values, discipline, and quality
            education.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Message */}
          <div
            className="rounded-3xl p-8 shadow-md"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <p className="text-xl leading-relaxed text-gray-800">
              At Vidya Bharati, we believe that education is not just about
              academics, but about shaping responsible, confident, and caring
              individuals. Our school provides a balanced environment that
              encourages curiosity, creativity, and character building from a
              young age.
            </p>

            <p className="mt-6 text-gray-700">
              We ensure every child receives personal attention and holistic
              development through a well-structured CBSE curriculum, trained
              teachers, and a safe learning atmosphere.
            </p>

            <div className="mt-8 font-bold text-gray-900">
              — Principal <br />
              Vidya Bharati School
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "CBSE Curriculum", bg: COLORS.pink },
              { title: "Experienced Faculty", bg: COLORS.iceBlue },
              { title: "Safe Campus", bg: COLORS.yellow },
              { title: "Value-Based Education", bg: COLORS.pink },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 text-center shadow-sm"
                style={{ backgroundColor: item.bg }}
              >
                <h4 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ======================================================
   ADMISSION REQUIREMENTS
====================================================== */
const AdmissionRequirements = () => {
  const Step = ({ num, title, desc }) => (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {num}
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-800">
            Admission Process
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Simple and transparent admission procedure for parents.
          </p>
        </div>

        {/* Eligibility + Age */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-3xl p-8 shadow-md"
            style={{ backgroundColor: COLORS.iceBlue }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Eligibility
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Age criteria as per CBSE norms</li>
              <li>• Basic literacy readiness</li>
              <li>• Interaction with child & parents</li>
            </ul>
          </div>

          <div
            className="rounded-3xl p-8 shadow-md"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Age Criteria
            </h3>
            <p className="text-gray-700">KG – 4+ Years</p>
            <p className="text-gray-700">Grade 1 – 5+ Years</p>
            <p className="text-gray-700">Grade 5 – 9+ Years</p>
          </div>
        </div>

        {/* Steps */}
        <div
          className="rounded-3xl p-10 shadow-md"
          style={{ backgroundColor: COLORS.pink }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Steps to Apply
          </h3>
          <div className="space-y-6">
            <Step
              num="1"
              title="Application Submission"
              desc="Collect and submit the admission form at school office."
            />
            <Step
              num="2"
              title="Interaction"
              desc="Friendly interaction with student and parents."
            />
            <Step
              num="3"
              title="Confirmation"
              desc="Admission confirmation after document verification."
            />
          </div>
        </div>

        {/* Contact */}
        <div
          className="rounded-3xl p-10 text-center shadow-md"
          style={{ backgroundColor: COLORS.iceBlue }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Admissions
          </h3>
          <p className="text-lg text-gray-700">
            📧 vbskcbse2014@gmail.com
          </p>
          <p className="text-lg text-gray-700">
            📞 +91 8532-221980
          </p>
        </div>
      </div>
    </section>
  );
};

/* ======================================================
   MAIN APP
====================================================== */
const App = () => {
  return (
    <div className="min-h-screen font-['Poppins'] bg-gray-50">
      <FromPrincipalsDesk />
      <AdmissionRequirements />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
