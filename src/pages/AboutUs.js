import React, { useState } from "react";
import "../App.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleCourseClick = () => {
      navigate("/", { state: { scrollToCourses: true } });
    };
  return (
    <div>
      {/* Header Section */}
      <header
  className="bg-[#00005A] backdrop-blur-lg text-white py-3 px-4 sm:py-4 sm:px-6 flex items-center justify-between w-full 
             rounded-b-[6vw] sm:rounded-b-[2vw] shadow-md z-50 fixed top-0 left-0">
  <h1 className="text-xl sm:text-2xl font-bold bg-[#00005A] text-white px-5 py-1 sm:px-4 sm:py-2 rounded">
    Enlighto
  </h1>

  {/* Desktop Menu (Hidden on Mobile) */}
  <div className="ml-auto hidden md:flex gap-2 bg-[#00005A]">
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"  onClick={handleCourseClick} >
      Courses
    </button>
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={() => navigate("/contact")}>
      ContactUs
    </button>
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={() => navigate("/aboutus")}>
      AboutUs
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button className="text-3xl font-bold hover:text-gray-300 absolute md:hidden top-4 right-4" onClick={() => setIsOpen(!isOpen)}>
    ☰
  </button>
</header>

{/* Spacer to push page content below sticky header */}
<div className="h-[80px] sm:h-[90px]"></div>

{/* Mobile Menu */}
{isOpen && (
  <div className="absolute top-16 right-4 md:hidden flex flex-col items-start bg-[#00005A] gap-2 p-4 rounded-lg shadow-lg z-40">
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"onClick={handleCourseClick}>
      Courses
    </button>
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={() => navigate("/contact")}>
      ContactUs
    </button>
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={() => navigate("/aboutus")}>
      AboutUs
    </button>
  </div>
)}

<div className="h-[80px] sm:h-[100px]"></div>

{/* About Section */}
<section className="px-6 md:px-20 py-10 text-center bg-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-[#00005A] mb-4">About Us</h2>
  <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
    At <strong>Enlighto</strong>, our mission is to empower solo learners with affordable, high-quality online courses in programming, development, and tech skills. We provide step-by-step guidance and hands-on projects for every student.
  </p>
  
  <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
    <div className="bg-[#00005A] text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold bg-[#00005A] mb-2">💡 Vision</h3>
      <p className=" bg-[#00005A]">We envision a world where every learner gets equal access to quality tech education without boundaries.</p>
    </div>
    <div className="bg-[#00005A] text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl  bg-[#00005A] font-semibold mb-2">🚀 What We Offer</h3>
      <ul className="list-disc bg-[#00005A] ml-5">
        <li className="bg-[#00005A]">Beginner to Advanced Programming Courses</li>
        <li className="bg-[#00005A]">Live Projects & Certification</li>
        <li className="bg-[#00005A]">Career Support & Resume Building</li>
      </ul>
    </div>
  </div>
</section>


       {/* footer*/}
           <section
            id="scroll_footer"
            className="v2_footer flex flex-col bg-[#00005A] h-auto text-white mt-7 p-[2vw] sm:p-[3vw] rounded-t-[3vw] relative z-10"
          >
            {/* Top Section */}
            <div className="top flex flex-col md:flex-row justify-between bg-[#00005A] space-y-[0.9vw] md:space-y-0">
              {/* Links */}
              <div className="bg-[#00005A] text-white">
                <ul className="en flex flex-col  bg-[#00005A] md:flex-row space-y-[1vw] md:space-y-0 md:space-x-[3vw]">
                  <li className="bg-[#00005A] pl-[1vw] md:pl-[0.3vw] pr-[5vw] md:pr-0">
                    <a href="https://airportr.com/en/refer-a-friend/" className="text-white bg-[#00005A]">
                      Refer-a-friend
                    </a>
                  </li>
                  <li className="bg-[#00005A]">
                    <a href="https://airportr.com/en/terms-and-conditions/" className="text-white bg-[#00005A]">
                      Terms of Use
                    </a>
                  </li>
                  <li className="bg-[#00005A]">
                    <a href="https://airportr.com/en/privacy-policy/" className="text-white bg-[#00005A]">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
          
              {/* Social Media Icons */}
              <footer className="bg-[#00005A] text-white pt-[1vw] md:pt-0">
                <div className="flex justify-center bg-[#00005A] md:justify-end space-x-[1vw]">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-[5vw] md:text-[2vw] bg-[#00005A] hover:text-blue-500 transition duration-300" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-[5vw] md:text-[2vw] bg-[#00005A] hover:text-pink-500 transition duration-300" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-[5vw] md:text-[2vw]  bg-[#00005A] hover:text-blue-400 transition duration-300" />
                  </a>
                </div>
              </footer>
            </div>
          
            {/* Opt-In Form */}
            <div className="optin-footer w-full mt-[2vw] bg-[#00005A] pr-[3vw] pl-[2vw] text-left">
            <h2 className="text-[2vw] bg-[#00005A] sm:text-[1.5vw] md:text-[1.5vw] font-bold">
              Sign up for emails and receive offers and service updates
            </h2>
          
            <form className="optin-footer-form mt-[2vw] bg-[#00005A] flex flex-col sm:flex-row justify-start items-center space-y-[1vw] sm:space-y-0 sm:space-x-[3vw]">
              <input
                type="email"
                placeholder="Enter email"
                className="p-[1vw] w-[40vw] sm:w-[10vw] md:w-[25vw] border border-gray-300 rounded-[4vw] sm:rounded-[2vw] bg-[#00005A] text-black"
              />
              <input
                type="submit"
                value="Opt In"
                className="p-[1.5vw] sm:p-[1vw] bg-[#0b57d0ff] bg-[#00005A] -white px-[1vw] sm:px-[2vw] rounded-[5vw] sm:rounded-[2vw] cursor-pointer hover:bg-gray-200 transition"
              />
            </form>
          </div>
          
            {/* Footer Bottom */}
            <hr className="my-[1vw] border-gray-500" />
            <div className="bottom flex flex-col md:flex-row pl-6 bg-[#00005A] justify-between items-center text-center md:text-left">
              <p className="bg-[#00005A] text-[0.9vw] sm:text-[1vw]">Tamizhi © 2025</p>
            </div>
          </section>
    </div>
  );
};

export default AboutUs;
