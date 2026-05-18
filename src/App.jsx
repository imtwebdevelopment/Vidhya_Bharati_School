// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Existing pages under /components
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"; // optional overview page
import Admission from "./components/Admission";
import Facilities from "./components/Facilities";
import Disclosure from "./components/Disclosure";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import News from "./components/News";

// Admissions: standalone pages
import AdmissionRequirements from "./components/Admission Information/AdmissionRequirements";
import ApplicationProcess from "./components/Admission Information/ApplicationProcess";

// ABOUT section pages shown from Navbar dropdown
import Aboutvbskcbse from "./components/about us/Aboutvbskcbse";
import PrincipalDesk from "./components/about us/FromPrincipalsDesk";
import RequiredDocuments from "./components/Admission Information/RequiredDocuments";
import Fees from "./components/Admission Information/Fees";
import Scholarships from "./components/Admission Information/Scholarships";
import OnlineFormFields from "./components/Admission Information/OnlineFormFields";

import Management from "./components/Top navbar/Management";
import MissionAndVision from "./components/Top navbar/MissionAndVision";
import SchoolLifeActivities from "./components/Top navbar/SchoolLifeActivities";
import History from "./components/Top navbar/History";
import OurStaff from "./components/Top navbar/OurStaff";
import Accreditations from "./components/Top navbar/Accreditations";
import PublicDisclosure from "./components/Top navbar/PublicDisclosure";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main */}
            <Route path="/" element={<Home />} />

            {/* ABOUT US */}
            <Route path="/about" element={<Aboutvbskcbse />} />
            <Route path="/about/principal" element={<PrincipalDesk />} />
            {/* Keep your old AboutUs at a secondary path (optional) */}
            <Route path="/about/overview" element={<AboutUs />} />

            {/* Admissions */}
            <Route path="/admission" element={<Admission />} />
            <Route path="/admission-requirements" element={<AdmissionRequirements />} />
            <Route path="/admission-process" element={<ApplicationProcess />} />
            <Route path="/required-documents" element={<RequiredDocuments />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/onlineformfields" element={<OnlineFormFields />} />


            {/* New route */}
            <Route path="/management" element={<Management />} />
            <Route path="/mission-vision" element={<MissionAndVision />} />
            <Route path="/schoollife-activities" element={<SchoolLifeActivities />} />
            <Route path="/history" element={<History />} />
            <Route path="/our-staff" element={<OurStaff />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/public" element={<PublicDisclosure/>}/>





            {/* Other sections */}
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/MandatoryPublicdisClosure" element={<Disclosure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<News />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
