import { Rocket, Brain, Award } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Enroll",
    description: "Enroll into a virtual internship. Choose the career path you want to explore.",
  },
  {
    icon: Brain,
    title: "Solve",
    description: "Solve problems for top brands, guided by expert AI mentors.",
  },
  {
    icon: Award,
    title: "Achieve",
    description: "Receive a verified performance credential - your proof of ability that recruiters recognize instantly!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="section-subheading mb-4">Simple Process</p>
          <h2 className="section-heading text-foreground">How Prentix Works</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="card-elevated group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Step number */}
              <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3 block">
                Step {index + 1}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
