// ./src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import ThemeSwitcher from './ThemeSwitcher';
import NavbarLink from './NavbarLink';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Adjusted for smoother stagger
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Set the current path when the component mounts
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav className='bg-mantle text-text px-4 py-3 flex justify-between items-center'>
            {/* Left Side: Logo or Brand Name */}
            <div className='text-xl font-bold flex items-center gap-6'>
                RelentNet
                <motion.nav
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                    style={{ display: "flex", gap: "20px" }}
                >
                    {["home", "about", "contact"].map((link) => {
                        const path = link === "home" ? "/" : `/${link}`;
                        const isActive = currentPath === path;

                        return (
                            <NavbarLink
                                key={link}
                                href={path}
                                variants={linkVariants} // Pass the link variants
                                isActive={isActive}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </NavbarLink>
                        );
                    })}
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
