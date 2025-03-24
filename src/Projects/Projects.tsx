
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundPractice from "/BackgroundPractice.svg";

export default function ExperiencePage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"], // Track when About Me enters view
  });

  // Moves the box from top to bottom smoothly, then out of view
  const boxY = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]); 
  const boxOpacity = useTransform(scrollYProgress, [0, 0.4, 0.95, 1], [0, 1, 1, 0]); // Fade out at bottom
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Parallax effect

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen flex items-start justify-center overflow-hidden px-4">
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundPractice})`,
          y: bgY, // Moves background slightly
        }}
      />

      {/* White Box - Moves down & fades out */}
      <motion.div
        className="bg-white p-6 sm:p-8 md:p-12 w-full max-w-3xl shadow-lg rounded-lg relative 
        sm:mx-auto md:mr-auto md:ml-10" // Center on small screens, shift right on larger screens
        style={{ y: boxY, opacity: boxOpacity }} 
      >
        <h2 className="text-xl font-semibold mb-3">Projects</h2>
        <p>My current projects include a full-stack web application called <b>TOAD</b> which stands
          for To Outline a Destination. TOAD is a trip planning app that helps users navigate
          between different trips, manage their itinerary, keep track of expenses, and use polls
          among friends for ideas. I worked on this project with 4 other UCSC students. Interested?
          Click here. <br /><br />
          This resume portfolio website is also a web application I made to highlight my front-end skills.
          I hope you are enjoying this site! Stay tuned for future projects, for they will be linked here.
        </p>
      </motion.div>
    </div>
  );
}
