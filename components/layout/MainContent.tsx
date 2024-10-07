import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import SideLinks from "@/components/layout/SideLinks";
import { links } from "@/config/menu";

interface MainContentProps {
  children: React.ReactNode;
  currentPath: string;
  sideLinks?: { [href: string]: string };
}

export default function MainContent({
  children,
  currentPath,
  sideLinks,
}: MainContentProps) {
  const pageLabel =
    links?.[currentPath?.split("/").slice(0, 3).join("/")]?.label;
  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      {sideLinks && (
        <SideLinks
          sideLinks={sideLinks}
          currentPath={currentPath}
          pageLabel={pageLabel}
        />
      )}
      <div className="grid gap-6">
        <Card>
          <div className="p-6">
            <CardDescription>{children}</CardDescription>
          </div>
          <CardFooter className="border-t px-6 py-4">
            <div className="text-sm text-muted-foreground">
              {pageLabel + " > " + sideLinks?.[currentPath]}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
