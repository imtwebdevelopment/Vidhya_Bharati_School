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

const Fees = () => {
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [activeTab, setActiveTab] = useState("structure");

  /* SCHOOL FEE STRUCTURE */
  const feeStructure = [
    {
      id: 1,
      grade: "Nursery",
      admissionFee: 5000,
      tuitionFee: 12000,
      activityFee: 2000,
      annualCharges: 3000,
      totalAnnual: 28000,
      icon: "👶",
      bg: COLORS.pink,
    },
    {
      id: 2,
      grade: "LKG",
      admissionFee: 5500,
      tuitionFee: 13000,
      activityFee: 2500,
      annualCharges: 3500,
      totalAnnual: 30500,
      icon: "🎨",
      bg: COLORS.iceBlue,
    },
    {
      id: 3,
      grade: "UKG",
      admissionFee: 5500,
      tuitionFee: 13000,
      activityFee: 2500,
      annualCharges: 3500,
      totalAnnual: 30500,
      icon: "📚",
      bg: COLORS.yellow,
    },
    {
      id: 4,
      grade: "Grade 1 – 5",
      admissionFee: 6000,
      tuitionFee: 15000,
      activityFee: 3000,
      annualCharges: 4000,
      totalAnnual: 34000,
      icon: "🚀",
      bg: COLORS.pink,
    },
  ];

  const grades = ["All", "Nursery", "LKG", "UKG", "Grade 1 – 5"];

  const filteredFees =
    selectedGrade === "All"
      ? feeStructure
      : feeStructure.filter((f) => f.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins'] px-4 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Fee Structure
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vidya Bharati English Medium Primary School follows a transparent and
            structured fee system with no hidden charges.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div
            className="flex gap-2 p-2 rounded-2xl shadow-sm"
            style={{ backgroundColor: COLORS.iceBlue }}
          >
            <button
              onClick={() => setActiveTab("structure")}
              className={`px-6 py-3 rounded-xl font-semibold ${
                activeTab === "structure"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Fee Details
            </button>
            <button
              onClick={() => setActiveTab("policy")}
              className={`px-6 py-3 rounded-xl font-semibold ${
                activeTab === "policy"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Payment Policy
            </button>
          </div>
        </div>

        {/* ================= TAB CONTENT ================= */}
        {activeTab === "structure" ? (
          <>
            {/* GRADE FILTER */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {grades.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold ${
                    selectedGrade === g
                      ? "bg-gray-900 text-white"
                      : "bg-white border text-gray-700"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* FEE CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredFees.map((fee) => (
                <div
                  key={fee.id}
                  className="bg-white rounded-3xl p-8 shadow-md flex flex-col"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                    style={{ backgroundColor: fee.bg }}
                  >
                    {fee.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {fee.grade}
                  </h3>

                  <div className="space-y-3 text-sm text-gray-700 mb-6">
                    <div className="flex justify-between">
                      <span>Admission Fee</span>
                      <span className="font-semibold">
                        ₹{fee.admissionFee}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuition Fee</span>
                      <span className="font-semibold">
                        ₹{fee.tuitionFee}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Activity Fee</span>
                      <span className="font-semibold">
                        ₹{fee.activityFee}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Charges</span>
                      <span className="font-semibold">
                        ₹{fee.annualCharges}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Total Annual Fee
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      ₹{fee.totalAnnual}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* PAYMENT POLICY */
          <div
            className="max-w-4xl mx-auto rounded-3xl p-10 shadow-md"
            style={{ backgroundColor: COLORS.iceBlue }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Guidelines
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Fees should be paid on or before the due date.</li>
              <li>• Tuition fees are payable annually or term-wise.</li>
              <li>
                • Sibling concession is applicable as per school norms.
              </li>
              <li>
                • Transport fees depend on the distance from the school.
              </li>
              <li>
                • Late payment may attract a nominal fine as decided by the
                management.
              </li>
            </ul>
          </div>
        )}

        {/* PAYMENT INFO */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.yellow }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Online Payment
            </h4>
            <p className="text-gray-700 mb-4">
              Parents may pay fees through UPI or school-approved online payment
              methods.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold">
              Pay Fees Online
            </button>
          </div>

          <div
            className="rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: COLORS.pink }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Bank Details
            </h4>
            <p className="text-gray-700">
              <strong>Bank:</strong> State Bank of India
            </p>
            <p className="text-gray-700">
              <strong>IFSC:</strong> SBIN0001234
            </p>
            <p className="text-gray-700">
              <strong>Account Name:</strong> Vidya Bharati School
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Vidya Bharati English Medium Primary School.
          All fees are subject to school management guidelines.
        </div>
      </div>
    </div>
  );
};

export default Fees;
