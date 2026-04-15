import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="min-h-screen">
       <Navigation/>
       <Hero />
       <About/>
       <Projects/>
       <Experience/>
       <Education/>
       <Contact/>
    </main>  
  );
}
