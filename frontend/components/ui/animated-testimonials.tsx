"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  Testimonial,
  testimonials as defaultTestimonials,
} from "@/constants/data";
import Image from "next/image";

interface AnimatedTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({
  testimonials: externalTestimonials,
  autoplay = false,
}: AnimatedTestimonialsProps) => {
  const testimonials = externalTestimonials?.length
    ? externalTestimonials
    : defaultTestimonials;
  const [active, setActive] = useState(0);

  // ✅ Hydration-safe: generate random rotations only after client mount
  const [rotations, setRotations] = useState<number[]>([]);
  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // ✅ Fallback while rotations not ready (SSR-safe)
  if (rotations.length === 0) {
    return <div className="h-80 w-full" />;
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Images */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotations[index],
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : rotations[index],
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotations[index],
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between py-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: isActive(index) ? 1 : 0 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={!isActive(index) ? "hidden" : ""}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonial.designation}
              </p>
              <motion.p className="mt-8 text-md text-gray-500 dark:text-neutral-300">
                {testimonial.quote.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * wordIndex,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-4 pt-4 md:pt-0">
          <button
            onClick={handlePrev}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            aria-label="Previous testimonial"
          >
            <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            aria-label="Next testimonial"
          >
            <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
