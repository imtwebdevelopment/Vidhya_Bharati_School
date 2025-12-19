import React, { useEffect, useRef, useState } from "react";

/* =============================
   COLOR PALETTE (Clean & School)
============================= */
const COLORS = {
  primary: "#E85D75",
  secondary: "#4EA8DE",
  accent: "#FFD166",
  dark: "#1F2937",
  light: "#F9FAFB",
};

/* =============================
   GLOBAL STYLES
============================= */
const styles = `
  html {
    scroll-behavior: smooth;
  }

  .news-bg {
    position: relative;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .news-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.85);
    z-index: 0;
  }

  .card {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(0,0,0,0.12);
  }
`;

/* =============================
   NEWS DATA
============================= */
const newsData = [
  {
    id: 1,
    title: "Annual Sports Day 2025 Announced",
    date: "2025-12-20",
    category: "Events",
    excerpt:
      "Join us for our spectacular Sports Day celebration on December 20th at the school ground.",
    body:
      "The Sports Day will begin at 9:00 AM with a march-past followed by exciting events.",
  },
  {
    id: 2,
    title: "First-Term Examination Schedule",
    date: "2025-12-15",
    category: "Academics",
    excerpt:
      "The detailed timetable for Grades I–V has been shared with all class groups.",
    body:
      "Students should reach school by 8:15 AM. Writing sessions start at 8:45 AM sharp.",
  },
  {
    id: 3,
    title: "Winter Break Schedule 2025–26",
    date: "2025-12-24",
    category: "Holidays",
    excerpt:
      "School will remain closed from December 24th to January 1st.",
    body:
      "School reopens on January 2nd, 2026. Office open on selected days.",
  },
  {
    id: 4,
    title: "Art Competition Winners",
    date: "2025-12-18",
    category: "Achievements",
    excerpt:
      "Congratulations to all our talented winners of the district-level competition!",
    body:
      "Our students won multiple gold, silver and bronze medals.",
  },
  {
    id: 5,
    title: "Library Week Celebration",
    date: "2025-12-22",
    category: "Events",
    excerpt:
      "A week-long celebration of reading and storytelling.",
    body:
      "Activities include reading sessions, storytelling and competitions.",
  },
  {
    id: 6,
    title: "Parent-Teacher Meeting",
    date: "2025-12-19",
    category: "Parents",
    excerpt:
      "PTM scheduled for all classes to discuss student progress.",
    body:
      "Timings vary by grade. Parents are requested to attend.",
  },
];

/* =============================
   CATEGORY COLORS
============================= */
const categoryColors = {
  Events: "bg-pink-100 text-pink-700",
  Academics: "bg-blue-100 text-blue-700",
  Holidays: "bg-yellow-100 text-yellow-800",
  Achievements: "bg-green-100 text-green-700",
  Parents: "bg-purple-100 text-purple-700",
};

/* =============================
   NEWS CARD
============================= */
function NewsCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[item.category]}`}
          >
            {item.category}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(item.date).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 mb-4">{item.excerpt}</p>

        <div className="border-t pt-4 text-sm text-gray-700">
          {item.body}
        </div>
      </div>
    </div>
  );
}

/* =============================
   MAIN NEWS COMPONENT
============================= */
const News = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const BACKGROUND_IMAGE =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop";

  const categories = [
    "All",
    ...Array.from(new Set(newsData.map((n) => n.category))),
  ];

  const filteredNews = newsData.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <style>{styles}</style>

      <div
        className="min-h-screen news-bg font-['Poppins'] text-gray-800"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        {/* HEADER */}
        <header className="relative z-10 py-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            School News
          </h1>
          <p className="font-bold text-gray-700">
            VIDYA BHARATI ENGLISH MEDIUM SCHOOL
          </p>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Latest announcements, events and updates from our school
          </p>
        </header>

        {/* FILTER */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 bg-white/90 p-4 rounded-2xl shadow">
            <input
              type="text"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* NEWS GRID */}
        <main className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center bg-white/90 p-10 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-700">
                No news found
              </h3>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default News;
