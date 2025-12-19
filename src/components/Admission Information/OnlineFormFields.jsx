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

const OnlineFormFields = () => {
  const [activeTab, setActiveTab] = useState("admission");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    grade: "",
    previousSchool: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    address: "",
    inquiryMessage: "",
    pickupAddress: "",
    allergies: "",
    medicalConditions: "",
    doctorName: "",
    doctorPhone: "",
  });

  const formTypes = [
    { id: "admission", name: "Admission Form", icon: "📝", bg: COLORS.iceBlue },
    { id: "inquiry", name: "General Inquiry", icon: "💬", bg: COLORS.yellow },
    { id: "transport", name: "Transport Request", icon: "🚌", bg: COLORS.pink },
    { id: "medical", name: "Medical Information", icon: "🏥", bg: COLORS.iceBlue },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const InputField = ({ label, name, type = "text", required = false }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );

  /* ================= SUBMITTED SCREEN ================= */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div
          className="max-w-lg w-full p-10 rounded-3xl text-center shadow-md"
          style={{ backgroundColor: COLORS.iceBlue }}
        >
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Form Submitted Successfully
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you for submitting the form. Our school office will contact
            you within 2–3 working days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins'] px-4 py-14">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Online School Forms
          </h1>
          <p className="text-lg text-gray-700">
            Please select the appropriate form and provide accurate details for
            further processing.
          </p>
        </div>

        {/* FORM TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {formTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`p-5 rounded-2xl border text-center font-semibold ${
                activeTab === type.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-sm">{type.name}</div>
            </button>
          ))}
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div
            className="h-2"
            style={{
              backgroundColor: formTypes.find((f) => f.id === activeTab).bg,
            }}
          />

          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {formTypes.find((f) => f.id === activeTab).icon}{" "}
              {formTypes.find((f) => f.id === activeTab).name}
            </h2>

            {/* ADMISSION FORM */}
            {activeTab === "admission" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Student Name" name="studentName" required />
                  <InputField label="Date of Birth" name="dob" type="date" required />
                  <InputField label="Grade Applying For" name="grade" required />
                  <InputField label="Previous School" name="previousSchool" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Father's Name" name="fatherName" required />
                  <InputField label="Mother's Name" name="motherName" required />
                  <InputField label="Contact Number" name="phone" required />
                  <InputField label="Email Address" name="email" type="email" />
                </div>

                <InputField label="Residential Address" name="address" required />
              </div>
            )}

            {/* INQUIRY FORM */}
            {activeTab === "inquiry" && (
              <div className="space-y-6">
                <InputField label="Full Name" name="studentName" required />
                <InputField label="Contact Number" name="phone" required />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Inquiry Message
                  </label>
                  <textarea
                    name="inquiryMessage"
                    value={formData.inquiryMessage}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-gray-300 min-h-[120px]"
                  />
                </div>
              </div>
            )}

            {/* TRANSPORT FORM */}
            {activeTab === "transport" && (
              <div className="space-y-6">
                <InputField label="Student Name" name="studentName" required />
                <InputField
                  label="Pickup Point Address"
                  name="pickupAddress"
                  required
                />
                <p className="text-sm text-gray-600">
                  Transport facility is subject to route availability and school
                  policy.
                </p>
              </div>
            )}

            {/* MEDICAL FORM */}
            {activeTab === "medical" && (
              <div className="space-y-6">
                <InputField label="Known Allergies" name="allergies" />
                <InputField
                  label="Medical Conditions"
                  name="medicalConditions"
                />
                <InputField label="Family Doctor Name" name="doctorName" />
                <InputField
                  label="Doctor Contact Number"
                  name="doctorPhone"
                />
              </div>
            )}

            {/* SUBMIT */}
            <div className="mt-10 flex justify-between items-center border-t pt-6">
              <p className="text-xs text-gray-500 max-w-sm">
                By submitting this form, you confirm that the provided
                information is accurate and complete.
              </p>
              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white rounded-xl font-semibold"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Vidya Bharati English Medium Primary School.
          All submitted information is kept confidential.
        </div>
      </div>
    </div>
  );
};

export default OnlineFormFields;
