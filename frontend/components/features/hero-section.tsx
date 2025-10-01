"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logos3 } from "./trusted-by";
import SplitText from "./../SplitText";

const Hero12: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-42 lg:py-48">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <Image
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          alt="background pattern"
          fill
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-12">
          {/* Announcement */}
          <div className="sm:flex justify-center">
            <div className=" relative rounded-full px-4 py-1 text-sm  ring-1 bg-linear-to-r from-[#ff80b5]/30 to-[#9089fc]/30 ring-gray-900/10 hover:ring-gray-900/20">
              <p className="text-gray-900">
                Empowering Africa&apos;s AI innovation.{" "}
              </p>
            </div>
          </div>

          {/* Headline and Description */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              Accelerating AI Innovation in{" "}
              <span className="">
                <SplitText
                  text="Sub-Saharan Africa & Beyond"
                  className="text-linear-to-r from-[#ff80b5]/30 to-[#9089fc]/30"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </span>
            </h1>
            <p className="max-w-4xl text-muted-foreground text-base lg:text-lg">
              We thrive to build AI that understands culture, acts fast, and
              drives impact. From advanced machine learning to intelligent AI
              systems, our solutions empower businesses, researchers, and
              communities across our grasp and globally.
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

          <Logos3 />
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
