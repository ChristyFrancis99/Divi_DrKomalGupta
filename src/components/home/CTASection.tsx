import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTASection() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} className="section-padding bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-olive-400/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 scroll-reveal">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto scroll-reveal stagger-2 leading-relaxed">
            Schedule your appointment today and experience the difference personalized, compassionate healthcare can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal stagger-3">
            <Button asChild variant="hero" size="xl" className="rounded-full shadow-lg hover:shadow-xl">
              <Link to="/contact">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="rounded-full">
              <a href="tel:+919870189389">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <p className="mt-10 text-primary-foreground/50 text-sm scroll-reveal stagger-4">
            Or call us at <a href="tel:+919870189389" className="underline hover:text-primary-foreground transition-colors duration-200">+91 98701 89389</a> • Morning: 10 AM-12 PM | Evening: 4 PM-9 PM
          </p>
        </div>
      </div>
    </section>
  );
}
