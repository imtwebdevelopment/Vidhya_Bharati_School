import React, { useState } from "react";

/* ======================================================
   SCHOOL COLOR PALETTE (Soft & Professional)
====================================================== */
const COLORS = {
  pink: "#FADADD",     // Soft Pink
  yellow: "#FFF6CC",   // Soft Yellow
  iceBlue: "#F0F9FF",  // Ice Blue
  textDark: "#1F2937",
};

const RequiredDocuments = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const schoolDocuments = [
    {
      id: 1,
      title: "Admission Application Form",
      category: "Admission",
      description:
        "Official admission application form for the current academic year.",
      fileType: "PDF",
      size: "2.1 MB",
      lastUpdated: "Jan 2024",
      icon: "📋",
      bg: COLORS.pink,
    },
    {
      id: 2,
      title: "School Prospectus",
      category: "Information",
      description:
        "Detailed information about the school, curriculum, facilities, and values.",
      fileType: "PDF",
      size: "8.5 MB",
      lastUpdated: "Jan 2024",
      icon: "📘",
      bg: COLORS.iceBlue,
    },
    {
      id: 3,
      title: "Fee Structure",
      category: "Finance",
      description:
        "Grade-wise fee details including tuition and other applicable charges.",
      fileType: "PDF",
      size: "1.2 MB",
      lastUpdated: "Jan 2024",
      icon: "💰",
      bg: COLORS.yellow,
    },
    {
      id: 4,
      title: "Academic Calendar",
      category: "Events",
      description:
        "List of holidays, examinations, and important academic dates.",
      fileType: "PDF",
      size: "1.8 MB",
      lastUpdated: "Jan 2024",
      icon: "📅",
      bg: COLORS.iceBlue,
    },
    {
      id: 5,
      title: "Transport Information",
      category: "Services",
      description:
        "School transport routes, pickup points, and timing information.",
      fileType: "PDF",
      size: "3.4 MB",
      lastUpdated: "Feb 2024",
      icon: "🚌",
      bg: COLORS.pink,
    },
  ];

  const categories = [
    "All",
    "Admission",
    "Information",
    "Finance",
    "Events",
    "Services",
  ];

  const filteredDocs = schoolDocuments.filter((doc) => {
    const matchCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-14 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Required Documents
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Parents can download all essential admission and school-related
            documents from this section for easy reference.
          </p>
        </div>

        {/* FILTER + SEARCH */}
        <div
          className="rounded-3xl p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center shadow-sm"
          style={{ backgroundColor: COLORS.iceBlue }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search documents..."
            className="w-full md:w-80 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* DOCUMENT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl p-8 shadow-md bg-white flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ backgroundColor: doc.bg }}
              >
                {doc.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {doc.description}
              </p>

              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <strong>File:</strong> {doc.fileType} ({doc.size})
                </p>
                <p>
                  <strong>Last Updated:</strong> {doc.lastUpdated}
                </p>
              </div>

              <button className="mt-auto py-3 rounded-xl bg-blue-600 text-white font-semibold">
                Download Document
              </button>
            </div>
          ))}
        </div>

        {/* SUBMISSION INFO */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Online Submission
            </h4>
            <p className="text-gray-700 mb-2">
              Parents may email scanned copies of documents to:
            </p>
            <p className="font-semibold text-gray-900">
              vbskcbse2014@gmail.com
            </p>
          </div>

          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.pink }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Office Submission
            </h4>
            <p className="text-gray-700 mb-2">
              Documents can also be submitted directly at the school office.
            </p>
            <p className="font-semibold text-gray-900">
              Monday – Saturday | 9:00 AM – 4:00 PM
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Vidya Bharati English Medium Primary School.
          All documents are for official use only.
        </div>
      </div>
    </div>
  );
};

export default RequiredDocuments;
