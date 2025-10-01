"use client";

import { MessageCircle, Brain, ScanFace } from "lucide-react";
import { FaLeaf, FaArrowRight } from "react-icons/fa"; // Leaf and arrow icons

const Projects = () => {
  const projects = [
    {
      icon: <Brain className="h-6 w-6 text-red-600" />,
      title: "NeuralSense",
      description:
        "AI-powered neurosurgical diagnosis system to assist medical professionals in precision diagnostics.",
      items: [
        "Brain Scan Analysis",
        "Predictive Diagnostics",
        "Medical AI Insights",
      ],
      bgColor: "bg-red-100",
      iconBg: "bg-red-200",
      link: "#projects",
    },
    {
      icon: <ScanFace className="h-6 w-6 text-purple-600" />,
      title: "TrueSpot",
      description:
        "Face recognition-based attendance system for schools and organizations, improving accuracy and efficiency.",
      items: [
        "Real-time Face Recognition",
        "Automated Attendance",
        "Secure Data Management",
      ],
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-200",
      link: "#projects",
    },
    {
      icon: <FaLeaf className="h-6 w-6 text-green-600" />,
      title: "AgroSync",
      description:
        "AI system to detect plant diseases, diagnose issues, and recommend effective treatments for farmers.",
      items: [
        "Plant Disease Detection",
        "Crop Health Analysis",
        "Treatment Recommendations",
      ],
      bgColor: "bg-green-100",
      iconBg: "bg-green-200",
      link: "#projects",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "FarasiChat",
      description:
        "Swahili-centric AI chatbot platform for businesses and communities, enabling natural conversations.",
      items: [
        "Conversational AI",
        "Customer Support Bots",
        "FarasiChat Integration",
      ],
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-200",
      link: "#projects",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg md:text-lg">
            Farasi AI Labs develops cutting-edge AI solutions that empower
            businesses, medical professionals, organizations, and farmers across
            Africa.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto max-w-8xl grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className={`group relative flex flex-col gap-6 rounded-xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:scale-[1.02] ${project.bgColor}`}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div
                  className={`${project.iconBg} rounded-full p-3 flex items-center justify-center`}
                >
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold flex-1">
                  {project.title}
                </h3>
                <FaArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <ul className="flex flex-col gap-2">
                {project.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
