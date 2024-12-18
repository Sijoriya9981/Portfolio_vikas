import React from "react";
import Image from "next/image";
import image from '../../public/logo.png'
const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white b-0">
            <div className="container flex justify-center">
                <Image src={image} alt="logo" width={70} height={100} className="rounded-full mt-1" />                <p className="text-slate-600 mr-2 my-5 text-center">All rights reserved. Vikas Sijoriya</p>
            </div>
        </footer>
    );
};

export default Footer;