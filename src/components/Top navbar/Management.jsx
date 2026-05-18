import React, { useState } from "react";
import TeachersManagement from "../TeachersData";
import StaffPage from "../TeachersData";

// People Data
const people = [
  { name: "Smt.Katyayani Hegdekatte", role: "Principal", color: "sky" },
  { name: "Smt. Anitha Desai", role: "Secretary", color: "pink" },
  { name: "Mr. Harish Rao", role: "Treasurer", color: "amber" },
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

const managements=[
     {
    name: "Dr.K.S.Ravirajan",
   
    designation: "President",
    color: "sky",
    image: "/president.jpg.jpeg"
  },
  {
    name: "Sri. Srinivas Rao Nandapur	",
 
    designation: "Secretary",
    color: "pink",
    image: "/Secretary.jpeg"
  },
  {
    name: "Sri. P Venkatesh Manvikar	",
  
    designation: "Treasurer",
    color: "amber",
    image: "/treasure.jpeg"
  },
]
const management = [
 
  {
    name: "Smt.Katyayani Hegdekatte",
    qualification: "M.A., B.Ed",
    designation: "Principal",
    color: "sky",
    image: "/female.jpg"
  },
  {
    name: "Sri. Veeresh Murari",
    qualification: "M.Sc., M.Phil, M.L.I.Sc, B.Ed",
    designation: "Manager",
    color: "pink",
    image: "https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg"
  },
  {
    name: "Smt. Kavya",
    qualification: "M.Sc., B.Ed",
    designation: "Vice Principal",
    color: "amber",
    image: "/female.jpg"
  }
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

            {managements.map((person, index) => {

              const colors = badgeColors[person.color];

              return (

                <div
                  key={index}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 text-center hover:shadow-lg transition`}
                >

                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow mb-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="text-indigo-600 font-semibold mt-1">
                    {person.designation}
                  </p>

                  <p className="text-gray-600 text-sm mt-2">
                    {person.qualification}
                  </p>

                </div>

              );

            })}

          </div>

           <div class="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
  <div class="max-w-4xl mx-auto">
    
    <div class="bg-indigo-900 rounded-t-2xl p-6 shadow-lg">
      <h2 class="text-2xl font-bold text-white">Official Members List</h2>
    </div>

    <div class="bg-white shadow-xl rounded-b-2xl overflow-hidden border border-gray-200">
      <div class="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table class="min-w-full sticky-header">
          <thead class="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest border-b">Sl. No</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest border-b">Full Name</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest border-b">Designation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-indigo-50/50"><td colspan="3" class="px-6 py-2 text-xs font-bold text-indigo-700 uppercase">Executive Committee</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">01</td><td class="px-6 py-4 text-sm font-bold text-gray-900">Dr. K.S. Ravirajan</td><td class="px-6 py-4 text-sm text-indigo-600 font-semibold">President</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">02</td><td class="px-6 py-4 text-sm font-bold text-gray-900">Dr. R Raghavendra</td><td class="px-6 py-4 text-sm text-gray-600">Vice-President</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">03</td><td class="px-6 py-4 text-sm font-bold text-gray-900">Sri. Srinivas Rao Nandapur</td><td class="px-6 py-4 text-sm text-gray-600">Secretary</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">04</td><td class="px-6 py-4 text-sm font-bold text-gray-900">Sri. Raghavendra Chudamani</td><td class="px-6 py-4 text-sm text-gray-600">Joint Secretary</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">05</td><td class="px-6 py-4 text-sm font-bold text-gray-900">Sri. P Venkatesh Manvikar</td><td class="px-6 py-4 text-sm text-gray-600">Treasurer</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">06</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. G Somashekhara Gouda</td><td class="px-6 py-4 text-sm text-gray-500">Executive Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">07</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. Mohan Agarawal</td><td class="px-6 py-4 text-sm text-gray-500">Executive Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">08</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. Shamasundar Mundada</td><td class="px-6 py-4 text-sm text-gray-500">Executive Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">09</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. Vaibhav Jobaputra</td><td class="px-6 py-4 text-sm text-gray-500">Executive Member</td></tr>

            <tr class="bg-gray-50"><td colspan="3" class="px-6 py-2 text-xs font-bold text-gray-600 uppercase">General Members</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">10</td><td class="px-6 py-4 text-sm text-gray-800">Sri. B Mohan Reddy</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">11</td><td class="px-6 py-4 text-sm text-gray-800">Sri. Yeli Nishanth</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">12</td><td class="px-6 py-4 text-sm text-gray-800">Sri. Dr. Harish Murthy</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">13</td><td class="px-6 py-4 text-sm text-gray-800">Sri Arjun Gouda</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">14</td><td class="px-6 py-4 text-sm text-gray-800">Sri. Dr. Ajit Kulkarni</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">15</td><td class="px-6 py-4 text-sm text-gray-800">Sri. S. Venkat Krishnan</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">16</td><td class="px-6 py-4 text-sm text-gray-800">Sri. Ramchandra Prabhu U</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">17</td><td class="px-6 py-4 text-sm text-gray-800">Sri. A.S. Anand</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">18</td><td class="px-6 py-4 text-sm text-gray-800">Sri. Narendra Mootha</td><td class="px-6 py-4 text-sm text-gray-400">Member</td></tr>

            <tr class="bg-blue-900 text-white"><td colspan="3" class="px-6 py-2 text-xs font-bold uppercase">Founder Members</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">19</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Dr. Raghavendra Rao Kulkarni</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">20</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. Parasmal Sukhani</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">21</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri M.S. Gururajachar</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">22</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri Harikant Hanchate</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">23</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Sri. Yell Gangadhar</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-500">24</td><td class="px-6 py-4 text-sm font-medium text-gray-900">Dr. A. Shankar</td><td class="px-6 py-4 text-sm text-blue-600">Founder</td></tr>

            <tr class="bg-gray-100"><td colspan="3" class="px-6 py-2 text-xs font-bold text-gray-500 uppercase italic">In Memoriam (Late Founders)</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">25</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Kantilal Bohra</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">26</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Nandapur Raghavendra Rao</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">27</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Magnala Thakarsi</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">28</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Dharmaraj Desai</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">29</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri S.G. Lokhande</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">30</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri M.L. Nair</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">31</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Sharad Sampath</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">32</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Shivrajappa Genekal</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">33</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri H.V. Manvikar</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">34</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri.S.Basavi Reddy</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">35</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Y.Srinivas Shetty</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">36</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Vyasraj Murthy</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">37</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri B.Laxman</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">38</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Soma Raman Gouda</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">39</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Shantilal Jain</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">40</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri P.K. Subramanyam</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">41</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri T.K. Hanamasagar</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">42</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Madhava Bhat</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">43</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Shantilal Bhandari</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">44</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Bellam Chandrappa</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">45</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Chittam Panduranga Shetty</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">46</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Dr. D. Madhukant</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">47</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri T.G. Raghavendra Rao</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">48</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Vijayaraj Bhandari</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">49</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Bhojaraj Hosurkar</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">50</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri A.B Gokhale</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">51</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Balakishan</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">52</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri. Sanjay Kumar Bhandri</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
            <tr><td class="px-6 py-4 text-sm text-gray-400">53</td><td class="px-6 py-4 text-sm text-gray-500 italic">Late Sri Jawahar Jain</td><td class="px-6 py-4 text-sm text-gray-400 italic text-xs">Late Founder</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {management.map((person, index) => {

              const colors = badgeColors[person.color];

              return (

                <div
                  key={index}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 text-center hover:shadow-lg transition`}
                >

                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow mb-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="text-indigo-600 font-semibold mt-1">
                    {person.designation}
                  </p>

                  <p className="text-gray-600 text-sm mt-2">
                    {person.qualification}
                  </p>

                </div>

              );

            })}

          </div>

         
           <StaffPage />
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