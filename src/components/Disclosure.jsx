import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Assume these files are in your assets folder
import pdfFile from '../assets/newadd.pdf';
import image417 from '../assets/417.jpg';
import image445 from '../assets/445.jpg';
import image456 from '../assets/456.jpg';
import image431 from '../assets/431.jpg';

// --- Animated Icon for Load/View Details ---
const AnimatedArrow = () => (
  <motion.svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ x: 0 }}
    animate={{ x: [0, 4, 0] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </motion.svg>
);

const Disclosure = () => {
  const [activeTab, setActiveTab] = useState('A');
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'A', label: 'A. GENERAL INFORMATION' },
    { id: 'B', label: 'B. DOCUMENTS AND INFORMATION' },
    { id: 'C', label: 'C. RESULT AND ACADEMICS' },
    { id: 'D', label: 'D. SCHOOL INFRASTRUCTURE' },
    { id: 'E', label: 'E. STAFF\'S DETAILS' }
  ];

  // --- Data Definitions (kept as is) ---
  const generalInfo = [
    { slNo: 1, information: 'Name of The School', details: 'Vidya Bharati English Medium Primary School' },
    { slNo: 2, information: 'Affiliation No. (If Applicable)', details: '830589' },
    { slNo: 3, information: 'School Code (If Applicable)', details: '45582' },
    { slNo: 4, information: 'Complete Address With Pin Code', details: 'Yeramaras Camp, RCR, Yeramaras Camp Raichur Pin - 584 135 Karnataka State' },
    { slNo: 5, information: 'Principal Name & Qualification', details: 'Katyayani Hegdekatte (MA BED)' },
    { slNo: 6, information: 'School E-mail Id', details: 'vbskcbse2014@gmail.com' },
    { slNo: 7, information: 'Contact Details (Landline/Mobile)', details: '+91 8532-221980' }
  ];

  const documentsInfo = [
    { slNo: 1, information: 'Copies of Affiliation Letter', document: 'View Details', image: null },
    { slNo: 2, information: 'Copies of Trust Deed', document: 'View Details', image: null },
    { slNo: 3, information: 'Copy of No Objection Certificate (NOC) Issued, by The State Govt. /UT', document: 'View Details', image: null },
    { slNo: 4, information: 'Copy of Recognition Certificate', document: 'View Details', image: image417 },
    { slNo: 5, information: 'Copy of valid Building safety Certificate issued by Department of Public Works', document: 'View Details', image: image445 },
    { slNo: 6, information: 'Copies of Valid Fire Safety Certificate Issued by the Competent Authority', document: 'View Details', image: null },
    { slNo: 7, information: 'Copies of Valid Water, Health And Sanitation Certificates', document: 'View Details', image: image456 },
    { slNo: 8, information: 'Copies of Land Certificates', document: 'View Details', image: image431 },
    { slNo: 9, information: 'Self Declaration', document: 'View Details', image: null }
  ];

  const resultInfo = [
    { slNo: 1, information: 'Fee Structure of The School', document: 'View Details' },
    { slNo: 2, information: 'Annual Academics Calendar', document: 'View Details' },
    { slNo: 3, information: 'List of School Management Committee (SMC)', document: 'View Details' },
    { slNo: 4, information: 'List of Parents Teachers Association (PTA) Members', document: 'View Details' },
    { slNo: 5, information: 'Last Three-Year Result of The Board Examination As Per Applicability', document: 'View Details' }
  ];

  const infrastructureInfo = [
    { slNo: 1, information: 'Total Campus Area of The School (In Square Mtr)', details: '34094 (In Square Mtr)' },
    { slNo: 2, information: 'No. Class Rooms', details: '30' },
    { slNo: 3, information: 'Size of The Class Rooms (In Square Mtr)', details: '7.92X6.71=47 (In Square Mtr)' },
    { slNo: 4, information: 'No. and Size of Laboratories Including Computer Labs (In Sq. Mtr)', details: '265.69 (In Sq. Mtr)' },
    { slNo: 5, information: 'Computer Lab - 01', details: '7.92X13.43=106.29 (In Sq. Mtr)' },
    { slNo: 6, information: 'Composite Science Lab - 01', details: '7.92X13.42=106.29 (In Sq. Mtr)' },
    { slNo: 7, information: 'Chemistry Lab - 01', details: '0' },
    { slNo: 8, information: 'Biology Lab - 01', details: '0' },
    { slNo: 9, information: 'Maths Lab - 01', details: '7.92X6.71=53.14 (In Sq. Mtr)' },
    { slNo: 10, information: 'Internet Facility (Y/N)', details: 'Yes' },
    { slNo: 11, information: 'No. of Girls Toilets', details: '24' },
    { slNo: 12, information: 'No. of Boys Toilets', details: '22' },
    { slNo: 13, information: 'Link of YouTube Video of The Inspection of School Covering The Infrastructure of The School', details: 'YES' }
  ];

  const staffInfo = [
    { slNo: 1, information: 'Principal', details: 'Katyayani Hegdekatte (MA BED)' },
    { slNo: 2, information: 'Total No. of Teachers', details: '26' },
    { slNo: 3, information: 'PGT', details: '07' },
    { slNo: 4, information: 'PRT', details: '10' },
    { slNo: 5, information: 'TGT', details: '03' },
    { slNo: 6, information: 'PTI', details: 'Mr. Pranesh (B.Ped)' },
    { slNo: 7, information: 'Librarian', details: 'Bee.Bee. Amina (B.A, B.ed, D.Lib)' },
    { slNo: 8, information: 'Teachers Section Ratio', details: '1:1.5' },
    { slNo: 9, information: 'Details of Special Educators', details: 'Mrs. Shaheen Sultana (M.A)' },
    { slNo: 10, information: 'Details of Counseling and Wellness Teacher', details: 'Mrs. Ruksana Begum (M.A., M.ed)' },
    { slNo: 11, information: 'Computer Teacher', details: 'Mrs. Shayla (BCA)' }
  ];
  // --- End of Data Definitions ---

  const handleViewDetails = (image = null) => {
    if (image) {
      setSelectedImage(image);
      setShowImageModal(true);
    } else {
      setShowPdfModal(true);
    }
  };

  const renderTable = (data, hasDocument = false) => (
    <div className="overflow-x-auto rounded-lg shadow-lg border border-sky-200">
      <table className="w-full border-collapse min-w-full">
        <thead className="bg-sky-500/90 text-white sticky top-0">
          <tr>
            <th className="border-r border-sky-400 px-3 md:px-5 py-3 text-left font-extrabold text-xs md:text-sm">Sl. No.</th>
            <th className="border-r border-sky-400 px-3 md:px-5 py-3 text-left font-extrabold text-xs md:text-sm">Information</th>
            <th className="px-3 md:px-5 py-3 text-left font-extrabold text-xs md:text-sm">
              {hasDocument ? 'Uploaded Document' : 'Details'}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={index}
              className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ backgroundColor: '#fffbe3', scale: 1.01 }} // Subtle yellow hover
            >
              <td className="border-r border-gray-200 px-3 md:px-5 py-3 text-xs md:text-sm text-sky-800 font-semibold">{item.slNo}</td>
              <td className="border-r border-gray-200 px-3 md:px-5 py-3 text-xs md:text-sm font-medium text-gray-700">{item.information}</td>
              <td className="px-3 md:px-5 py-3 text-xs md:text-sm">
                {hasDocument ? (
                  item.document ? (
                    <motion.button
                      onClick={() => handleViewDetails(item.image)}
                      className="text-pink-600 hover:text-pink-800 font-bold inline-flex items-center transition-colors duration-200"
                      whileHover={{ scale: 1.05, textShadow: "0 0 5px rgba(236, 72, 153, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.document}
                      <AnimatedArrow />
                    </motion.button>
                  ) : (
                    <span className="text-gray-400 font-light italic">- Not Available -</span>
                  )
                ) : (
                  <span className="break-words font-semibold text-gray-800">{item.details}</span>
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderResultTable = () => (
    <motion.div
      className="mt-8 p-4 bg-yellow-50 rounded-lg shadow-inner border-l-4 border-yellow-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-extrabold text-pink-600 mb-4">RESULT CLASS X</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-yellow-400 min-w-full">
          <thead>
            <tr className="bg-yellow-400/80 text-sky-900">
              <th className="border border-yellow-500 px-3 md:px-5 py-2 text-left font-extrabold text-xs md:text-sm">Sl. No.</th>
              <th className="border border-yellow-500 px-3 md:px-5 py-2 text-left font-extrabold text-xs md:text-sm">Year</th>
              <th className="border border-yellow-500 px-3 md:px-5 py-2 text-left font-extrabold text-xs md:text-sm">No. of Registered Students</th>
              <th className="border border-yellow-500 px-3 md:px-5 py-2 text-left font-extrabold text-xs md:text-sm">No. of Students Passed</th>
              <th className="border border-yellow-500 px-3 md:px-5 py-2 text-left font-extrabold text-xs md:text-sm">Pass Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-yellow-200 px-3 md:px-5 py-3 text-xs md:text-sm"></td>
              <td className="border border-yellow-200 px-3 md:px-5 py-3 text-xs md:text-sm font-bold text-pink-600">NOT APPLICABLE</td>
              <td className="border border-yellow-200 px-3 md:px-5 py-3 text-xs md:text-sm"></td>
              <td className="border border-yellow-200 px-3 md:px-5 py-3 text-xs md:text-sm"></td>
              <td className="border border-yellow-200 px-3 md:px-5 py-3 text-xs md:text-sm"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  // Main component return with initial page animation
  return (
    <motion.div
      className="min-h-screen bg-sky-50 py-4 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <nav className="text-xs md:text-sm text-gray-600">
            <a href="/" className="hover:text-pink-600 font-medium transition-colors">Home</a>
            <span className="mx-2 text-sky-500">{'>>'}</span>
            <span className="text-sky-800 font-bold">Mandatory Public Disclosure</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-2 border-b-4 border-pink-500 inline-block px-4 pb-1">
            MANDATORY PUBLIC DISCLOSURE
          </h1>
          <p className="text-md text-gray-600 font-medium">Transparency in School Information (CBSE Guidelines)</p>
        </div>

        {/* Tabs */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-wrap border-b-4 border-sky-300 overflow-x-auto bg-white rounded-t-xl shadow-md">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-6 py-3 font-extrabold text-xs md:text-sm transition-all whitespace-nowrap border-b-4 ${activeTab === tab.id
                  ? 'text-pink-600 border-pink-500 bg-sky-50 shadow-inner'
                  : 'text-sky-800 border-transparent hover:text-pink-600 hover:bg-yellow-50'
                  }`}
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content Container with Layout Animation */}
        <motion.div
          className="bg-white rounded-b-xl rounded-t-none shadow-2xl border-t-2 border-pink-500 p-4 md:p-6"
          layout // Enables smooth layout animation when content changes
        >
          <AnimatePresence mode="wait">
            {activeTab === 'A' && (
              <motion.div
                key="A"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-pink-600 mb-4 border-l-4 border-yellow-400 pl-3">A. GENERAL INFORMATION</h2>
                {renderTable(generalInfo)}
              </motion.div>
            )}

            {activeTab === 'B' && (
              <motion.div
                key="B"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-pink-600 mb-4 border-l-4 border-yellow-400 pl-3">B. DOCUMENTS AND INFORMATION</h2>
                {renderTable(documentsInfo, true)}
              </motion.div>
            )}

            {activeTab === 'C' && (
              <motion.div
                key="C"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-pink-600 mb-4 border-l-4 border-yellow-400 pl-3">C. RESULT AND ACADEMICS</h2>
                {renderTable(resultInfo, true)}
                {renderResultTable()}
              </motion.div>
            )}

            {activeTab === 'D' && (
              <motion.div
                key="D"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-pink-600 mb-4 border-l-4 border-yellow-400 pl-3">D. SCHOOL INFRASTRUCTURE</h2>
                {renderTable(infrastructureInfo)}
              </motion.div>
            )}

            {activeTab === 'E' && (
              <motion.div
                key="E"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold text-pink-600 mb-4 border-l-4 border-yellow-400 pl-3">E. STAFF'S DETAILS</h2>
                {renderTable(staffInfo)}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
        <section className="py-10 px-4 text-center">
  
   <h4 className="text-3xl md:text-3xl font-extrabold text-sky-800 mb-2 border-b-4 border-pink-500 inline-block px-4 pb-1">
           Academic Structure
  
        </h4>
   

  <div className="overflow-x-auto max-w-6xl mx-auto">
    <table className="min-w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-3 text-lg font-semibold">
            Level
          </th>
          <th className="border border-gray-300 px-4 py-3 text-lg font-semibold">
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-3 font-semibold">
            Primary School
          </td>
          <td className="border border-gray-300 px-4 py-3 text-gray-600">
          The curriculum is designed to draw from their experiences and meet the cognitive and socio-emotional needs of the child. The teachers foster an atmosphere that is personalized and child centered. A lot of stress is laid at this stage on spoken English 
          with emphasis on good pronunciation and diction coupled with excellent reading and writing skills
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-3 font-semibold">
            Middle School
          </td>
          <td className="border border-gray-300 px-4 py-3 text-gray-600">
           Middle school provides a nurturing, secure, and supportive environment that motivates young adolescents to take on challenges
            in a culture of nurtured risk-taking as the children transition from childhood to adolescence
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-3 font-semibold">
            Secondary School (Grades 8–10)
          </td>
          <td className="border border-gray-300 px-4 py-3 text-gray-600">
          For the secondary classes i.e., Grades 8 to 10, the main aim is to provide in-depth knowledge of the concepts. Extensive use of technology supplements classroom teaching thereby making it interactive and thus enhancing comprehension. 
           The school offers CBSE-recommended schoolbooks and study materials for the students.
          </td>
        </tr>

        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-3 font-semibold">
            Senior Secondary (Grades 11–12)
          </td>
          <td className="border border-gray-300 px-4 py-3 text-gray-600">
           For Senior Secondary i.e., Grades 11 and 12, the main aim at this level is to prepare
            students according to the CBSE curriculum Experienced teachers strive to achieve excellent
             results through a result-oriented approach to teaching.
            Students can choose subjects of their choice from several subjects offered
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
      <div className="mb-6 md:mb-8 text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-2 border-b-4 border-pink-500 inline-block px-4 pb-1">
          Academic Excellence
        </h1>
        <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto"> At VIDYA BHARATI CBSE School, our learners achieve
          amazing things. Recognised as one of the leading school brands in India, our learners enjoy a remarkable range of innovative learning experiences, which inspire and challenge them to be their very best. This includes exclusive collaborations with abroad universities, one of the widest choices of subjects in India, and more than 50+ extra-curricular clubs and activities. Nurtured by our outstanding teachers facilitating your child’s curiosity and igniting their passions – your child will get a holistic education. At VIDAY BHARATI CBSE Schools helps learners carve their own personal and academic pathways to success along with getting remarkable examination results
          that will encourage them to be the best they can be, in all areas of their learning.</p>
      </div>

      <div className="mb-6 md:mb-8 text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-2 border-b-4 border-pink-500 inline-block px-4 pb-1">
          Education beyond Academics
        </h1>
        <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto"> At VIDYA BHARATI CBSE School, our learners achieve
          The Vidya Bharati CBSE School (VBCBSE) represents a paradigm shift in Indian education.
          Inspired by the New Education Policy 2020 (NEP 2020), the school instills competency-based higher order thinking in children from a young age to prepare them for a seamless transition to the best universities, careers armed with life preparedness.
          Get Set To Experience a Difference
          The EIS experience reverberates throughout the campus. This comes to the fore as soon as you enter the portals.
          Examples of this experience include a motivating teacher who stays after school to help a student; or the buzz of stimulating conversations in our hallways where the sounds of a diverse and active student population reverberate throughout the day.
          You also experience a sensation of unrestrained curiosity amongst young minds, and an environment where there is incubation of achievement and innovation. This is a unique and exclusive offering at the School.
        </p>
      </div>

      <div className="mb-6 md:mb-8 text-center mt-6">
        <h4 className="text-3xl md:text-3xl font-extrabold text-sky-800 mb-2 border-b-4 border-pink-500 inline-block px-4 pb-1">
          Curriculum
        </h4>
        <p className="text-md text-gray-600 font-medium mt-3 px-4 md:px-2 text-justify leading-relaxed max-w-4xl mx-auto"> At VIDYA BHARATI CBSE School, our learners achieve
          Learning is a life skill that goes beyond reading and writing. We ensure the right balance of stimulation and age appropriate learning in every child.
          VBSK emphasises of experiential and exploratory methods of learning.
          Students are encouraged to present their learning outcomes through presentations, role plays, small skits, quiz or impromptu debates.
          Students have various out-of classroom activities through Hobby Hours program inclusive of theater, music, visual arts, football, cricket, basketball, gymnastics, karate and many more.
          At VBSK, we are redefining education with focus on providing a fun-based learning environment. Our ‘Child-Centered’ ideology is the core of our pedagogy which enables us to ensure a child’s development towards success.
          Our programs are designed to help a child learn & enhance life skills needed to succeed in school & beyond.
          VBSK Pre-School curriculum is full of fun activities like musical experiences, storytelling, Do it yourself (DIY) kits and a healthy mix of indoor & outdoor play. Each day VBSK introduces a new learning experience to a child.
        </p>
      </div>
   

    
      {/* --- PDF Modal --- */}
      <AnimatePresence>
        {showPdfModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="flex items-center justify-between p-4 border-b-2 border-pink-500 bg-sky-100 rounded-t-xl">
                <h3 className="text-xl font-bold text-sky-800">PDF Document Viewer</h3>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="p-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 p-4">
                <iframe
                  src={pdfFile}
                  className="w-full h-full border-4 border-sky-300 rounded-lg shadow-inner"
                  title="PDF Document"
                />
              </div>
              <div className="flex items-center justify-end p-4 border-t border-gray-200">
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors shadow-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Image Modal --- */}
      <AnimatePresence>
        {showImageModal && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-full max-h-[95vh] flex flex-col"
              initial={{ scale: 0.9, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.9, rotate: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="flex items-center justify-between p-3 border-b-2 border-pink-500 bg-sky-100 rounded-t-xl flex-shrink-0">
                <h3 className="text-xl font-bold text-sky-800">Document Image Viewer</h3>
                <button
                  onClick={() => setShowImageModal(false)}
                  className="p-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 p-4 flex items-center justify-center overflow-hidden bg-gray-100">
                <motion.img
                  src={selectedImage}
                  alt="Document"
                  className="max-w-full max-h-full object-contain w-auto h-auto rounded-lg shadow-xl border-4 border-yellow-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="flex items-center justify-end p-3 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={() => setShowImageModal(false)}
                  className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors shadow-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Disclosure;