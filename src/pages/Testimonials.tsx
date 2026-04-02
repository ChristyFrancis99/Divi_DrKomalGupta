import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dr. Komal's treatment completely transformed my mobility. After years of chronic back pain, I can now live pain-free!",
    author: "Priya Sharma",
    role: "Office Worker",
    rating: 5,
  },
  {
    quote: "Exceptional care and personalized attention. My knee recovery was faster than expected. Highly recommended!",
    author: "Rahul Patel",
    role: "Athlete",
    rating: 5,
  },
  {
    quote: "The best physiotherapy experience. Professional, caring, and effective. My shoulder pain is gone!",
    author: "Neha Gupta",
    role: "Teacher",
    rating: 5,
  },
  {
    quote: "From constant neck pain to full flexibility. Dr. Komal's expertise made all the difference.",
    author: "Amit Singh",
    role: "Engineer",
    rating: 5,
  },
  {
    quote: "Post-surgery rehabilitation was smooth thanks to the customized plan. Grateful for the results!",
    author: "Sunita Desai",
    role: "Homemaker",
    rating: 5,
  },
  {
    quote: "Advanced techniques and genuine care. My sports injury recovery exceeded expectations.",
    author: "Vikram Kumar",
    role: "Cricketer",
    rating: 5,
  },
];

const Testimonials = () => {
  const testimonialsRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>
      {/* Hero Section - Matching About/PatientStories format */}
      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">Testimonials</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our trusted Clients
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              Hear what our clients say about their transformative physiotherapy experiences at Dr. Komal's Physiocare.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                <Link to="/contact">Read More Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialsRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our happy clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "group relative rounded-2xl p-8 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-olive-50 hover:border-olive-100 scroll-reveal",
                  `stagger-${index + 1}`
                )}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 flex-shrink-0",
                        i < testimonial.rating ? "text-olive-500 fill-olive-500" : "text-olive-200"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-olive-500 to-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the difference personalized physiotherapy can make in your life.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 shadow-lg hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              <Link to="/contact">Book Consultation Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

