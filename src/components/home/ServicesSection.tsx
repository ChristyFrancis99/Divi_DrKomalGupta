import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Brain, Baby, Heart, Pill, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
  icon: Stethoscope,
  title: "Kinesiology Taping",
  description: "Elastic therapeutic taping that supports muscles and joints while improving circulation and reducing pain without limiting movement.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Dry Needling",
  description: "A targeted technique using fine needles to release muscle knots, relieve pain, and restore optimal muscle function.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Cupping Therapy",
  description: "A suction-based therapy that enhances blood flow, reduces muscle tension, and accelerates natural healing.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Manual Therapy",
  description: "Hands-on treatment techniques designed to reduce pain, restore joint mobility, and improve overall movement.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Chiropractic Care",
  description: "Precise spinal adjustments that correct alignment, relieve nerve pressure, and improve musculoskeletal function.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Neuro Physiotherapy",
  description: "Specialized rehabilitation focused on improving movement, balance, and independence in neurological conditions.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},
{
  icon: Stethoscope,
  title: "Pediatric Physiotherapy",
  description: "Child-focused therapy that supports healthy development, strength, posture, and motor skill improvement.",
  color: "text-primary",
  bgColor: "bg-primary/10",
},

];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your journey towards pain-free & active life starts with us
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50",
                "animate-fade-up opacity-0"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", service.bgColor)}>
                <service.icon className={cn("w-7 h-7", service.color)} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
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
