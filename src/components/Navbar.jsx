/* ./src/components/Navbar.jsx */
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <nav className='bg-mantle text-text px-4 py-3 flex justify-between items-center'>
            {/* Left Side: Logo or Brand Name */}
            <div className='text-xl font-bold'>
                RelentNet
            </div>

            {/* Right Side: ThemeSwitcher */}
            <div className='flex items-center'>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
