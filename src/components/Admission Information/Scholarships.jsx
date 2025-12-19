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

const Scholarships = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showApply, setShowApply] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  /* SCHOLARSHIP DATA – SCHOOL ORIENTED */
  const scholarships = [
    {
      id: 1,
      name: "Merit Scholarship",
      category: "Academic",
      benefit: "50% Tuition Fee Concession",
      eligibility: "Top academic performers in annual examinations",
      description:
        "This scholarship encourages academic excellence by supporting students who achieve outstanding results.",
      icon: "🏆",
      bg: COLORS.yellow,
    },
    {
      id: 2,
      name: "Sports Achievement Scholarship",
      category: "Sports",
      benefit: "40% Tuition Fee Concession",
      eligibility: "Students with State or National level sports participation",
      description:
        "Provided to students who have demonstrated exceptional talent in sports and represented at higher levels.",
      icon: "⚽",
      bg: COLORS.iceBlue,
    },
    {
      id: 3,
      name: "Need-Based Financial Support",
      category: "Support",
      benefit: "Up to 100% Fee Support",
      eligibility: "Students from economically weaker sections",
      description:
        "Financial assistance is provided to deserving students to ensure uninterrupted education.",
      icon: "🤝",
      bg: COLORS.pink,
    },
  ];

  const categories = ["All", "Academic", "Sports", "Support"];

  const filteredScholarships =
    selectedCategory === "All"
      ? scholarships
      : scholarships.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins'] px-4 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Scholarship Programs
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vidya Bharati English Medium Primary School is committed to supporting
            talented and deserving students through various scholarship schemes.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SCHOLARSHIP CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScholarships.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-8 shadow-md flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ backgroundColor: s.bg }}
              >
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {s.name}
              </h3>

              <p className="text-sm text-blue-700 font-semibold mb-4">
                {s.benefit}
              </p>

              <p className="text-gray-600 mb-4 flex-grow">
                {s.description}
              </p>

              <p className="text-sm text-gray-700 mb-6">
                <strong>Eligibility:</strong> {s.eligibility}
              </p>

              <button
                onClick={() => {
                  setSelectedScholarship(s);
                  setShowApply(true);
                }}
                className="mt-auto py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                Apply for Scholarship
              </button>
            </div>
          ))}
        </div>

        {/* INFORMATION SECTION */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.iceBlue }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Fair Selection Process
            </h4>
            <p className="text-gray-700">
              Scholarships are awarded based on merit, talent, and genuine
              financial need as per school norms.
            </p>
          </div>

          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Limited Seats
            </h4>
            <p className="text-gray-700">
              Scholarships are limited in number and subject to management
              approval.
            </p>
          </div>

          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.pink }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Guidance & Support
            </h4>
            <p className="text-gray-700">
              Parents may contact the school office for scholarship guidance and
              documentation support.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Vidya Bharati English Medium Primary School.
          Scholarship decisions are final and subject to school management rules.
        </div>
      </div>

      {/* APPLY MODAL – SIMPLE & PROFESSIONAL */}
      {showApply && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Scholarship Application
              </h2>
              <button
                onClick={() => setShowApply(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <form className="space-y-5">
              <input
                className="w-full border rounded-xl p-3"
                placeholder="Student Name"
              />
              <input
                className="w-full border rounded-xl p-3"
                placeholder="Current Grade"
              />
              <input
                className="w-full border rounded-xl p-3"
                placeholder="Parent / Guardian Email"
              />
              <textarea
                className="w-full border rounded-xl p-3 min-h-[120px]"
                placeholder="Brief reason for applying"
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApply(false)}
                  className="px-6 py-3 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarships;
