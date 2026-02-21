import { Layout } from "@/components/layout/Layout";
import { Award, Users, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Patients Treated", value: "50,000+", icon: Users },
  { label: "Medical Professionals", value: "25+", icon: Award },
  { label: "Patient Satisfaction", value: "98%", icon: Heart },
];

const About = () => {
  const statsRef = useScrollReveal<HTMLElement>();
  const missionRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>

      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Dedicated to Your Health Since 2010
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              HealthCare Medical Center has been providing exceptional healthcare services to our community for over 15 years, combining cutting-edge medicine with compassionate care.
            </p>
          </div>
        </div>
      </section>


      <section ref={statsRef} className="py-14 bg-white border-b border-olive-100/60 relative -mt-1">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center scroll-reveal p-6 rounded-2xl hover:bg-olive-50/50 transition-all duration-300",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-14 h-14 rounded-2xl bg-olive-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-500 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-olive-500" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section ref={missionRef} className="section-padding bg-olive-50/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="scroll-reveal-left">
              <p className="text-olive-500 font-semibold mb-3 text-sm tracking-wider uppercase">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Transforming Healthcare Through Innovation and Compassion
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At HealthCare Medical Center, we believe that quality healthcare should be accessible, personalized, and delivered with genuine care. Our mission is to enhance the health and well-being of every patient we serve.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine state-of-the-art medical technology with a human touch, ensuring that every patient receives the attention and care they deserve. Our team of dedicated professionals works together to provide comprehensive healthcare solutions tailored to your unique needs.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative scroll-reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=500&fit=crop"
                  alt="Medical team"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-olive-200/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-olive-300/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
