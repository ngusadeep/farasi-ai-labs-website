import * as React from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string }>;

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: React.createElement(Mail as IconComponent, { className: "h-6 w-auto" }),
    label: "Email",
    description: "We respond to all emails within 24 hours.",
    link: "mailto:contact@farasiai.com",
    linkLabel: "contact@farasiai.com",
  },
  {
    icon: React.createElement(MapPin as IconComponent, { className: "h-6 w-auto" }),
    label: "Office",
    description: "Drop by our office for a chat.",
    link: "https://maps.google.com",
    linkLabel: "Tanzania , Africa",
  },
  {
    icon: React.createElement(Phone as IconComponent, { className: "h-6 w-auto" }),
    label: "Phone",
    description: "We're available Mon-Fri, 9am-5pm EAT.",
    link: "tel:+255760985358",
    linkLabel: "+255 760 985 358",
   },
//   {
//     icon: React.createElement(MessageCircle as IconComponent, { className: "h-6 w-auto" }),
//     label: "Live Chat",
//     description: "Get instant help from our support team.",
//     link: "#contact-form",
//     linkLabel: "Start Chat",
//   },
];
