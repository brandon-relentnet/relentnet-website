import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backgroundImage from "/assets/images/software-35.png";
import svgPaths from "../../svgPaths";

const HomeHeader = ({ buttonVariants }) => {
    const { scrollY } = useScroll();

    // Define the scroll range and movement amounts
    const scrollRange = 1000; // Adjust based on desired effect
    const bgMovement = -200; // Background moves up by 200px

    // Parallax effect for the background image
    const yBackground = useTransform(scrollY, [0, scrollRange], [0, bgMovement]);

    return (
        <div className="relative bg-accent mb-32 w-full aspect-[16/9] overflow-hidden">
            {/* Rotating Gradient Circle */}
            <motion.div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]"
                animate={{ rotate: [0, 360] }}
                transition={{
                    repeat: Infinity,
                    duration: 120, // Adjust the duration for slower or faster rotation
                    ease: "linear"
                }}

            >
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 600" 
                    width="600"
                    height="600"
                    style={{ fill: "var(--blue)" }}
                >
                    <path d={svgPaths.typography} /></svg>
            </motion.div>
            
            {/* Background Image */}
            <motion.div
                className="absolute top-[-10%] left-0 w-full h-[130%]"
                style={{ y: yBackground }}
            >
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            

            <div
                className="absolute top-0 left-0 w-full h-full"
            >
                <div className="h-full w-full bg-radial-custom"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="responsive-title italic -ml-2 text-accent font-serif mb-1">Empower</h1>
                    <h2 className="responsive-subtitle text-text ml-6 font-serif mb-6">your online vision.</h2>
                    <p className="responsive-paragraph text-subtext1 font-sans mb-6">RelentNet offers custom web design, robust e-commerce platforms, and effective SEO strategies that align with your business goals, helping you build a powerful online presence.</p>

                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink to-blue text-xs sm:text-sm md:text-base rounded-full shadow-lg"
                        aria-label="Explore our services"
                    >
                        Explore
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
