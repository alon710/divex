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
} as const;

export const OrderedFooterLinksGroups = [FooterLinksGroups.help] as const;
