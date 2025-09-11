export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Farasi AI Labs has been instrumental in revolutionizing our AI infrastructure. Their expertise in MLOps is unmatched.",
    name: "Alex Johnson",
    designation: "CTO at TechCorp",
    src: "/prof/srtgraphy-XuE4VOev4AU-unsplash.jpg",
  },
  {
    quote:
      "The team's innovative approach to quantum computing solutions helped us solve complex problems we've been struggling with for years.",
    name: "Maria Garcia",
    designation: "Lead Researcher, Quantum Labs",
    src: "/prof/srtgraphy-2tB4LNeoZMA-unsplash.jpg",
  },
  {
    quote:
      "Working with Farasi AI Labs was a game-changer for our robotics division. Their expertise accelerated our development timeline significantly.",
    name: "James Wilson",
    designation: "Robotics Director, AutoTech",
    src: "/prof/srtgraphy-QddrF1OLScE-unsplash.jpg",
  },
];
