import { Link } from "react-router-dom";
import { Bandage, Syringe, CircleDot, Brain, Baby, Hand, Bone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Bandage,
    title: "Kinesiology Taping",
    description:
      "Elastic therapeutic taping that supports muscles and joints while improving circulation and reducing pain without limiting movement.",
  },
  {
    icon: Syringe,
    title: "Dry Needling",
    description:
      "A targeted technique using fine needles to release muscle knots, relieve pain, and restore optimal muscle function.",
  },
  {
    icon: CircleDot,
    title: "Cupping Therapy",
    description:
      "A suction-based therapy that enhances blood flow, reduces muscle tension, and accelerates natural healing.",
  },
  {
    icon: Hand,
    title: "Manual Therapy",
    description:
      "Hands-on treatment techniques designed to reduce pain, restore joint mobility, and improve overall movement.",
  },
  {
    icon: Bone,
    title: "Chiropractic Care",
    description:
      "Precise spinal adjustments that correct alignment, relieve nerve pressure, and improve musculoskeletal function.",
  },
  {
    icon: Brain,
    title: "Neuro Physiotherapy",
    description:
      "Specialized rehabilitation focused on improving movement, balance, and independence in neurological conditions.",
  },
  {
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description:
      "Child-focused therapy that supports healthy development, strength, posture, and motor skill improvement.",
  },
];

export function ServicesSection() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={revealRef}
      className="section-padding bg-olive-50/30 relative"
    >
      {/* Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />

      <div className="container-custom">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal">
          <p className="text-olive-500 font-semibold mb-3 text-sm tracking-wider uppercase">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Your journey towards pain-free & active life starts with us
          </h2>
          <div className="w-16 h-1 bg-olive-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden mask-fade">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-olive-50/30 to-transparent z-10" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-olive-50/30 to-transparent z-10" />

          <div className="flex gap-6 w-max animate-scroll">
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="group bg-white rounded-2xl p-7 shadow-card border border-olive-100/50 min-w-[320px] max-w-[320px] hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-olive-100/80 group-hover:bg-olive-500 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-olive-500 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2.5">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-5 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-olive-500 font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-14 scroll-reveal">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}