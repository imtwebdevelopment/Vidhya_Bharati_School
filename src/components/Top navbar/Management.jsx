import React, { useState } from "react";
import TeachersManagement from "../TeachersData";
import StaffPage from "../TeachersData";

// People Data
const people = [
  { name: "Sri. Ramesh Kulkarni", role: "Chairman", color: "sky" },
  { name: "Smt. Anitha Desai", role: "Secretary", color: "pink" },
  { name: "Mr. Harish Rao", role: "Treasurer", color: "amber" },
  { name: "Mrs. Kavya Patil", role: "Principal", color: "emerald" },
  { name: "Mr. Nitin Shetty", role: "Vice Principal", color: "blue" },
  { name: "Mrs. Pooja Rao", role: "Academic Coordinator", color: "purple" },
];

const badges = [
  { title: "CBSE Affiliation", value: "830589", color: "pink", icon: "🏛️" },
  { title: "Student–Teacher Ratio", value: "25:1", color: "sky", icon: "👨‍🏫" },
  { title: "Years of Excellence", value: "> 10", color: "amber", icon: "⭐" },
  { title: "Clubs & Activities", value: "20+", color: "emerald", icon: "🎭" },
];

const timeline = [
  { year: "2014", title: "Foundation", text: "Vidya Bharati EMPS (CBSE) began in Raichur." },
  { year: "2017", title: "Activity-led Learning", text: "Introduced experiential learning programs." },
  { year: "2021", title: "Digital Leap", text: "Integrated smart classrooms and digital learning." },
  { year: "2024", title: "Community Impact", text: "Expanded outreach and scholarship programs." },
  { year: "2025", title: "Future Vision", text: "Planning new campus with better facilities." },
];

// Color Schemes
const badgeColors = {
  pink: { 
    bg: "bg-pink-100", 
    text: "text-pink-800", 
    border: "border-pink-200"
  },
  sky: { 
    bg: "bg-blue-100", 
    text: "text-blue-800", 
    border: "border-blue-200"
  },
  amber: { 
    bg: "bg-yellow-100", 
    text: "text-yellow-800", 
    border: "border-yellow-200"
  },
  emerald: { 
    bg: "bg-green-100", 
    text: "text-green-800", 
    border: "border-green-200"
  },
  blue: { 
    bg: "bg-blue-100", 
    text: "text-blue-800", 
    border: "border-blue-200"
  },
  purple: { 
    bg: "bg-purple-100", 
    text: "text-purple-800", 
    border: "border-purple-200"
  },
};

const Management = () => {
  const [activePerson, setActivePerson] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 font-sans">
      {/* HERO SECTION */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-bold mb-6">
              Management & Leadership
            </div>
            
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Guiding <span className="text-pink-600">Vision</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the leadership of <span className="font-bold">VIDYA BHARATI ENGLISH MEDIUM PRIMARY SCHOOL (CBSE), Raichur</span>,
              committed to academic excellence and student development.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((b, i) => {
              const colors = badgeColors[b.color];
              return (
                <div
                  key={b.title}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 text-center`}
                >
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <div className={`text-sm font-bold ${colors.text}`}>{b.title}</div>
                  <div className="text-2xl font-bold text-gray-900 mt-2">{b.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    <StaffPage/>

      {/* GOVERNING BODY */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-600">Dedicated professionals shaping education</p>
          </div>

          {/* People Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((person, index) => {
              const colors = badgeColors[person.color];
              return (
                <div
                  key={person.name}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
                  onMouseEnter={() => setActivePerson(index)}
                  onMouseLeave={() => setActivePerson(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                      <div className="px-3 py-1 rounded-full bg-white/80 text-sm font-semibold inline-block mt-2">
                        {person.role}
                      </div>
                    </div>
                    <div className="text-2xl">
                      ⭐
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Leads with integrity and focuses on academic and co-scholastic growth.
                  </p>
                  
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">10+</div>
                      <div className="text-gray-500">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">100+</div>
                      <div className="text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">50+</div>
                      <div className="text-gray-500">Programs</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANAGEMENT PHILOSOPHY */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Our Philosophy
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Shaping Minds,<br />
                  <span className="text-pink-600">
                    Building Character
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-600">
                We believe in <span className="font-bold">Value-based Education</span>,{" "}
                <span className="font-bold">Activity-led Learning</span>, and constant{" "}
                <span className="font-bold">Teacher Development</span>.
              </p>
              
              <ul className="space-y-4">
                {[
                  { text: 'Transparent governance and parent communication', icon: '💬' },
                  { text: 'Continuous academic audits and teacher training', icon: '📊' },
                  { text: 'Holistic development through sports and arts', icon: '🎨' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: "Academics", 
                  sub: "NEP-aligned pedagogy", 
                  color: "sky", 
                  icon: "📚",
                  stat: "95%"
                },
                { 
                  title: "Safety", 
                  sub: "Safe campus & support", 
                  color: "pink", 
                  icon: "🛡️",
                  stat: "24/7"
                },
                { 
                  title: "Teacher Training", 
                  sub: "Workshops and learning", 
                  color: "amber", 
                  icon: "👨‍🏫",
                  stat: "50+"
                },
                { 
                  title: "Clubs", 
                  sub: "Leadership & teamwork", 
                  color: "emerald", 
                  icon: "🏆",
                  stat: "20+"
                },
              ].map((card, i) => {
                const colors = badgeColors[card.color];
                return (
                  <div
                    key={card.title}
                    className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{card.sub}</p>
                      </div>
                      <div className="text-2xl">{card.icon}</div>
                    </div>
                    
                    <div className="mt-4 text-xl font-bold text-gray-900">
                      {card.stat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">Milestones since 2014</p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-3xl font-bold text-gray-900">
                Connect With Us
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Your feedback helps us grow better.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+918532221980"
                className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold text-lg hover:bg-pink-600"
              >
                Call +91 8532-221980
              </a>
              
              <a
                href="mailto:vbskcbse2014@gmail.com"
                className="px-8 py-4 rounded-full bg-gray-800 text-white font-bold text-lg hover:bg-gray-900"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>📍 Raichur, Karnataka | ⏰ Mon-Sat: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;