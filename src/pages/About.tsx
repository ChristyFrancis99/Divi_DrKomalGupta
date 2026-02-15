import { Layout } from "@/components/layout/Layout";
import { Award, Users, Heart, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Patients Treated", value: "50,000+", icon: Users },
  { label: "Medical Professionals", value: "25+", icon: Award },
  { label: "Patient Satisfaction", value: "98%", icon: Heart },
];

const values = [
];

const team = [
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-olive-600 text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dedicated to Your Health Since 2010
            </h1>
            <p className="text-xl text-primary-foreground/80">
              HealthCare Medical Center has been providing exceptional healthcare services to our community for over 15 years, combining cutting-edge medicine with compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Healthcare Through Innovation and Compassion
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At HealthCare Medical Center, we believe that quality healthcare should be accessible, personalized, and delivered with genuine care. Our mission is to enhance the health and well-being of every patient we serve.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We combine state-of-the-art medical technology with a human touch, ensuring that every patient receives the attention and care they deserve. Our team of dedicated professionals works together to provide comprehensive healthcare solutions tailored to your unique needs.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=500&fit=crop"
                alt="Medical team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
