import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero-background";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden no-scrollbar">
      <div className="h-fit max-h-screen" id="home">
        <Navbar />
        <Hero />
        <div className="top-0 absolute left-0 -z-50 w-full h-screen overflow-hidden">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={30}
            baseHue={200}
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full -z-20 overflow-hidden"
          ></Vortex>
        </div>
      </div>
      <div className="h-fit w-full flex bg-black pt-20" id="about">
        <About />
      </div>
      <div className="h-screen w-full flex bg-black" id="projects">
        <Projects />
      </div>
      <div className="h-screen w-full flex overflow-hidden z-0" id="contact">
        <Contact />
      </div>
    </div>
  );
}
