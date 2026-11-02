export const routes = {
  home: "/",
  work: "/work",
  experience: "/experience",
  about: "/about",
  contact: "/contact",
} as const;

export const navigation = [
  { label: "Index", href: routes.home },
  { label: "Work", href: routes.work },
  { label: "Experience", href: routes.experience },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;
