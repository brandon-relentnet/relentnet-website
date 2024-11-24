import React from 'react';
import { motion } from "framer-motion";

const serviceCards = [
    {
        title: "Custom Web Design",
        description: "Create a stunning, user-friendly website that reflects your brand identity and drives engagement.",
    },
    {
        title: "E-Commerce Solutions",
        description: "Build a scalable, robust e-commerce platform that increases sales and enhances customer experience.",
    },
    {
        title: "SEO & Digital Marketing",
        description: "Implement proven SEO strategies and digital marketing campaigns to boost your online visibility and attract targeted traffic.",
    },
    {
        title: "Cloud Hosting & Support",
        description: "Ensure your website runs smoothly with our reliable, secure hosting solutions and ongoing support services.",
    },
];

const YourSuccess = ({ buttonVariants }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className='space-y-4 mb-6'>
                <p className="responsive-pretitle text-accent font-bold font-sans">SERVICES</p>
                <h1 className="responsive-title text-text font-serif">Your <u>Success</u></h1>
                <h2 className="responsive-subtitle text-subtext1 font-serif">is our mission.</h2>
            </div>
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCards.map((card, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg bg-surface0 shadow-lg text-left text-text transition-transform ease-in-out duration-300 mb-8"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 bg-pink rounded-full flex items-center justify-center text-base font-bold mr-4">&#10003;</div>
                            <h3 className="text-xl font-semibold font-serif">{card.title}</h3>
                        </div>
                        <p className="text-sm text-subtext1 font-sans">{card.description}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink to-blue text-xs sm:text-sm md:text-base rounded-full shadow-lg mb-12"
                aria-label="Explore our services"
            >
                Learn more
            </motion.button>
        </div>
    );
};

export default YourSuccess;
