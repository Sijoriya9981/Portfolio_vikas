import Image from "next/image";
import HeroSection from "./componente/HeroSection";
import Navbar from "./componente/Navbar";
import AboutSection from "./componente/AboutSection";
import ProjectsSection from "./componente/ProjectsSection";
import EmailSection from "./componente/EmailSection";
import Footer from "./componente/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        < Navbar />
        <div className="container mx-auto px-12 py-4">
          < HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        < Footer />
      </main>
    </>
  );
}
