"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Case Care",
        description: "A home service web application that connects users with professionals for home repairs, cleaning, and maintenance services. It provides an intuitive interface for easy booking and service management.",
        image: '/p1.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/CaseCare",
        previewUrl: "https://case-care.vercel.app/",
    },
    {
        id: 2,
        title: "Movix",
        description: "A dynamic movie web app where users can explore the latest movies, web series, and TV shows. It features real-time updates and an engaging user interface powered by modern web technologies.",
        image: "/p2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/Movixi",
        previewUrl: "https://movixapp-vert.vercel.app/",
    },
    {
        id: 3,
        title: "Fitness",
        description: "A gym website that showcases fitness plans, workout schedules, and membership options. Designed with a responsive layout to provide seamless browsing on any device.",
        image: "/p3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/Fitness",
        previewUrl: "https://fitness-xi-eight.vercel.app/",
    },
    {
        id: 4,
        title: "Skill Up",
        description: "An online course platform designed for users to explore and enroll in a variety of skill-enhancing courses. It features a user-friendly interface for browsing and learning.",
        image: "/p4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/SkillUp",
        previewUrl: "https://skill-up-five.vercel.app/",
    },
    {
        id: 5,
        title: "Kitaab",
        description: "A book and course store web application that allows users to browse and purchase books and educational resources. It features a clean design for easy navigation and shopping.",
        image: "/p6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/Kitaab",
        previewUrl: "https://kitaab-front.vercel.app/",
    },
    {
        id: 6,
        title: "Tour",
        description: "A tour web app designed to help users explore travel destinations, find trip ideas, and plan their journeys with ease. It features a visually appealing and responsive layout.",
        image: "/p5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Sijoriya9981/Tour",
        previewUrl: "https://sijoriya9981.github.io/Tour/",
    }
];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Projects
            </h2>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;