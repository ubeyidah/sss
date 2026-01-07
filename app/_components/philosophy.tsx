import { buttonVariants } from "@/components/ui/button";
import { CircleArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export function Philosophy() {
  return (
    <section className="py-16 border-b border-primary/5">
      <h2 className="text-3xl font-bold text-center mb-12 text-muted-foreground/50">
        The Philosophy Behind SSS
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="md:flex md:gap-8 items-start">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-xl mb-4">SSS (Single Source Structure)</h1>
            <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
              SSS was built around a simple idea: clarity creates focus. When your workspace has one clear structure, you stop wasting time deciding where things go and start spending that time building.
            </p>
            <a
              href="https://medium.com/@ubeyidah/how-sss-single-source-structure-ended-my-project-organization-nightmare-c3edbd6f2774"
              className={buttonVariants()}
            >
              Read More
              <HugeiconsIcon icon={CircleArrowRight} />
            </a>
          </div>
          <div className="flex-1">
            <Image
              src="/sss.webp"
              alt="SSS illustration"
              width={400}
              height={300}
              className="w-full aspect-video object-cover max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
