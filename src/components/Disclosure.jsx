import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Assume these files are in your assets folder
import pdfFile from '../assets/newadd.pdf';


// --- Animated Icon for Load/View Details --

const Disclosure = () => {
 
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Main component return with initial page animation
  return (
    <motion.div
      className="min-h-screen bg-sky-50 py-4 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          amazing things. Recognised as one of the leading school brands in India, our learners enjoy a remarkable range of innovative learning experiences, which inspire and challenge them to be their very best.
           This includes exclusive collaborations with abroad universities, one of the widest choices of subjects in India, and more than 50+ extra-curricular clubs and activities. Nurtured by our outstanding teachers facilitating your child’s curiosity and igniting their passions – your child will get a holistic education. At	Vidya Bharati CBSE School helps learners carve their own personal and academic pathways to success along with getting remarkable examination results
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