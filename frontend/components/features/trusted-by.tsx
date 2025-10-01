// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by",
  logos = [
    {
      id: "logo-1",
      description: "Google",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "OpenAI",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "IBM",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "NVIDIA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-12">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-2 text-xl font-semibold text-pretty lg:text-2xl">
          {heading}
        </h1>
      </div>
      <div className="pt-8 md:pt-14 lg:pt-18">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={50}
                        height={50}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
