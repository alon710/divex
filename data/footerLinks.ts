type FooterGroupLink = {
  label: string;
  href: string;
};

export type FooterLinksGroup = {
  title: string;
  links: FooterGroupLink[];
};

const FooterLinksGroups: Record<string, FooterLinksGroup> = {
  help: {
    title: "Help",
    links: [
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Support",
        href: "/support",
      },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      {
        label: "Pricing",
        href: "/pricing",
      },
      {
        label: "Features",
        href: "/features",
      },
      {
        label: "Customers",
        href: "/customers",
      },
    ],
  },
  tools: {
    title: "Tools",
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Documentation",
        href: "/documentation",
      },
      {
        label: "API",
        href: "/api",
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Press",
        href: "/press",
      },
    ],
  },
} as const;

export const OrderedFooterLinksGroups = [
  FooterLinksGroups.help,
  FooterLinksGroups.solutions,
  FooterLinksGroups.tools,
  FooterLinksGroups.company,
] as const;
