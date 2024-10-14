export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "hauser.dev",
  description: "Software Engineer Thomas Hauser.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pojects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/Hauser",
  },
};
