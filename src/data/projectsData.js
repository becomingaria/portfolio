// Export project data to be used in Resume component
// This file extracts the project information from the Projects component

export const featuredProjects = [
    {
        title: "Aqueduct",
        description:
            "Milvian Group's flagship IoT platform providing water intelligence, energy management, indoor air quality monitoring, asset intelligence, unified dashboards, and automated alerts. Hardware-agnostic with 20+ sensor partners supporting LoRaWAN, BACnet, and Modbus protocols.",
        highlights: [
            "Water intelligence with hardware-agnostic approach and 20+ vetted sensor partners",
            "Energy management with circuit-level electricity monitoring and demand analysis",
            "Indoor air quality monitoring with CO2, VOC, PM2.5 tracking",
            "Asset intelligence with equipment runtime tracking and predictive maintenance",
            "Unified dashboards with role-based views and mobile access",
            "Configurable alerts with multi-channel notifications and automated responses",
        ],
        categories: [
            "web",
            "full-stack",
            "frontend",
            "enterprise",
            "architecture",
            "iot",
            "cicd",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://milviangroup.com/aqueduct-platform",
    },
    {
        title: "Atria - The Hardware App",
        description:
            "Extensible application used at all levels of the Milvian Hardware Team's install, monitoring, and provisioning processes for Aqueduct and the LoRaWAN Platform",
        highlights: [
            "Singular platform for hardware installers, device provisioners, site surveyors, and site administrators",
            "Monitor hardware status and perform provisioning and installations",
            "Access notifications about hardware assets for remediation",
            "Migrated and expanded Install App and Device Health App functionality",
        ],
        categories: [
            "web",
            "full-stack",
            "enterprise",
            "architecture",
            "hardware",
            "iot",
            "platform",
            "cicd",
            "mobile",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.atria.milvian-amzl.com/",
    },
    {
        title: "LoRaWAN Platform CI/CD Pipeline",
        description:
            "Architected and implemented a multi-account AWS CDK infrastructure-as-code solution for Amazon's LoRaWAN IoT platform",
        highlights: [
            "Established automated CI/CD pipelines with approval gates",
            "Seamlessly deploy across development and production environments",
        ],
        categories: [
            "backend",
            "aws",
            "iot",
            "cdk",
            "enterprise",
            "cicd",
            "cloud",
            "database",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.amazon.com/b2b",
    },
    {
        title: "BMS Monitoring Suite",
        description:
            "Led development of comprehensive Building Management System monitoring for Amazon OpsTech support buildings",
        highlights: [
            "Created enterprise solutions for facility infrastructure monitoring",
            "Improved operational efficiency",
            "Enabled proactive maintenance",
        ],
        categories: [
            "backend",
            "utility",
            "aws",
            "iot",
            "data",
            "cdk",
            "enterprise",
            "cicd",
            "database",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.amazon.com/b2b",
    },
    {
        title: "I Must Kill - Game Reference Website",
        description:
            "Designed and built a comprehensive digital reference website for my original tabletop role-playing game 'I Must Kill'",
        highlights: [
            "Created dark fantasy RPG with unique combat and magic systems",
            "Built interactive character sheets and equipment generators",
            "Implemented real-time initiative tracker with Liveshare functionality",
            "Developed searchable databases for powers, equipment, and monsters",
            "Designed responsive UI with dark/light theme support",
        ],
        categories: [
            "web",
            "frontend",
            "game",
            "design",
            "react",
            "full-stack",
        ],
        repoUrl: "https://github.com/becomingaria/imustkill-website",
        liveUrl: "https://imustkill.com/",
    },
    {
        title: "Borgbot",
        description:
            "A do-it-all discord bot with AI, currency conversion, food commands, and humor",
        highlights: ["Used OpenAI's LLMs for intelligent interactions"],
        categories: ["utility", "backend", "database"],
        repoUrl: "https://github.com/becomingaria/borgbot/",
        liveUrl: null,
    },
    {
        title: "Monster Finder",
        description: "Search tool for D&D 5e monsters using Open5e API",
        highlights: ["Built with React, optimized state management"],
        categories: ["web", "database"],
        repoUrl: "https://github.com/becomingaria/monster",
        liveUrl: "https://monsterfinder5e.netlify.app/",
    },
    {
        title: "Textmagotchi",
        description:
            "Virtual pet game created in one day with interactive gameplay",
        highlights: [],
        categories: ["game", "frontend"],
        repoUrl: "https://github.com/becomingaria/textmagotchi",
        liveUrl: "https://becomingaria.github.io/textmagotchi/",
    },
    {
        title: "RPG-Dice-React",
        description: "React-based dice roller for tabletop games",
        highlights: ["Collaborative project refactored from Django"],
        categories: ["web", "frontend"],
        repoUrl: "https://github.com/becomingaria/rpg-dice-react/",
        liveUrl: "https://rpg-dice-react.netlify.app/",
    },
    {
        title: "Simple-To-Do",
        description: "To-Do list with task management and export features",
        highlights: ["Built with HTML, CSS, JavaScript"],
        categories: ["web", "frontend", "utility"],
        repoUrl: "https://github.com/becomingaria/simple-to-do",
        liveUrl: "https://becomingaria.github.io/simple-to-do/",
    },
]

export default featuredProjects
