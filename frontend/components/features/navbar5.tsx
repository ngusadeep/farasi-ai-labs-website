"use client";

import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/features/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "./header";
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "AI Chatbots",
      description: "Swahili-centric conversational AI",
      href: "#products",
    },
    {
      title: "Custom Models",
      description: "FarasiLM language models",
      href: "#products",
    },
    {
      title: "Computer Vision",
      description: "Image recognition & classification",
      href: "#products",
    },
    {
      title: "Machine Learning",
      description: "Predictive analytics & automation",
      href: "#products",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/50 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <Header />
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Farasi AI Labs
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 p-3">
                      {features.map((feature, idx) => (
                        <NavigationMenuLink
                          href={feature.href}
                          key={idx}
                          className="rounded-md p-3 transition-colors hover:bg-muted/70"
                        >
                          <p className="mb-1 font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#services"
                    className={navigationMenuTriggerStyle()}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#research"
                    className={navigationMenuTriggerStyle()}
                  >
                    Research
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#blog"
                    className={navigationMenuTriggerStyle()}
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#testimonial"
                    className={navigationMenuTriggerStyle()}
                  >
                    Testimonial
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline">Contact</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-lg font-semibold tracking-tighter">
                    Farasi AI Labs
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="products" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Products
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-2">
                        {features.map((feature, idx) => (
                          <a
                            href={feature.href}
                            key={idx}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <p className="mb-1 font-semibold text-foreground">
                              {feature.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Other Links */}
                <div className="flex flex-col gap-6 mt-4">
                  <a href="#about" className="font-medium">
                    About
                  </a>
                  <a href="#research" className="font-medium">
                    Research
                  </a>
                  <a href="#blog" className="font-medium">
                    Blog
                  </a>
                  <a href="#contact" className="font-medium">
                    Contact
                  </a>
                </div>

                {/* Mobile Buttons */}
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
