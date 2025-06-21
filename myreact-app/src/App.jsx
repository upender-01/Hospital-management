import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import AppointmentForm from "./Components/Appointment";
import FAQ from "./Components/FAQS";
import Footer from "./Components/Footer";
import Abouthelp from "./Components/About-help";
import AboutDr from "./Components/AboutDr";
import Serviceshelp from "./Components/Services-help";
import ContactSupport from "./Components/Contactsupport";
import PrivacyPolicy from "./Components/Privacypolicy";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white  text-gray-800  transition-all duration-300">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Abouthelp />} />
          <Route path="/aboutDr" element={<AboutDr/>} />
          <Route path="/ourservices" element={<Serviceshelp/>} />
          <Route path="/appointment" element={<AppointmentForm/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contact" element={<ContactSupport/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
