import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PlaygroundSidebar } from "./_components/playground-sidebar";
import AiChatSidebar from "./_components/ai-sidebar";
import { PlaygroundProvider } from "./_components/playground-context";
import { TemplatePresets } from "./_components/template-presets";
import { ConfigPanel } from "./_components/config-panel";
import { StructurePreview } from "./_components/structure-preview";
import { SharePanel } from "./_components/share-panel";

export default function Page() {
  return (
    <PlaygroundProvider>
      <SidebarProvider>
        <PlaygroundSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">SSS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Playground</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto">
              <SharePanel />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-4 overflow-y-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <TemplatePresets />
                <ConfigPanel />
              </div>
              <StructurePreview />
            </div>
          </div>
        </SidebarInset>

        <AiChatSidebar />
      </SidebarProvider>
    </PlaygroundProvider>
  );
}
