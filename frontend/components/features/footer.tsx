"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{ name: string; href: string }>;
}

const defaultSections = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Products", href: "#products" },
      { name: "Research", href: "#research" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Mission", href: "#about" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Partnerships", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer7: React.FC<FooterProps> = ({
  logo = {
    url: "https://www.farasi.ai",
    src: "/logo.png",
    alt: "Farasi AI Labs Logo",
    title: "Farasi AI Labs",
  },
  sections = defaultSections,
  description = "Building Africa's future of AI — intelligent, fast, and impactful solutions.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Farasi AI Labs. All rights reserved.",
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <footer className="bg-white/95 backdrop-blur-md text-foreground py-16 mt-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 lg:max-w-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{logo.title}</span>
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 w-full gap-6 md:grid-cols-3 lg:gap-15">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-semibold">{section.title}</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="hover:text-primary transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-e-muted pt-6 flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center text-xs text-muted-foreground">
          <p>{copyright}. </p>

          <ul className="flex gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-primary transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer7 };
