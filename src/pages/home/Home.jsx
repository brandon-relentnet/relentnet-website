import React, { Suspense } from 'react';
import ThemeProvider from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import HomeHeader from './HomeHeader';
import { motion, useScroll, useSpring } from 'framer-motion';

const RelentlessResults = React.lazy(() => import('../../components/RelentlessResults'));
const LoremIpsum = React.lazy(() => import('../../components/LoremIpsum'));

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
                <HomeHeader
                    title="Empower"
                    subtitle="your online vision."
                    description="RelentNet offers custom web design, robust e-commerce platforms, and effective SEO strategies that align with your business goals, helping you build a powerful online presence."
                    buttonText="Explore"
                />

                {/* Main Content */}
                <div className="container mx-auto text-text">
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
