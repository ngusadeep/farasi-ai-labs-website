"use client";

import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Cpu,
  Settings,
  Atom,
} from "lucide-react";
import { useEffect, useState, useCallback, JSX } from "react";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

export interface BlogsCarouselProps {
  title?: string;
  description?: string;
  posts: BlogPost[];
}

const iconMap: Record<string, JSX.Element> = {
  AI: <Brain className="h-5 w-5 text-white" />,
  "Machine Learning": <Cpu className="h-5 w-5 text-white" />,
  Robotics: <Settings className="h-5 w-5 text-white" />,
  "Quantum Computing": <Atom className="h-5 w-5 text-white" />,
};

const defaultPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "AI in Healthcare: Transforming Diagnosis & Treatment",
    summary:
      "Discover how AI is revolutionizing healthcare by improving diagnostics, personalizing treatments, and assisting medical professionals.",
    label: "AI",
    author: "Dr. Amina Yusuf",
    published: "5 Sep 2025",
    url: "#",
    image: "/prof/srtgraphy-AQW0p7lKOpI-unsplash.jpg",
  },
  {
    id: "post-2",
    title: "Machine Learning for Predictive Analytics in Finance",
    summary:
      "Learn how ML models help financial institutions predict trends, detect fraud, and make smarter investment decisions.",
    label: "Machine Learning",
    author: "Kevin Mwangi",
    published: "20 Aug 2025",
    url: "#",
    image: "/prof/srtgraphy-XRGUoUl2TMw-unsplash.jpg",
  },
  {
    id: "post-3",
    title: "Robotics in Manufacturing: Automation and Efficiency",
    summary:
      "Explore how modern robotics are transforming manufacturing lines, increasing productivity, and reducing human error.",
    label: "Robotics",
    author: "Jane Otieno",
    published: "10 Jul 2025",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1581092334451-d6f6c0fcd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
  {
    id: "post-4",
    title: "Quantum Computing: Future of Problem Solving",
    summary:
      "Dive into quantum computing and understand how quantum algorithms can solve problems classical computers cannot.",
    label: "Quantum Computing",
    author: "Dr. Samuel Ngusa",
    published: "1 Jun 2025",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1605902711622-3d6f6c0fcd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
];

const BlogsCarousel = ({
  title = "Latest Blog Posts",
  description = "Stay updated with AI, Machine Learning, Robotics, and Quantum Computing.",
  posts = defaultPosts,
}: BlogsCarouselProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCarousel = useCallback(() => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
    setCurrentSlide(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  const scrollTo = useCallback(
    (index: number) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi],
  );

  useEffect(() => {
    if (!carouselApi) return;

    updateCarousel();
    carouselApi.on("select", updateCarousel);
    carouselApi.on("reInit", updateCarousel);

    return () => {
      carouselApi.off("select", updateCarousel);
      carouselApi.off("reInit", updateCarousel);
    };
  }, [carouselApi, updateCarousel]);

  return (
    <section className="py-28 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row items-end justify-between gap-6 md:gap-0">
          <div className="max-w-xl flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Edge Gradients */}
          {canScrollPrev && (
            <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50" />
          )}
          {canScrollNext && (
            <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50" />
          )}

          <Carousel
            setApi={setCarouselApi}
            opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
          >
            <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
              {posts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <a
                    href={post.url}
                    className="group block rounded-xl overflow-hidden"
                  >
                    <div className="relative h-[28rem] rounded-xl shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                      {/* Image */}
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                      />

                      {/* Gradient Overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Category Icon */}
                      <div className="absolute top-4 right-4 bg-primary text-white rounded-full p-2 shadow-md z-10">
                        {iconMap[post.label]}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <div className="text-sm font-semibold uppercase text-white/90">
                          {post.label}
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1 leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm line-clamp-3 text-gray-200">
                          {post.summary}
                        </p>
                        <div className="mt-3 font-medium flex items-center justify-between text-xs text-gray-300 opacity-90">
                          <span>{post.author}</span>
                          <span>{post.published}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-sm font-medium text-gray-200">
                          Read more{" "}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogsCarousel, defaultPosts };
