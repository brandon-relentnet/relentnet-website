/* ./src/components/Navbar.jsx */
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const Navbar = () => {
    return (
        <nav className='bg-mantle text-text px-4 py-3 flex justify-between items-center'>
            {/* Left Side: Logo or Brand Name */}
            <div className='text-xl font-bold'>
                RelentNet
                <motion.nav
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                    style={{ display: "flex", gap: "20px" }}
                >
                    {["home", "about", "contact"].map((link) => (
                        <motion.a key={link} href={`${link}`} variants={linkVariants}>
                            {link}
                        </motion.a>
                    ))}
                </motion.nav>
            </div>

            {/* Right Side: ThemeSwitcher */}
            <div className='flex items-center'>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
