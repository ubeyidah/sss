"use client"
import { HugeiconsIcon } from "@hugeicons/react";
import { Folder01Icon, Folder02Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToPlayground = () => {
    const playground = document.getElementById("playground");
    if (playground) {
      playground.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen text-center relative overflow-hidden flex flex-col items-center justify-center border-b border-primary/5">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform -rotate-12">
          <HugeiconsIcon className="text-primary/70" icon={Folder01Icon} size={120} />
        </div>
        <div className="absolute top-20 right-20 transform rotate-12">
          <HugeiconsIcon className="text-primary/70" icon={Folder02Icon} size={100} />
        </div>
        <div className="absolute bottom-20 left-20 transform -rotate-6">
          <HugeiconsIcon className="text-primary/70" icon={Folder01Icon} size={80} />
        </div>
        <div className="absolute bottom-10 right-10 transform rotate-6">
          <HugeiconsIcon icon={Folder02Icon} className="text-primary/70" size={90} />
        </div>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,200 Q200,150 300,200 T500,200 T700,200 T900,200" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M100,300 Q200,250 300,300 T500,300 T700,300 T900,300" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M100,400 Q200,350 300,400 T500,400 T700,400 T900,400" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="mx-auto relative w-fit flex items-center justify-center mb-8">
          <div className="blur-xl rounded-full bg-linear-to-bl from-white/40 via-white/20 to-primary/40 absolute w-32 h-32" />
          <Image src={"/logo.png"} width={100} height={100} alt="sss logo" className="invert" />
        </div>
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
          Beta Release
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          One organized workspace where everything has a place
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          SSS (Single Source Structure) gives you a single, predictable layout for all your work. Projects, work files, and experiments are structured clearly so everything is easy to navigate and instantly findable.
        </p>
        <Button onClick={scrollToPlayground} size="lg">
          Explore Playground
        </Button>
      </div>
    </section>
  )
}

