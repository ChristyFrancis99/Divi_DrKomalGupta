import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PatientStories = () => {
  const statsRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">
              Patient Stories
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Real Stories, Real Results
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              We are proud to serve our community with dedication and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/*Video Grid*/}
      
      
      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join thousands of satisfied patients who trust our clinic for their healthcare needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-olive-500 text-white hover:bg-olive-600 h-12 px-8 rounded-full text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PatientStories;
