"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Logos3 } from "./trusted-by";

const Hero12: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-64">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <img
          alt="background pattern"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="w-full h-full object-cover [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-12">
          {/* Announcement */}
          <div className="hidden sm:flex justify-center">
            <div className="relative rounded-full px-4 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Empowering Africa&apos;s AI innovation.{" "}
              
              <a
                href="#about"
                className="font-semibold text-indigo-600 relative z-10"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Headline and Description */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              
              Accelerating AI Innovation in{" "}
              <span className="text-primary">Africa & Beyond</span>
            </h1>
            <p className="max-w-4xl text-muted-foreground text-base lg:text-lg">
              Farasi AI Labs is pioneering intelligent, culturally aware, and
              high-speed AI solutions. From Swahili language chatbots to
              advanced machine learning models, we build AI that empowers
              businesses, communities, and researchers across Africa and
              globally.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button className="shadow-sm transition-shadow hover:shadow-lg">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="group flex items-center gap-1 transition-all hover:bg-muted/10"
            >
              Learn More
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <Logos3/>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
