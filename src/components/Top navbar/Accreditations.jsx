import React, { useState } from "react";
import { FiDownload, FiExternalLink, FiCheckCircle, FiFileText } from "react-icons/fi";

/* ======================================================
   SCHOOL COLOR PALETTE (Soft & Professional)
====================================================== */
const COLORS = {
  pink: "#FADADD",     // Soft Pink
  yellow: "#FFF6CC",   // Soft Yellow
  iceBlue: "#F0F9FF",  // Ice Blue
  textDark: "#1F2937",
};

/* ======================================================
   SCHOOL ACCREDITATION INFO
====================================================== */
const ACCR_INFO = {
  board: "CBSE (Central Board of Secondary Education)",
  affNo: "830589",
  schoolCode: "45582",
  validity: "Affiliation valid as per latest CBSE records",
  year: "Established in 2014",
};

const certificates = [
  {
    title: "CBSE Affiliation Letter",
    desc: "Official CBSE affiliation document with validity details.",
    file: "/docs/cbse-affiliation-letter.pdf",
    size: "2.4 MB",
    pages: 4,
    icon: FiFileText,
    bg: COLORS.iceBlue,
  },
  {
    title: "State Government Recognition",
    desc: "Recognition issued by the State Education Department.",
    file: "/docs/state-recognition.pdf",
    size: "1.8 MB",
    pages: 3,
    icon: FiCheckCircle,
    bg: COLORS.yellow,
  },
  {
    title: "Trust / Society Registration",
    desc: "Registration certificate of the managing trust.",
    file: "/docs/trust-registration.pdf",
    size: "3.2 MB",
    pages: 6,
    icon: FiFileText,
    bg: COLORS.pink,
  },
  {
    title: "Fire & Safety Compliance",
    desc: "Fire safety and building safety compliance certificates.",
    file: "/docs/safety-compliance.pdf",
    size: "4.1 MB",
    pages: 8,
    icon: FiCheckCircle,
    bg: COLORS.iceBlue,
  },
];

const recognitions = [
  {
    icon: "🏅",
    title: "Academic Quality",
    text: "Well-structured curriculum aligned with CBSE & NEP 2020.",
  },
  {
    icon: "🛡️",
    title: "Child Safety",
    text: "Strict child protection policy and trained staff.",
  },
  {
    icon: "♿",
    title: "Inclusive Education",
    text: "Supportive learning environment for every child.",
  },
  {
    icon: "🌱",
    title: "Green Practices",
    text: "Eco-friendly initiatives and awareness programs.",
  },
];

const steps = [
  {
    title: "Affiliation & Recognition",
    text: "All statutory approvals are obtained and renewed as per CBSE and State norms.",
  },
  {
    title: "Policy Implementation",
    text: "School policies strictly follow CBSE guidelines and NEP standards.",
  },
  {
    title: "Infrastructure & Safety",
    text: "Regular inspections for classrooms, transport, and safety systems.",
  },
  {
    title: "Transparency",
    text: "Mandatory public disclosures are made available for parents.",
  },
];

const faqs = [
  {
    q: "What is the CBSE Affiliation Number of the school?",
    a: `Affiliation No.: ${ACCR_INFO.affNo}, School Code: ${ACCR_INFO.schoolCode}.`,
  },
  {
    q: "Is the CBSE affiliation currently valid?",
    a: ACCR_INFO.validity,
  },
  {
    q: "Are mandatory disclosures available?",
    a: "Yes, all CBSE-mandated disclosures are published on the school website.",
  },
  {
    q: "Can parents verify original documents?",
    a: "Yes, parents may visit the school office during working hours for verification.",
  },
];

const Accreditations = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gray-50 font-['Poppins'] text-gray-800">
      {/* ================= HEADER ================= */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: COLORS.iceBlue }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Accreditations & Compliance
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vidya Bharati English Medium Primary School follows all CBSE and
            statutory requirements to ensure quality education and student safety.
          </p>
        </div>
      </section>

      {/* ================= KEY DETAILS ================= */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Affiliated Board", value: ACCR_INFO.board },
            { label: "Affiliation Number", value: ACCR_INFO.affNo },
            { label: "School Code", value: ACCR_INFO.schoolCode },
            { label: "Established", value: ACCR_INFO.year },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <p className="text-sm text-gray-500 mb-2">{item.label}</p>
              <p className="text-lg font-bold text-gray-900">{item.value}</p>
              <div className="mt-3 flex justify-center items-center gap-1 text-green-600 text-sm">
                <FiCheckCircle /> Verified
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: COLORS.yellow }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Official Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-md"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-4"
                    style={{ backgroundColor: cert.bg }}
                  >
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-4">{cert.desc}</p>

                  <p className="text-sm text-gray-500 mb-4">
                    File: {cert.size} • {cert.pages} pages
                  </p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold"
                  >
                    <FiDownload /> Download PDF <FiExternalLink />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RECOGNITIONS ================= */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Quality & Safety Commitments
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.map((rec, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm text-center"
            >
              <div className="text-4xl mb-4">{rec.icon}</div>
              <h3 className="text-lg font-bold mb-2">{rec.title}</h3>
              <p className="text-gray-600 text-sm">{rec.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMPLIANCE PROCESS ================= */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: COLORS.pink }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Compliance Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <h4 className="font-semibold">{faq.q}</h4>
              {openFaq === i && (
                <p className="mt-3 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <footer className="py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vidya Bharati English Medium Primary School.
        All accreditations are subject to CBSE and Government norms.
      </footer>
    </div>
  );
};

export default Accreditations;
