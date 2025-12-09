import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Prentix?",
    answer: "Prentix offers fully AI-mentored virtual internships with top brands. You get to solve real-world problems while being guided by expert AI mentors, earning a verified credential upon completion.",
  },
  {
    question: "How long does an internship take?",
    answer: "Internships are self-paced. You can complete them at your own speed, whether that's a few days or a few weeks. Your AI mentor is available 24/7 to help you progress.",
  },
  {
    question: "Do I need any prior experience?",
    answer: "No prior experience is required. Our internships are open to all and designed to take you from beginner to confident problem-solver with structured guidance.",
  },
  {
    question: "What credential will I receive?",
    answer: "Upon successful completion, you receive a verified performance credential that showcases your ability to solve real problems. Recruiters recognize and value this proof of your skills.",
  },
  {
    question: "How does the AI mentorship work?",
    answer: "Your AI mentor provides instant feedback, hints when you're stuck, and guides you through complex problems. It's like having a patient, knowledgeable mentor available whenever you need help.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading mb-4">Got Questions?</p>
          <h2 className="section-heading text-foreground">FAQs:</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              id={`faq-${index}`}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
