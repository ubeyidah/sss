
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="py-5 px-3 border-t border-primary/5">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Created by{" "}
          <a
            href="https://ubeyidah.tech"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            Ubeyidah
          </a>
        </p>
        <a
          href="https://github.com/ubeyidah/sss"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={Github01Icon} className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
