import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FileTree } from "./file-tree"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Plus } from "@hugeicons/core-free-icons"
import { CodeSnippet } from "./code-snippet"

export const Playground = () => {
  return (
    <section id="playground" className="py-16 border-b border-primary/5">
      <h2 className="text-3xl text-muted-foreground/50 font-bold text-center mb-12">Try SSS Structure</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Options</h3>
          <Label className="hover:bg-accent/50 flex items-start gap-3 border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/20 dark:has-[[aria-checked=true]]:border-primary dark:has-[[aria-checked=true]]:bg-primary/5">
            <Checkbox
              id="toggle-2"
              defaultChecked
              className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white dark:data-[state=checked]:border-primary dark:data-[state=checked]:bg-primary"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">
                Enable year-based organization
              </p>
              <p className="text-muted-foreground text-sm">
                Organize projects by year for better management and archiving.
              </p>
            </div>

          </Label>
          <p className="text-center text-muted-foreground text-sm">Additional options are currently in development.</p>

          <h3 className="text-xl font-semibold">Installation</h3>
          <CodeSnippet
            code={`curl -fsSL https://raw.githubusercontent.com/yourusername/sss/main/install.sh | bash -s -- --year-based`}
            language="bash"
            title="Linux/Mac Installation"
          />

          <CodeSnippet
            code={`PowerShell -ExecutionPolicy Bypass -File install.ps1 -YearBased`}
            language="powershell"
            title="Windows Installation"
          />
        </div>
        <div className="space-y-4 h-full">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Folder Tree</h3>
            <Button><HugeiconsIcon icon={Plus} /> Add Folder </Button>
          </div>
          <FileTree />
        </div>
      </div>
    </section>
  )
}

