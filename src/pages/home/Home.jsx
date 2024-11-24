import React, { Suspense } from 'react';
import ThemeProvider from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import HomeHeader from './HomeHeader';
import { motion, useScroll, useSpring } from 'framer-motion';

const RelentlessResults = React.lazy(() => import('./RelentlessResults'));
const LoremIpsum = React.lazy(() => import('../../components/LoremIpsum'));
const YourSuccess = React.lazy(() => import('./YourSuccess'));

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 15,
        },
    },
    tap: {
        scale: 0.9,
    },
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
            <ThemeProvider>
                {/* Navbar */}
                <Navbar />

                {/* Responsive Page Header */}
                <Suspense fallback={<div>Loading...</div>}>
                    <section>
                        <HomeHeader
                            buttonVariants={buttonVariants}
                        />
                    </section>
                </Suspense>

                {/* Main Content */}
                <div className="container mx-auto text-text">
                    {/* Your Success Section */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <YourSuccess 
                                buttonVariants={buttonVariants}
                            />
                        </section>
                    </Suspense>

                    {/* Relentless Results Section */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <RelentlessResults />
                        </section>
                    </Suspense>

                    {/* Lorem Ipsum Section */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <LoremIpsum />
                        </section>
                    </Suspense>
                </div>

                {/* Progress Bar */}
                <motion.div
                    className="progress-bar bg-pink fixed h-2.5 origin-[0%] bottom-0 inset-x-0"
                    style={{ scaleX }}
                />
            </ThemeProvider>
        </>
    );
}

export default Home;
