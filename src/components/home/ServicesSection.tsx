import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Stethoscope,
    title: "Kinesiology Taping",
    description:
      "Elastic therapeutic taping that supports muscles and joints while improving circulation and reducing pain without limiting movement.",
  },
  {
    icon: Stethoscope,
    title: "Dry Needling",
    description:
      "A targeted technique using fine needles to release muscle knots, relieve pain, and restore optimal muscle function.",
  },
  {
    icon: Stethoscope,
    title: "Cupping Therapy",
    description:
      "A suction-based therapy that enhances blood flow, reduces muscle tension, and accelerates natural healing.",
  },
  {
    icon: Stethoscope,
    title: "Manual Therapy",
    description:
      "Hands-on treatment techniques designed to reduce pain, restore joint mobility, and improve overall movement.",
  },
  {
    icon: Stethoscope,
    title: "Chiropractic Care",
    description:
      "Precise spinal adjustments that correct alignment, relieve nerve pressure, and improve musculoskeletal function.",
  },
  {
    icon: Stethoscope,
    title: "Neuro Physiotherapy",
    description:
      "Specialized rehabilitation focused on improving movement, balance, and independence in neurological conditions.",
  },
  {
    icon: Stethoscope,
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
      className="section-padding bg-olive-50/30 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />

      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="text-olive-500 font-semibold mb-3 text-sm tracking-wider uppercase">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Your journey towards pain-free & active life starts with us
          </h2>
          <div className="w-16 h-1 bg-olive-400 rounded-full mx-auto mt-4" />
        </div>

        {/* 🔷 Honeycomb Layout (Desktop Only) */}
<div className="hidden lg:flex justify-center">
  <div className="max-w-6xl w-full px-6">

    <div className="grid grid-cols-3 gap-x-10 gap-y-[-60px] justify-items-center">

      {services.map((service, index) => (
        <div
          key={service.title}
          className={cn(
            "relative w-72 h-80 bg-white shadow-card border border-olive-100/60",
            "flex flex-col justify-center items-center text-center px-6",
            "transition-all duration-300 hover:-translate-y-3 hover:shadow-card-hover",
            index % 2 !== 0 ? "mt-20" : ""
          )}
          style={{
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-olive-100 flex items-center justify-center mb-4">
            <service.icon className="w-6 h-6 text-olive-500" />
          </div>

          <h3 className="font-semibold text-foreground mb-2 text-base">
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* 🔷 Mobile / Tablet Fallback Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 shadow-card border border-olive-100/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-olive-100 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-olive-500" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20 scroll-reveal">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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