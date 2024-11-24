/* ./src/pages/home/Home.jsx */
import React from 'react'
import useStore from '../../store'
import ThemeProvider from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import LoremIpsum from '../../components/LoremIpsum';
import { motion, useScroll, useSpring } from "framer-motion";

const Counter = () => {
    const { count, increment, decrement, reset } = useStore();

    return (
        <div className='text-subtext0 shadow rounded flex-1 text-center bg-surface0 w-1/12 mx-auto p-2'>
            <h1 className='mb-2 text-text text-2xl'>Count: {count}</h1>
            <div className='mb-2'>
                <button className='mx-2 shadow hover:shadow-lg hover:text-yellow rounded text-2xl bg-surface1 w-8 hover:bg-surface2 hover:scale-105 transition duration-100' onClick={decrement}>-</button>
                <button className='mr-2 shadow hover:shadow-lg hover:text-green rounded text-2xl bg-surface1 w-8 hover:bg-surface2 hover:scale-105 transition duration-100' onClick={increment}>+</button>
            </div>
            <button className='p-4 shadow hover:shadow-lg hover:text-red bg-surface1 rounded text-lg hover:bg-surface2 hover:scale-105 transition duration-100 mb-2' onClick={reset}>Reset</button>
        </div>
    );
};

function Home() {
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
                    <Counter />
                    <motion.div className="progress-bar bg-pink fixed h-2.5 origin-[0%] bottom-0 inset-x-0" style={{ scaleX }} />
                    <h1>
                        <code>useScroll</code> with spring smoothing
                    </h1>
                    <LoremIpsum />
                </div>
            </ThemeProvider >
        </>
    )
}

export default Home;
