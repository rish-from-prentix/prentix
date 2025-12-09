import { Briefcase, Clock, DoorOpen } from "lucide-react";

const advantages = [
  {
    icon: Briefcase,
    title: "Real brand problems",
    description: "Not just theory. Solve real problems faced by top brands.",
  },
  {
    icon: Clock,
    title: "24/7 mentorship",
    description: "Get instant support whenever you're stuck. Your mentor never rests.",
  },
  {
    icon: DoorOpen,
    title: "Open to all",
    description: "No waiting. No rejection. Your internship starts the moment you click start.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="section-subheading mb-4">Why Choose Us</p>
          <h2 className="section-heading text-foreground">The prentix advantage?</h2>
        </div>

        {/* Advantages List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
