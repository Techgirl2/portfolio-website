import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PageHeader from "./pageheader";
import Pic from "/Pic.svg";
import BackgroundPractice from "/BackgroundPractice.svg";
import star from "/star.svg";

export default function LandingPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll(); // Tracks scroll position
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight); // Default height

  // Update height on resize (for mobile responsiveness)
  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.clientHeight);
      }
    };
    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Motion values based on section height
  const bgY = useTransform(scrollY, [0, sectionHeight], ["0%", "-10%"], { clamp: true });
  const textY = useTransform(scrollY, [0, sectionHeight], ["0px", "50px"], { clamp: true });
  const imageY = useTransform(scrollY, [0, sectionHeight], ["0px", "30px"], { clamp: true });

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundPractice})`,
          y: bgY, // Moves background at a slower speed
        }}
      />

      {/* Page Header */}
      <PageHeader />

      {/* Main Content - Moves slightly with scroll but is contained */}
      <motion.div
        className="flex flex-grow items-center justify-center px-6 sm:px-10 flex-col lg:flex-row gap-10 lg:gap-20 text-center lg:text-left relative z-10 overflow-hidden"
        style={{ y: textY }} // Text follows scroll within limits
        initial={{ opacity: 0, y: 30 }} // Starts faded & slightly lower
        animate={{ opacity: 1, y: 0 }} // Smooth fade-in
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Left Side - Text */}
        <div className="max-w-lg mt-10 sm:mt-12 md:mt-5">
          <h1 className="text-white/50 text-2xl sm:text-3xl md:text-5xl font-sunflower mb-3 md:mb-6">
            Hello, my name is
          </h1>
          <h2 className="text-white/75 text-3xl sm:text-4xl md:text-7xl font-bold font-sunflower">
            Angelina Cruz.
          </h2>
          <p className="text-white/50 mt-4 sm:mt-6 md:mt-14 text-lg sm:text-xl md:text-2xl font-sunflower">
            I am an aspiring software engineer with <br />
            an interest in web development. <br />
            Welcome to my portfolio website!
          </p>
        </div>

        {/* Right Side - Image (follows scroll but contained) */}
        <motion.div
          className="relative md:p-6 rounded-xl mb-8 sm:mb-12 md:mt-0 md:mb-0"
          style={{ y: imageY }} // Image follows scroll but is contained
          initial={{ opacity: 0, scale: 0.9 }} // Starts faded and slightly smaller
          animate={{ opacity: 1, scale: 1 }} // Grows into place
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={Pic}
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#032527] rounded-[20%] shadow-lg object-contain mx-auto"
          />
          {/* Decorative Stars */}
          <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
            <img src={star} alt="star" className="w-12 h-12 sm:w-20 sm:h-20 md:w-10 md:h-10 lg:w-20 lg:h-20" />
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
            <img src={star} alt="star" className="w-12 h-12 sm:w-20 sm:h-20 md:w-10 md:h-10 lg:w-20 lg:h-20" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
