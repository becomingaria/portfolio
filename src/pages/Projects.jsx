import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import TypeOut from '../components/TypeOut';
import { motion } from 'framer-motion';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    // Project data is used in the Resume component through projectsData.js
    const projects = [
        // Top Priority Projects
        {
            name: "Aqueduct",
            description: "Milvian Group's flagship IoT platform providing water intelligence, energy management, indoor air quality monitoring, asset intelligence, unified dashboards, and automated alerts. Hardware-agnostic with 20+ sensor partners supporting LoRaWAN, BACnet, and Modbus protocols.",
            url: "https://milviangroup.com/aqueduct-platform",
            categories: ["web", "frontend", "full-stack", "iot", "enterprise", "cicd"]
        },
        {
            name: "Atria - The Hardware App",
            description: "An extensible application used at all levels of the Milvian Hardware Team's install, monitoring, and provisioning processes for Aqueduct and the LoRaWAN Platform. The singular platform for hardware installers, device provisioners, site surveyors, and site administrators to monitor hardware status and perform provisioning, installations, and remediation.",
            url: "https://www.atria.milvian-amzl.com/",
            categories: ["web", "full-stack", "backend", "utility", "aws", "iot", "enterprise", "hardware", "cicd", "mobile"]
        },

        // Enterprise AWS Projects
        {
            name: "LoRaWAN Platform CI/CD Pipeline",
            description: "Architected and implemented a multi-account AWS CDK infrastructure-as-code solution for Amazon's LoRaWAN IoT platform, establishing automated CI/CD pipelines with approval gates that seamlessly deploy across development and production environments.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "aws", "iot", "cdk", "enterprise", "cicd", "cloud", "database"]
        },
        {
            name: "BMS Monitoring Suite for Amazon OpsTech",
            description: "Led development of comprehensive Building Management System (BMS) monitoring measures for all Corp connected OpsTech support buildings at Amazon, creating enterprise solutions that monitor facility infrastructure, improve operational efficiency, and enable proactive maintenance across the global building network.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "cdk", "enterprise", "cicd", "database"]
        },
        {
            name: "Wirefree Gateway Health Dashboard",
            description: "AWS CDK solution that monitors LoRaWAN gateway connectivity for Amazon's Corp connected OpsTech support facilities, providing real-time visibility into building management systems across the global infrastructure and enabling timely issue detection through automated health snapshots and visual analytics.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "cdk", "enterprise", "cicd", "database"]
        },
        {
            name: "LoRaWAN Device Health Dashboard",
            description: "Enterprise AWS solution for monitoring IoT sensor networks throughout Amazon's global OpsTech support buildings, creating automated snapshots of building management system health metrics and enabling facilities teams to maintain optimal operational conditions through comprehensive visual dashboards.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "enterprise", "database"]
        },

        // Notable Personal Projects
        {
            name: "Monster Finder",
            description: "An application for finding monsters to use in your Dungeons & Dragons 5th Edition roleplaying game.",
            url: "https://monsterfinder5e.netlify.app/",
            categories: ["web", "database"]
        },
        {
            name: "Borgbot",
            description: "A do-it-all discord bot that is far too powerful for how silly it is.",
            url: "https://github.com/becomingaria/borgbot/",
            categories: ["utility", "backend", "database"]
        },

        // Smaller Fun Projects
        {
            name: "Textmagotchi",
            description: "A Tamagotchi-like game for your browser!",
            url: "https://becomingaria.github.io/textmagotchi/",
            categories: ["game", "frontend"]
        },
        {
            name: "RPG-Dice-React",
            description: "An application for rolling polyhedral dice for tabletop rollplaying games.",
            url: "https://rpg-dice-react.netlify.app/",
            categories: ["web", "frontend"]
        },
        {
            name: "Simple-To-Do",
            description: "A simple rapidly fast to-do application that works without a database.",
            url: "https://becomingaria.github.io/simple-to-do/",
            categories: ["web", "frontend", "utility"]
        },
    ];

    // Filter categories
    const categories = ["all", "web", "frontend", "backend", "full-stack", "game", "utility", "database", "mobile", "aws", "iot", "data", "cdk", "enterprise", "cicd", "cloud", "hardware"];

    // Filtered projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(filter));

    useEffect(() => {
        // Reset visible projects when filter changes
        setVisibleProjects([]);

        // Create a staggered reveal animation for projects
        let currentIndex = 0;
        const revealInterval = setInterval(() => {
            if (currentIndex < filteredProjects.length) {
                setVisibleProjects(prev => [...prev, currentIndex]);
                currentIndex++;
            } else {
                clearInterval(revealInterval);
            }
        }, 100);

        return () => clearInterval(revealInterval);
    }, [filteredProjects.length, filter]);

    // Function to determine grid columns based on screen width
    const getGridColumns = () => {
        const width = window.innerWidth;
        if (width >= 1200) return 'repeat(4, 1fr)';
        if (width >= 768) return 'repeat(3, 1fr)';
        if (width >= 480) return 'repeat(2, 1fr)';
        return '1fr';
    };

    // State to track grid columns
    const [gridColumns, setGridColumns] = useState(getGridColumns());

    // Update grid columns on window resize
    useEffect(() => {
        const handleResize = () => {
            setGridColumns(getGridColumns());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="projects">
            <h2 className="section-title">
                <TypeOut inputString="My Projects" typeSpeed={50} />
            </h2>

            {/* Category filter buttons */}
            <div className="filter-container">
                {categories.map(category => (
                    <motion.button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        {filter === category && (
                            <motion.div
                                className="button-underline"
                                layoutId="underline"
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: gridColumns,
                    gap: '20px',
                    width: '100%'
                }}
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={`project-wrapper ${visibleProjects.includes(index) ? 'visible' : 'hidden'}`}
                        style={{ "--item-index": index }}
                        variants={childVariants}
                        layoutId={`project-${project.name}`}
                    >
                        <Project
                            name={project.name}
                            description={project.description}
                            url={project.url}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.p
                    className="no-projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    No projects found in this category.
                </motion.p>
            )}
        </section>
    );
};

export default Projects;