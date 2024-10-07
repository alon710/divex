export const getLinkClassName = (href: string, currentPath: string | null) => {
  return currentPath?.startsWith(href)
    ? "text-foreground transition-colors hover:text-foreground font-semibold"
    : "text-muted-foreground transition-colors hover:text-foreground";
};
