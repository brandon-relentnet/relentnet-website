/* ./src/pages/about/About.jsx */
import React from 'react'
import ThemeProvider from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import LoremIpsum from '../../components/LoremIpsum';
import { motion, useScroll, useSpring } from "framer-motion";

function About() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <ThemeProvider >
                <Navbar />
                <div className='container mx-auto text-text my-96'>
                    <motion.div className="progress-bar bg-pink fixed h-2.5 origin-[0%] bottom-0 inset-x-0" style={{ scaleX }} />
                    <LoremIpsum />
                </div>
            </ThemeProvider >
        </>
    )
}

export default About;
