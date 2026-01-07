"use client";

import { Hero } from "./_components/hero";
import Wrapper from "@/components/ui/wrapper";
import { Playground } from "./_components/playground";

export default function Page() {

  return (
    <Wrapper as="main" className="border-x border-primary/15">
      <Hero />
      <Playground />

      <footer className="py-8 px-4 text-center border-t border-border">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/ubeyidah" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://ubeyidah.tech" className="text-muted-foreground hover:text-foreground transition-colors">
            Website
          </a>
        </div>
        <p className="text-muted-foreground">
          Built by Ubeyidah • @ubeyidah
        </p>
      </footer>
    </Wrapper>
  );
}
