export type SideLinks = {
  [key: string]: string;
};

export type TopLink = {
  label: string;
  sideLinks?: SideLinks;
  defaultRedirect?: string;
};

export type Links = {
  [key: string]: TopLink;
};

export const links: Links = {
  "/dashboard/home": {
    label: "Dashboard",
    sideLinks: {
      "/dashboard/home/overview": "Overview",
      "/dashboard/home/analytics": "Analytics",
    },
    defaultRedirect: "/dashboard/home/overview",
  },
  "/dashboard/customers": {
    label: "Customers",
    sideLinks: {
      "/dashboard/customers/customers-list": "Customers List",
      "/dashboard/customers/add-customer": "Add Customer",
    },
    defaultRedirect: "/dashboard/customers/customers-list",
  },
  "/dashboard/settings": {
    label: "Settings",
    sideLinks: {
      "/dashboard/settings/general": "General",
      "/dashboard/settings/landing-page": "Landing Page",
    },
    defaultRedirect: "/dashboard/settings/general",
  },
};
