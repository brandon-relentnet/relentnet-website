import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backgroundImage from "/src/assets/images/software-35.png";

const HomeHeader = ({ title, subtitle, description, buttonText }) => {
    const { scrollY } = useScroll();

    // Define the scroll range and movement amounts
    const scrollRange = 1000; // Adjust based on desired effect
    const bgMovement = -200; // Background moves up by 200px

    // Parallax effect for the background image
    const yBackground = useTransform(scrollY, [0, scrollRange], [0, bgMovement]);

    const buttonVariants = {
        hover: { scale: 1.2 },
        tap: { scale: 0.8 },
    };

    return (
        <div className="relative bg-accent mb-32 w-full aspect-[16/9] overflow-hidden">
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

            {/* Gradient Circle Overlay */}
            <div className="relative z-10 h-full">
                <div className="h-full w-full bg-radial-custom flex items-center justify-center px-4">
                    {/* Content */}
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <h1 className="responsive-title">{title}</h1>
                        <h2 className="responsive-subtitle">{subtitle}</h2>
                        <p className="responsive-paragraph">{description}</p>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink to-blue text-xs sm:text-sm md:text-base rounded-full shadow-lg"
                            aria-label="Explore our services"
                        >
                            {buttonText}
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
