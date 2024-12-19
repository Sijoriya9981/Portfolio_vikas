"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import image from '../../public/imgae-.png'
const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-20 lg:mt-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:text-5xl lg:text-7xl ">
                            Hello, I&apos;m{" "}
                        </span>

                        <br></br>
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <TypeAnimation
                                sequence={[
                                    "Vikas Sijoriya",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "Problem Solver",
                                    1000,
                                    "Tech Enthusiast",
                                    1000,
                                    "Creative Thinker",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>


                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Enthusiastic software engineer passionate about web development, teamwork, and solving real-world problems using cutting-edge technologies.
                    </p>

                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-4/5 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500  hover:bg-slate-200 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1H6r7QB25DVag-HUNWtZLOV3aUPDn2keG/view?usp=sharing"
                            className="  inline-block   p-[2px] w-4/5 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src={image}
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[300px]  lg:h-[300px]"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
