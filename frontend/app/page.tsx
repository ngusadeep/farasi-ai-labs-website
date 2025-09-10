import { Projects } from "@/components/features/projects";

import { Hero12 } from "@/components/features/hero-section";
import About from "@/components/features/about";
import { Feature43 } from "@/components/features/feature";
import { BlogsCarousel } from "@/components/features/blog";
import { defaultPosts}  from "@/components/features/blog";
import { Team2 } from "@/components/features/team";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials} from "@/constants/data";
import { Contact7 } from "@/components/features/contact";
export default function Home() {
  return (
    <>
      <Hero12 />
      <About />
      <Feature43 />
      <Projects />
      <Team2/>
      <BlogsCarousel
        title="Latest AI & Tech Insights"
        description="Stay updated with AI, Machine Learning, Robotics, and Quantum Computing."
        posts={defaultPosts}
      />
      <AnimatedTestimonials autoplay={true} testimonials={testimonials} />
      <Contact7/>
    </>
  );
}
