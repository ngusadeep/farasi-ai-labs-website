import {
  MessageCircle,
  Database,
  Zap,
  Camera,
  Layers,
  Headphones,
} from "lucide-react";

const Feature43 = () => {
  const reasons = [
    {
      title: "Culturally Aware AI",
      description:
        "Our AI models understand African languages, dialects, and cultural contexts, delivering accurate, relevant solutions.",
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "African-Centric Datasets",
      description:
        "We train and fine-tune our AI using datasets sourced from African communities, ensuring insights that truly reflect local realities.",
      icon: <Database className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Fast & Accurate",
      description:
        "High-performance AI ensures rapid, precise results for business analytics, predictive modeling, and operational efficiency.",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Image & Speech Recognition",
      description:
        "From facial recognition to voice interfaces, our AI handles African-specific data with exceptional accuracy.",
      icon: <Camera className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Farasi AI Labs provides solutions that scale from startups to enterprise-level operations across Africa.",
      icon: <Layers className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Reliable Support",
      description:
        "Our expert team ensures continuous support, updates, and guidance to keep your AI systems performing optimally.",
      icon: <Headphones className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section id="values" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Our Values
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Choose Farasi AI Labs?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="rounded-lg bg-accent p-5"
              style={{
                WebkitTapHighlightColor: "transparent", // remove mobile tap highlight
              }}
            >
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                {reason.icon}
              </span>
              <h3 className="mb-2 text-xl font-medium">{reason.title}</h3>
              <p className="leading-7 text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
