import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundPractice from "/BackgroundPractice.svg";

export default function AboutPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"], // Track when About Me enters view
  });

  // Moves the box from top to bottom smoothly, then out of view
  const boxY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]); 
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
        sm:mx-auto md:ml-auto md:mr-10" // Center on small screens, shift right on larger screens
        style={{ y: boxY, opacity: boxOpacity }} 
      >
        <h2 className="text-xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-700">
          I am a third-year computer science major at University of California Santa Cruz. <b>Go Slugs!</b>  
          <br /><br />
          I am interested in web development and making full-stack applications. My hobbies include reading 
          fantasy novels, playing the piano, and Zumba.  
          <br /><br />
          Send me a note if you have any book recommendations!
        </p>
      </motion.div>
    </div>
  );
}
