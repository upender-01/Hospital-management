import Logo from "../assets/logo.png";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaGoogle, FaBars } from "react-icons/fa";
import ImageSlider from "./Imageslider";
import eyecare from "../assets/eyecare.jpg";
import Donatebutton from "./Donatebuton";
import fac from "../assets/fac-3.jpg";
import { useState } from "react";
import Services from "./Services";
import AppointmentForm from "./Appointment";
import FAQ from "./FAQS";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="scroll-smooth bg-white text-gray-900 dark:text-gray-100 transition-colors">
      {/* Contact Bar (scrolls away) */}
<div className="bg-blue-700 text-white py-2 px-4 flex flex-col lg:justify-around md:justify-around sm:flex-row sm:justify-between items-center text-center font-semibold">
  <div className="flex flex-col sm:flex-row items-center gap-4 py-[0.8rem]">
    <div className="flex items-center gap-2">
      <FaPhone className="rotate-90" />
      <a href="tel:+918074995761">+91 8074995761</a>
    </div>
    <div className="flex items-center gap-2">
      <FaEnvelope />
      <a href="mailto:bhukyaupender31@gmail.com">bhukyaupender31@gmail.com</a>
    </div>
  </div>
  <div className="flex gap-4 mt-2 sm:mt-0">
    <a href="#"><FaEnvelope size={20} /></a>
    <a href="#"><FaGoogle size={20} /></a>
    <a href="#"><FaFacebook size={20} /></a>
    <a href="#"><FaInstagram size={20} /></a>
  </div>
</div>

{/* Navbar (Fixed on scroll) */}
<div className="fixed top-0 left-0 w-full z-50 bg-gray-200 shadow-md">
  <div className="flex flex-col sm:flex-row items-center justify-around text-black px-4 py-2">
    <div className="flex justify-between w-full sm:w-auto items-center">
     <a href="/"> <img src={Logo} className="h-[5rem] sm:h-[8rem] w-auto" alt="Logo" /></a>
      <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
    </div>
    <nav className={`flex-col sm:flex-row flex gap-4 sm:gap-8 font-bold items-center ${menuOpen ? "flex" : "hidden sm:flex"} mt-2 sm:mt-0`}>
      <a href="/" className="hover:text-blue-500">Home</a>
      <a href="/aboutus" className="hover:text-blue-500">About Us</a>
      <a href="/ourservices" className="hover:text-blue-500">Our Services</a>
      <a href="/contact" className="hover:text-blue-500">Contact Us</a>
      <a href="/AboutDr" className="hover:text-blue-500">Doctor</a>
    </nav>
    <div className="space-x-[1rem] flex justify-center items-center">
      <Donatebutton/>
      <button className="px-[2rem] py-[1rem] bg-blue-500 outline-none shadow-lg shadow-blue-500/50 text-white font-bold hover:bg-blue-700 block lg:px-[2rem]  lg:px-[2rem] sm:px-[0.5rem] lg:py-[1rem]  sm:py-[0.2rem] sm:px-[0.5rem] lg:block md:block sm:hidden rounded-lg duration-500 hover:-translate-z-4 ">
        <a href="/appointment">Appointment</a>
      </button>
    </div>
  </div>
</div>

{/* Push down the next section to make space for fixed navbar */}
<div className="mt-[8rem]"></div>


      {/* Slider */}
      <ImageSlider id="home" />

      {/* Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-20 py-5">
        {/* Card templates... */}
      </div>

      {/* Facilities */}
      <section id="services" className="px-4 md:px-20 text-center">
        <h1 className="text-sky-500 bg-cyan-200 inline-block px-4 py-2 rounded-xl uppercase">Facilities we Have</h1>
        <h2 className="text-3xl font-bold text-black mt-4">What Facilities We Provide</h2>
        <div className="flex flex-col md:flex-row gap-6 py-8">
          {[{ img: eyecare, title: "Eye Care Services" }, { img: fac, title: "General Health Facilities" }].map((f, idx) => (
            <div key={idx} className="bg-gray-200 dark:bg-gray-200 p-4 w-full" data-aos="fade-up" data-aos-delay={idx * 200}>
              <img src={f.img} alt="facility" className="h-[40vh] w-full object-cover shadow hover:scale-105 duration-300" />
              <h3 className="text-xl mt-2 font-semibold">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <Services/>
      <Aboutus/>
      <AppointmentForm/>
      <FAQ/>
      <Footer/>
    </main>
  );
};

export default Home;
