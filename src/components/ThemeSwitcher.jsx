/* ./src/components/ThemeSwitcher.jsx */
import React, { useState, useRef, useEffect } from 'react';
import useStore from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCloudMoon, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
    { name: 'latte', icon: faSun },
    { name: 'frappe', icon: faMoon },
    { name: 'macchiato', icon: faCloudMoon },
    { name: 'mocha', icon: faCloudMoonRain },
];

const ThemeSwitcher = () => {
    const currentTheme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef(null);

    const toggleVisibility = () => setIsVisible((prev) => !prev);

    const currentIcon = themes.find((t) => t.name === currentTheme)?.icon || faSun;

    // Close the popup when clicking outside of it
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);

    // Define animation variants for right-to-left reveal
    const variants = {
        hidden: { opacity: 0, scaleX: 0 },
        visible: { opacity: 1, scaleX: 1 },
        exit: { opacity: 0, scaleX: 0 },
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* Toggle Button */}
            <div>
                <motion.button
                    aria-label="Toggle theme options"
                    aria-expanded={isVisible}
                    className={`flex items-center justify-center w-12 h-12 text-3xl ${isVisible ? 'text-overlay1' : 'text-overlay0 hover:text-overlay1'
                        } rounded-full focus:outline-none`}
                    onClick={toggleVisibility}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                    <FontAwesomeIcon icon={currentIcon} />
                </motion.button>
            </div>
            {/* Animated Popup with Framer Motion */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        ref={popupRef}
                        className="absolute top-0 right-full mr-2 flex space-x-3 z-10 origin-right"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variants}
                        transition={{ type: 'spring', stiffness: 700, damping: 40 }}
                        style={{ transformOrigin: 'right', willChange: 'transform' }}
                    >
                        {themes.map(({ name, icon }) => (
                            <motion.button
                                key={name}
                                aria-label={`Switch to ${name} theme`}
                                className={`flex items-center justify-center w-12 h-12 text-3xl ${currentTheme === name
                                        ? 'text-pink'
                                        : 'text-subtext1 hover:text-text'
                                    } cursor-pointer focus:outline-none rounded-full`}
                                onClick={() => setTheme(name)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                            >
                                <FontAwesomeIcon icon={icon} />
                            </motion.button>
                        ))}
                        <span className="my-auto border-l-2 h-6 border-surface1"></span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
