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

      {/* Patient Video Stories Grid */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Patient Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch real patient testimonials showcasing life-changing results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {Array.from({ length: 17 }, (_, i) => {
              const videoSrc = new URL(`../assets/${i + 1}.mp4`, import.meta.url).href;
              return (
                <div
                  key={i + 1}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] bg-white"
                >
                  <video
                    src={videoSrc}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <svg className="w-20 h-20 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

