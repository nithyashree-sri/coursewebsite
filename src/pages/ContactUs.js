import "../App.css";
import React, { useState, useEffect,} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
const navigate = useNavigate(); // Initialize navigate
const handleCourseClick = () => {
  navigate("/", { state: { scrollToCourses: true } });
};
const goToLandingPage = () => {
    navigate('/')
  }
   {/*form*/}
  const [formData, setFormData] = useState({
    email: "",
    mobilenumber: "",
    description: "",
    attachments: [],
  });
 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData((prev) => ({ ...prev, attachments: [...files] }));
  };
 const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
   // Default language is English
  const [mylanguage, setMylanguage] = useState("English"); 
  // This function is called when the user selects a new language
  const handlelanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setMylanguage(selectedLanguage);
    changeLanguage(selectedLanguage);  // Call a function to handle the language change
  };
    // This function will perform actions when the language changes
  const changeLanguage = (language) => {
    console.log(`Language changed to: ${language}`);
    // Perform any action based on the selected language
    // For example, you can translate the page content, or adjust styles based on the language
    if (language === "English") {
      // Handle English-specific logic
    } else if (language === "Tamil") {
      // Handle Tamil-specific logic
    } else if (language === "Hindi") {
      // Handle Hindi-specific logic
    }
  };

  //menubar
    // Optionally, you can reset it manually somewhere else in the code, like on a different button click:
    const [isOpen, setIsOpen] = useState(false);


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

      {/*form*/}
      <div className="w-full  mt-8 flex pl-[31vw] sm:pl-[48]  items-center">
  <form onSubmit={handleSubmit} className="space-y-4 w-full   items-center max-w-screen-lg mx-auto">
    {/* Email Field */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Your Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-3 rounded w-full sm:w-[38vw] w-[40vw]"
      />
    </div>

    {/* Mobile Number */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Mobile Number</label>
      <input
        type="number"
        name="Mobilenumber"
        value={formData.Mobilenumber}
        onChange={handleChange}
        required
        className="border p-3 rounded w-full sm:w-[38vw] w-[40vw]"
      />
    </div>

    {/* Description */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className="border p-3 rounded h-24 w-full sm:w-[38vw] w-[40vw]"
      ></textarea>
      <p className="text-[#00005A] text-sm">
        Kindly provide as much relevant information as possible.
      </p>
    </div>

    {/* File Upload */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Attachments</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="border p-3 rounded w-full sm:w-[38vw] w-[40vw]"
      />
      <span className="text-[#00005A] text-sm">Add file or drop files here</span>
    </div>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 w-[1300] sm:w-[150px]  rounded-[1.5vw] sm:rounded-[2vw] mx-auto"
      >
        Submit
      </button>
    </div>
  </form>
</div>

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

export default ContactUs;
