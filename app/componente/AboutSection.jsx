"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import image from "../../public/about.jpg";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C, C++</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>Next.js</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <strong>B.Tech in Computer Science Engineering</strong>
                    <br /> Madhav Institute of Technology and Science, Gwalior
                    <br /> 2021-2025

                </li>
                <br />
                <li>
                    <strong>Class XII</strong>
                    <br /> Deen Dayal Convent High School
                    <br /> 2019-2020
                </li>
                <br />

                <li>
                    <strong>Class X</strong>
                    <br /> Deen Dayal Convent High School
                    <br /> 2017-2018

                </li>

            </ul>
        ),
    },

];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={image} alt="About" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a passionate full-stack web developer with a focus on creating responsive
                        and interactive applications. My experience spans across frontend and backend
                        technologies, including React.js, Node.js, PHP, and MySQL. I thrive in team-oriented
                        environments, as demonstrated during my projects and internships, and I'm always eager
                        to learn and grow in dynamic, multidisciplinary settings.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>

                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
