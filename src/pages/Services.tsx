import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Stethoscope, Brain, Baby, Heart, Pill, Bone, 
  Eye, Ear, Syringe, Activity, Microscope, Clock,
  CheckCircle, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Stethoscope,
    title: "Kinesiology Tapping",
    description: "Kinesiology Taping involves applying specialized elastic tape to support joints and muscles without restricting your natural movement.We tackle pain and instability by using specific tension techniques that improve blood flow, reduce swelling, and provide structural support.This approach is ideal for managing sports injuries and correcting posture while allowing you to remain active during recovery.",
    features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Screenings", "Immunizations"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Dry Needling",
    description: "Expert heart care including diagnostics, treatment, and ongoing cardiovascular health management. We use advanced technology for accurate diagnosis and effective treatment.",
    features: ["ECG & Stress Testing", "Heart Disease Treatment", "Cardiac Rehabilitation", "Cholesterol Management"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Cupping",
    description: "Compassionate mental health services including counseling, therapy, and psychiatric care. We provide a safe, supportive environment for your mental wellness journey.",
    features: ["Individual Therapy", "Psychiatric Evaluations", "Anxiety & Depression Treatment", "Stress Management"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Baby,
    title: "Manual Therapy",
    description: "Specialized care for infants, children, and adolescents from newborn through age 18. Our pediatricians focus on your child's physical, emotional, and developmental health.",
    features: ["Well-Child Visits", "Developmental Screenings", "Pediatric Vaccinations", "Sports Physicals"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Bone,
    title: "Chiropractics",
    description: "Treatment for bone, joint, and muscle conditions with advanced surgical and non-surgical options. From sports injuries to arthritis, we help you move better.",
    features: ["Joint Replacement", "Sports Medicine", "Physical Therapy", "Fracture Care"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal-600 text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              At DR KOMAL'S PHYSIOCARE, we provide specialized Physiotherapy Across Orthopedics, Sports, Neuro & More.
            </p>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive, evidence-based care designed for lasting recovery and better mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "bg-card rounded-2xl p-8 shadow-card border border-border/50",
                  "grid lg:grid-cols-3 gap-8 items-start"
                )}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center", service.bgColor)}>
                      <service.icon className={cn("w-7 h-7", service.color)} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <Button asChild>
                    <Link to="/contact">
                      Book Appointment
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Path to Relief Starts with a Single Call
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards a pain-free life. Our experienced chiropractors are here to help you achieve optimal health
            </p>
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
