import React, { useState, useMemo, useCallback } from 'react';
import useStore from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudMoon, faCloudMoonRain, faMoon } from '@fortawesome/free-solid-svg-icons';

const themes = [
    { name: 'latte', icon: faSun },
    { name: 'frappe', icon: faMoon },
    { name: 'macchiato', icon: faCloudMoon },
    { name: 'mocha', icon: faCloudMoonRain },
];

const ThemeButton = React.memo(({ themeName, icon, isActive, onClick }) => (
    <button
        aria-label={`Switch to ${themeName} theme`}
        className={`mr-3 last:mr-0 hover:scale-110 active:scale-125 transition duration-100 ${isActive ? 'text-pink' : 'text-subtext1 hover:text-text'
            }`}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={icon} />
    </button>
));

const ThemeSwitcher = () => {
    const { theme, setTheme } = useStore();
    const [isVisible, setIsVisible] = useState(false);

    const toggleDiv = useCallback(() => {
        setIsVisible((prev) => !prev);
    }, []);

    const currentIcon = useMemo(
        () => themes.find((t) => t.name === theme)?.icon || faSun,
        [theme]
    );

    const handleSetTheme = useCallback(
        (themeName) => () => setTheme(themeName),
        [setTheme]
    );

    return (
        <div className='inline-block'>
            <button
                aria-label="Toggle theme options"
                className={`text-3xl mb-2 hover:scale-110 active:scale-125 transition duration-100 ${isVisible ? 'text-overlay1' : 'text-overlay0 hover:text-overlay1'
                    }`}
                onClick={toggleDiv}
            >
                <FontAwesomeIcon icon={currentIcon} />
            </button>

            {isVisible && (
                <div className='p-5 text-3xl bg-overlay0 rounded transition-opacity duration-300 ease-in-out'>
                    {themes.map((t) => (
                        <ThemeButton
                            key={t.name}
                            themeName={t.name}
                            icon={t.icon}
                            isActive={theme === t.name}
                            onClick={handleSetTheme(t.name)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
