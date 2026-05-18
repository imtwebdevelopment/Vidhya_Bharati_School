import React, { useRef } from "react";
import { Link } from "react-router-dom";

/* ======================================================
   SCHOOL FRIENDLY COLOR PALETTE
====================================================== */
const COLORS = {
  pink: "#FADADD",     // Soft Pink
  yellow: "#FFF6CC",   // Soft Yellow
  iceBlue: "#F0F9FF",  // Ice Blue
  textDark: "#1F2937",
};

/* Static Reveal Hook */
const useScrollReveal = () => {
  const ref = useRef(null);
  return [ref, true];
};

/* Step Card */
const StepItem = ({ step, title, desc, icon }) => {
  const [ref] = useScrollReveal();

  return (
    <div ref={ref} className="flex items-start gap-6">
      <div className="relative shrink-0">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md"
          style={{ backgroundColor: COLORS.iceBlue }}
        >
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {step}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

/* ======================================================
   APPLICATION PROCESS PAGE
====================================================== */
const ApplicationProcess = () => {
  const [headerRef] = useScrollReveal();

  return (
    <div className="min-h-screen font-['Poppins'] bg-gray-50">
      {/* HEADER */}
      <header
        ref={headerRef}
        className="py-16 px-4"
        style={{ backgroundColor: COLORS.iceBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: COLORS.yellow }}
          >
            Admissions 2025 – 26
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Admission Process
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl">
            Vidya Bharati English Medium Primary School follows a simple,
            transparent and parent-friendly admission procedure to ensure the
            best learning environment for every child.
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-14">
          {/* LEFT – STEPS */}
          <div className="lg:col-span-7 space-y-12">
            <StepItem
              step="1"
              icon="📝"
              title="Application Form"
              desc="Parents can collect the admission form from the school office or download it from our website and submit the completed form."
            />

            <StepItem
              step="2"
              icon="📄"
              title="Document Submission"
              desc="Submit photocopies of Birth Certificate, previous school records (if applicable), and recent passport size photographs."
            />

            <StepItem
              step="3"
              icon="👨‍👩‍👧"
              title="Parent–Child Interaction"
              desc="A simple interaction will be conducted to understand the child’s readiness and to address parents’ queries."
            />

            <StepItem
              step="4"
              icon="✅"
              title="Admission Confirmation"
              desc="Selected students will receive confirmation. Parents are requested to complete the fee formalities within the given time."
            />

            <StepItem
              step="5"
              icon="🎒"
              title="School Onboarding"
              desc="After confirmation, parents can collect books, uniforms and academic guidelines before the academic year begins."
            />
          </div>

          {/* RIGHT – SUPPORT */}
          <div className="lg:col-span-5 space-y-8">
            {/* CONTACT CARD */}
            <div
              className="rounded-3xl p-8 shadow-md"
              style={{ backgroundColor: COLORS.pink }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Admission Office
              </h3>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Phone:</strong> +91 8532-221980
                </p>
                <p>
                  <strong>Email:</strong> vbskcbse2014@gmail.com
                </p>
                <p>
                  <strong>Office Hours:</strong> 9:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            {/* DOWNLOAD */}
            <div
              className="rounded-3xl p-8 shadow-md"
              style={{ backgroundColor: COLORS.iceBlue }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                School Prospectus
              </h3>
              <p className="text-gray-600 mb-6">
                Download our prospectus to know more about curriculum,
                facilities, and school values.
              </p>

              <button className="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white">
                Download Prospectus
              </button>
            </div>

            {/* FAQ */}
            <div
              className="rounded-3xl p-8 shadow-md"
              style={{ backgroundColor: COLORS.yellow }}
            >
              <h4 className="font-bold text-gray-900 mb-2">
                Have Questions?
              </h4>
              <p className="text-gray-700 mb-4">
                Visit our FAQ section for common admission-related queries.
              </p>

              <Link
                to="/faq"
                className="font-semibold text-blue-700 underline"
              >
                View FAQs →
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="mt-20">
          <div
            className="rounded-3xl p-12 text-center shadow-md"
            style={{ backgroundColor: COLORS.pink }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Child’s Learning Journey With Us
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Limited seats available for the academic year 2025–26. Early
              registration is encouraged.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/admission-requirements"
                className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                View Admission Requirements
              </Link>

              <button className="px-8 py-3 rounded-xl border border-gray-400 font-semibold">
                Visit Campus
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ApplicationProcess />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-white shadow-md border text-gray-600"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
