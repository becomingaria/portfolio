import TypeOut from '../components/TypeOut';
import { useWipeNavigate } from '../components/WipeTransition';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const wipeNavigate = useWipeNavigate();

    // Content for each bullet point
    const bulletPoints = [
        "Hello, welcome to my website! This site is a showcase of a few of the things that I do for work. Keep scrolling to see more sections.",
        "The skills section lists the software and development tools that I use the most often, and while it's not a comprehensive list of every tool that I've used in my life, they are the spread of them that I feel confident in.",
        "In projects, you'll find an array of published applications and other projects that I've been proud to work on.",
        "And at the bottom, you'll find contact information with a few ways to reach out/find me online!",
        "resume-link" // Special marker for resume link bullet
    ];

    // Setup staggered reveal of bullet points
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < bulletPoints.length) {
                setVisibleItems(prev => [...prev, currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // 1 second delay between starting each bullet point typing

        return () => clearInterval(interval);
    }, [bulletPoints.length]);


    return (
        <>
            <section className="about-me">
                <h2><TypeOut inputString="About Me" typeSpeed={50} /></h2>
                <main>
                    <AnimatePresence>
                        {bulletPoints.map((content, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: visibleItems.includes(index) ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {visibleItems.includes(index) && (
                                    index === 4 ? (
                                        <a
                                            href="/resume"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                wipeNavigate('/resume');
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            My Resume is here.
                                        </a>
                                    ) : (
                                        <TypeOut
                                            inputString={content}
                                            typeSpeed={30}
                                        />
                                    )
                                )}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </main>
            </section>
        </>
    );
};

export default About;