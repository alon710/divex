import Link from "next/link";
import { getLinkClassName } from "@/utils/link";

interface SideLinksProps {
  sideLinks: { [href: string]: string };
  currentPath: string;
  pageLabel: string;
}

export default function SideLinks({
  sideLinks,
  currentPath,
  pageLabel,
}: SideLinksProps) {
  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      <div className="text-lg font-semibold text-primary">{pageLabel}</div>
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
