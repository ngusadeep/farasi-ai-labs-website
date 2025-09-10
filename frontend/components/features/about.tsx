const links = [
  { name: "Our Mission", href: "#mission" },
  { name: "Our Vision", href: "#vision" },
  { name: "Core Values", href: "#values" },
  { name: "Leadership Team", href: "#team" },
];

const stats = [
  { name: "AI Models Developed", value: "15+" },
  { name: "Researchers & Engineers", value: "25+" },
  { name: "Global Partnerships", value: "10+" },
  { name: "Projects Completed", value: "50+" },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background Images */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl">
            About Farasi Ai Labs
          </h2>
          <p className="mt-8 text-lg text-gray-300 sm:text-xl">
            Farasi AI Labs is a leading African AI research and development hub,
            dedicated to creating intelligent, fast, and culturally aware AI
            solutions. Inspired by the strength and speed of the horse (Farasi
            in Swahili), we empower businesses and communities through
            cutting-edge AI models, natural language processing systems, and
            advanced machine learning technologies.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-2 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
