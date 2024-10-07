import Link from "next/link";
import { getLinkClassName } from "@/utils/link";

interface SideLinksProps {
  sideLinks: { [href: string]: string };
  currentPath: string;
}

export default function side_links({ sideLinks, currentPath }: SideLinksProps) {
  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {Object.entries(sideLinks).map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className={getLinkClassName(href, currentPath)}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
