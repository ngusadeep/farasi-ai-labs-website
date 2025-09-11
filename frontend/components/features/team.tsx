import { Github, Linkedin, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  website?: string;
  linkedin?: string;
}

interface Team2Props {
  heading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team2 = ({
  heading = "Meet Our Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Samwel Ngusa",
      role: "CEO , Founder & MLOps Engineer",
      avatar: "./prof/IMG_0322.jpg",
      github: "https://github.com/ngusadeep",
      website: "https://ngusadeep.vercel.app",
      linkedin: "#",
    },
    {
      id: "member-2",
      name: "Godfrey Enosh",
      role: "Ai & ML Engineer",
      avatar: "./prof/IMG_0883.jpg",
      github: "https://github.com/Godie360",
      website: "https://godie.codes",
      linkedin: "#",
    },
    {
      id: "member-3",
      name: "Tachera Sasi",
      role: "Backend & DevOps Engineer",
      avatar: "./prof/IMG_0330.jpg",
      github: "https://github.com/tacheraSasi",
      website: "https://tachera.vercel.app",
      linkedin: "#",
    },
    // {
    //   id: "member-4",
    //   name: "David Kim",
    //   role: "Lead Engineer",
    //   avatar:
    //     "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    //   github: "#",
    //   website: "#",
    //   linkedin: "#",
    // },
    // {
    //   id: "member-5",
    //   name: "Lisa Thompson",
    //   role: "Product Manager",
    //   avatar:
    //     "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    //   github: "#",
    //   website: "#",
    //   linkedin: "#",
    // },
    // {
    //   id: "member-6",
    //   name: "Alex Johnson",
    //   role: "UX Designer",
    //   avatar:
    //     "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    //   github: "#",
    //   website: "#",
    //   linkedin: "#",
    // },
  ],
}: Team2Props) => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <Avatar className="size-24 ring-2 ring-primary/10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg font-semibold">
                    {member.name[0]}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary mt-1 text-sm font-medium">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-4">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted/40 p-2 transition hover:bg-primary/10"
                  >
                    <Github className="size-5 text-muted-foreground" />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted/40 p-2 transition hover:bg-primary/10"
                  >
                    <Globe className="size-5 text-muted-foreground" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted/40 p-2 transition hover:bg-primary/10"
                  >
                    <Linkedin className="size-5 text-muted-foreground" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team2 };
