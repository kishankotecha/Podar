export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Why Podar", href: "#why-podar" },
  { label: "Learning", href: "#learning" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Admissions", href: "#admissions" },
];

export const NAVBAR_CONFIG = {
  bgColor: "#00367D",
  buttonColor: "#F8D64F",
  buttonTextColor: "#111827",
  buttonLabel: "Contact Us",
  buttonHref: "#contact",
  logoSrc: "/navbar/podar-logo.png",
  logoAlt: "Podar Prep - JP Nagar 7th Phase",
};

