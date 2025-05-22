import React, { useEffect,useRef } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../App.css"; 
import img1 from "../fullstack2.png"
import img2 from "../python.gif"
import img3 from "../course.png"
import video from "../gif.gif"
import img6 from "../checkmark.png"
import img7 from "../web-development-1.gif"

const Landing = () => {
//carosual section
const carouselRef = useRef(null);
useEffect(() => {
const carousel = carouselRef.current;
if (!carousel) return;
// Clone all items to create an infinite effect
const items = Array.from(carousel.children);
items.forEach((item) => {
const clone = item.cloneNode(true);
carousel.appendChild(clone);});}, []);
//cards scrolldown
const cardsRef = useRef(null);
const scrollToCards = () => {
if (cardsRef.current) {
cardsRef.current.scrollIntoView({ behavior: "smooth" });}};
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
return (
<div>
{ /* Header Section */}
{/* Header (Fixed Above Image) */}
{/* Sticky Header */}
<header
  className="bg-[#00005A] backdrop-blur-lg text-white py-3 px-4 sm:py-4 sm:px-6 flex items-center justify-between w-full 
             rounded-b-[6vw] sm:rounded-b-[2vw] shadow-md z-50 fixed top-0 left-0">
  <h1 className="text-xl sm:text-2xl font-bold bg-[#00005A] text-white px-5 py-1 sm:px-4 sm:py-2 rounded">
    Enlighto
  </h1>

  {/* Desktop Menu */}
  <div className="ml-auto hidden md:flex gap-2 bg-[#00005A]">
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={scrollToCards}>
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

{/* Spacer to prevent content hiding behind header */}
<div className="h-[80px] sm:h-[100px]"></div>

{/* Mobile Menu (Dropdown Below Header) */}
{isOpen && (
  <div className="absolute top-[90px] right-4 md:hidden flex flex-col items-start bg-[#00005A] gap-2 p-4 rounded-lg shadow-lg z-40">
    <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={scrollToCards}>
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

{/* Image Section */}
<div className="flex min-h-[50vh] sm:min-h-[80vh] md:min-h-[70vh] relative">
  <section className="body-font relative w-full">
    <div className="flex px-0 py-0 md:flex-row flex-col">
      <div className="lg:max-w-lg lg:w-full md:w-full w-full">
        <img  
          className="w-screen object-cover rounded-b-[2vw] min-w-[17vh] sm:min-w-[40vh] md:min-w-[221vh] min-h-[80vh] sm:min-h-[50vh] md:min-h-[50vh]" 
          src={img1} 
          alt='video' />
</div>
</div>
</section>
  

  
</div>


{/* our services */}
<div ref={cardsRef}>
{Array.from({ length: 1 }).map((_, index) => (
<div id={`card-${index + 1}`} key={index}>
<h2  className="text-[6vw] leading-[3vw] 
                   sm:text-[4.5vw] sm:leading-[5.5vw] 
                   md:text-[3.5vw] md:leading-[4vw] 
                   lg:text-[2.9vw] lg:leading-[3.5vw] 
                   font-bold text-center mb-[2vw] 
                   text-[#00005A] font-[Objective] pt-9">
        Our Courses </h2>
<h2 className="text-[8.5vw] leading-[4vw] 
                   sm:text-[3.2vw] sm:leading-[4vw] 
                   md:text-[2.2vw] md:leading-[3vw] 
                   lg:text-[1.41vw] lg:leading-[1.6vw] 
                   text-[#00005A] text-center mb-[2vw]  pb-6">
        "Empowering Solo Learners, One Course at a Time.
</h2>
</div>
      ))}
</div>
{/* cards section */}
<div  className="bg-white rounded-[5vw] sm:rounded-[3vw] py-5">
<div className="container mx-auto px-5 md:px-20" >
    {/* Flex container for cards */}
<div className="flex flex-col md:flex-row gap-3 justify-between">
{/* Card 1 */}
<div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3 rounded-[5vw] sm:rounded-[1.5vw] ">
<img src={img7} alt="fullstack"className="w-full min-h-[20vh] sm:min-h-[50vh]  md:min-h-[38vh] object-cover rounded-t-lg  rounded-[3vw] sm:rounded-[1.5vw]" />
<h5 className="text-xl font-bold mt-7 text-white bg-[#00005A]">Fullstack Development</h5>
<p className="text-white mt-1.5 bg-[#00005A]">Learn to build responsive web applications using HTML, CSS, JavaScript, and backend technologies like Node.js and Express.</p>
<ul className="mt-2 space-y-3 bg-[#00005A]">
<li className="flex items-center bg-[#00005A]">
<img src={img6} alt="tick" className="w-4 h-3 mr-2 bg-[#00005A]" />
<span className="text-white mt-7 bg-[#00005A]">Master front-end and back-end development</span>
</li>
<li className="flex items-center bg-[#00005A]">
<img src={img6} alt="tick" className="w-4 h-4 mr-2 text-white bg-[#00005A]"/>
<span className="text-white mt-2 bg-[#00005A]">Build dynamic, full-featured web apps</span>
</li>
</ul>
<div className="mt-10 flex justify-between text-white items-center bg-[#00005A]">
<button className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
Enroll Now
</button>
<button className="text-white   bg-[#00005A] hover:underline">
            Learn more
            </button>
</div>
</div>
{/* Card 2 */}
<div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3 rounded-[5vw] sm:rounded-[1.5vw]" >
<img src={img2} alt="python"className=" min-h-[20vh] sm:min-h-[40vh]  md:min-h-[39vh] object-cover rounded-t-lg text-white bg-[#00005A] rounded-[3vw] sm:rounded-[1.5vw]"/>
<h5 className="text-xl font-bold mt-7 text-white bg-[#00005A]">Python</h5>
<p className="text-white mt-1.5 bg-[#00005A]">Start coding with Python, one of the most popular and versatile programming languages. Ideal for beginners and professionals.</p>
<ul className="mt-3.5 space-y-4 text-white bg-[#00005A]">
<li className="flex items-center text-white bg-[#00005A]">
<img src={img6} alt="tick" className="w-4 h-4 mr-2 text-white bg-[#00005A]"/>
<span className="text-white bg-[#00005A]">Learn from basics to advanced Python concepts</span>
</li>
<li className="flex items-center mt-7 text-white bg-[#00005A]">
<img src={img6} alt="tick" className="w-4 h-4 mr-2 text-white bg-[#00005A]" />
<span className="text-white bg-[#00005A]">Build projects like web apps and automation scripts</span>
</li>
</ul>

<div className="mt-4 flex justify-between text-white  items-center bg-[#00005A]">
<button className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Enroll Now
</button>
<button className="text-white   bg-[#00005A] hover:underline">
            Learn more
            </button>
</div>
</div>
{/* Card 3 */}
<div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3 rounded-[5vw] sm:rounded-[1.5vw]">
<img src={video} alt="Datar" className="min-h-[20vh] sm:min-h-[50vh] md:min-h-[38vh] object-cover rounded-t-lg text-white bg-[#00005A] rounded-[3vw] sm:rounded-[1.5vw]"/>
<h5 className="text-xl font-bold mt-7 text-white bg-[#00005A]">Data Analysis</h5>
<p className="text-white bg-[#00005A] mt-1.5"> Gain expertise in data analysis using Python, Excel, and SQL. Learn to interpret data and make data-driven decisions.</p>
<ul className="mt-9 space-y-11 text-white bg-[#00005A]">
<li className="flex items-center text-white bg-[#00005A]">
<img src={img6} alt="tick"className="w-4 h-4 mr-2 text-white bg-[#00005A]"/>
<span className="text-white bg-[#00005A]">Analyze and visualize data with Python</span>
</li>
<li className="flex items-center text-white bg-[#00005A]">
<img src={img6} alt="tick"className="w-4 h-4 mr-2 text-white bg-[#00005A]"/>
<span className="text-white bg-[#00005A]">Hands-on projects with real-world datasets</span>
</li>
</ul>
<div className="mt-4 flex justify-between items-center text-white bg-[#00005A]">
<button className="text-[#00005A] bg-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Enroll Now
</button>
 <button className="text-white bg-[#00005A] rounded-bl-[1px] rounded-br-[3px] hover:underline">
            Learn more
</button>
</div>
</div>
</div>
</div>
</div>
        
           {/* footer*/}
           <section
  id="scroll_footer"
  className="v2_footer flex flex-col bg-[#00005A] h-auto text-white mt-[2vw] p-[2vw] sm:p-[3vw] rounded-t-[3vw] relative z-10"
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



export default Landing;