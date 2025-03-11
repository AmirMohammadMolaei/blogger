export type MenuLinksType = {
  name: string;
  href: string;
  type?: "link" | "button";
};

export const MenuLinks: MenuLinksType[] = [
  { name: "Our story", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Write", href: "/" },
  { name: "Sign in", href: "/" },
  { name: "Get Start", href: "/", type: "button" },
];
