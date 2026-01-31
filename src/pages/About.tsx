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
  {
    title: "Patient-Centered Care",
    description: "We put our patients first, ensuring every decision is made with your best interests at heart.",
  },
  {
    title: "Excellence in Medicine",
    description: "Our team stays at the forefront of medical advances to provide you with the best possible care.",
  },
  {
    title: "Compassion & Empathy",
    description: "We treat every patient with kindness, understanding, and respect they deserve.",
  },
  {
    title: "Integrity & Trust",
    description: "We build lasting relationships based on honesty, transparency, and ethical practice.",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. James Wong",
    role: "Head of Pediatrics",
    specialty: "Pediatric Care",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Chen",
    role: "Head of Cardiology",
    specialty: "Cardiovascular Health",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Mental Health Director",
    specialty: "Psychiatry",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal-600 text-primary-foreground section-padding">
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

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Medical Experts
            </h2>
            <p className="text-muted-foreground text-lg">
              Our board-certified physicians bring years of experience and expertise to provide you with exceptional care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
