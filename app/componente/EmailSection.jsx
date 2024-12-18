"use client";
import React, { useState } from "react";
import GithubIcon from '../../public/github.svg';
import LinkedinIcon from '../../public/linkedin.svg';
import leetcode from '../../public/leetcode.svg';
import instagram from '../../public/instagram.svg';
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     };

    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     const options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSONdata,
    //     };

    //     try {
    //         const response = await fetch(endpoint, options);
    //         const resData = await response.json();

    //         if (resData.success) {
    //             setEmailSubmitted(true);
    //             console.log("Email sent successfully! 🎉");
    //         } else {
    //             console.error("Error:", resData.error);
    //             alerconsole.log("Failed to send email. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("Fetch error:", error);
    //         console.log("Something went wrong. Please check your network.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-3">
                    <Link href="https://github.com/Sijoriya9981" aria-label="Github Profile">
                        <Image src={GithubIcon} alt="Github Icon" width={20} height={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vikas-sijoriya-044400224/" aria-label="LinkedIn Profile">
                        <Image src={LinkedinIcon} alt="LinkedIn Icon" width={20} height={20} />
                    </Link>
                    <Link href="https://www.instagram.com/vikas_sijoriya/" aria-label="Instagram Profile">
                        <Image src={instagram} alt="Instagram Icon" width={20} height={20} />
                    </Link>
                    <Link href="https://leetcode.com/u/Sijoriya9981/" aria-label="LeetCode Profile">
                        <Image src={leetcode} alt="LeetCode Icon" width={20} height={20} />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <div className="text-white">
                        <h5 className="text-lg font-bold">Thank you! 🎉</h5>
                        <p>Your message has been sent successfully. I&apos;ll get back to you soon!</p>
                    </div>
                ) : (
                    <form className="flex flex-col" >
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let&apos;s talk about..."
                            />
                        </div>
                        <button

                            className={`inline-block p-3 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSection;
