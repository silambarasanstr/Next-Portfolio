import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
       <Navigation/>
       <Hero />
       <About/>
       <Projects/>
       <Experience/>
       <Contact/>
    </main>  
  );
}
