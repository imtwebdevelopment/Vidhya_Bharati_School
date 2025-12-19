import React, { useState } from "react";

/* ======================================================
   SCHOOL COLOR PALETTE (Soft & Professional)
====================================================== */
const COLORS = {
  pink: "#FADADD",
  yellow: "#FFF6CC",
  iceBlue: "#F0F9FF",
  textDark: "#1F2937",
};

/* ======================================================
   ADMISSION COMPONENT
====================================================== */
const Admission = () => {
  const [activeTab, setActiveTab] = useState("process");

  const processSteps = [
    {
      title: "Application Submission",
      desc: "Parents can submit the admission application form either online or at the school office.",
      icon: "📝",
    },
    {
      title: "Student & Parent Interaction",
      desc: "A simple and friendly interaction to understand the child’s readiness and parent expectations.",
      icon: "🤝",
    },
    {
      title: "Document Verification",
      desc: "Verification of birth certificate, previous school records and required documents.",
      icon: "📎",
    },
    {
      title: "Admission Confirmation",
      desc: "After approval, parents complete fee formalities and confirm admission.",
      icon: "🎒",
    },
  ];

  const requirements = [
    "Birth Certificate (Original & Copy)",
    "Recent Passport Size Photographs (4)",
    "Previous School Records (if applicable)",
    "Transfer Certificate (for Grade 1 & above)",
    "Aadhaar Card (Student & Parents)",
  ];

  const faqs = [
    {
      q: "What is the age criteria for Nursery?",
      a: "The child should have completed 3 years as on 31st March of the academic year.",
    },
    {
      q: "Is school transport available?",
      a: "Yes, transport facility is available on selected routes, subject to availability.",
    },
    {
      q: "What is the teacher–student ratio?",
      a: "We maintain a healthy ratio to ensure individual attention for every child.",
    },
  ];

  return (
    <div className="min-h-screen font-['Poppins'] bg-gray-50 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-24 px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative max-w-5xl mx-auto">
          <span
            className="inline-block px-6 py-2 rounded-full font-semibold mb-6"
            style={{ backgroundColor: COLORS.yellow }}
          >
            Admissions Open 2025 – 26
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Admission Process
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Vidya Bharati English Medium Primary School offers a simple,
            transparent, and child-friendly admission process that focuses on
            holistic development and academic excellence.
          </p>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["process", "requirements", "faq"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold capitalize ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        {activeTab === "process" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-md text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: COLORS.iceBlue }}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "requirements" && (
          <div
            className="rounded-3xl p-10 shadow-md"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Required Documents
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {requirements.map((item, i) => (
                <li
                  key={i}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <span className="text-green-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <h4 className="font-bold text-lg mb-2">
                  Q. {faq.q}
                </h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: COLORS.pink }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Need Admission Guidance?
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Our admission office is available Monday to Saturday, 9:00 AM to
            4:00 PM.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:+918532221980"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold"
            >
              Call: +91 8532-221980
            </a>
            <a
              href="mailto:vbskcbse2014@gmail.com"
              className="px-8 py-4 bg-white rounded-xl font-semibold border"
            >
              Email Admissions
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-600">
            © {new Date().getFullYear()} Vidya Bharati English Medium Primary
            School. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Admission;
