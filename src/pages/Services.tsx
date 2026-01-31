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
    title: "Primary Care",
    description: "Comprehensive health assessments, preventive care, routine checkups, and treatment for common illnesses. Our primary care physicians are your first point of contact for all health concerns.",
    features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Screenings", "Immunizations"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert heart care including diagnostics, treatment, and ongoing cardiovascular health management. We use advanced technology for accurate diagnosis and effective treatment.",
    features: ["ECG & Stress Testing", "Heart Disease Treatment", "Cardiac Rehabilitation", "Cholesterol Management"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Compassionate mental health services including counseling, therapy, and psychiatric care. We provide a safe, supportive environment for your mental wellness journey.",
    features: ["Individual Therapy", "Psychiatric Evaluations", "Anxiety & Depression Treatment", "Stress Management"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents from newborn through age 18. Our pediatricians focus on your child's physical, emotional, and developmental health.",
    features: ["Well-Child Visits", "Developmental Screenings", "Pediatric Vaccinations", "Sports Physicals"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Treatment for bone, joint, and muscle conditions with advanced surgical and non-surgical options. From sports injuries to arthritis, we help you move better.",
    features: ["Joint Replacement", "Sports Medicine", "Physical Therapy", "Fracture Care"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "On-site pharmacy services for convenient prescription fulfillment and medication counseling. Our pharmacists ensure you understand your medications.",
    features: ["Prescription Filling", "Medication Counseling", "Immunizations", "OTC Products"],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care from routine exams to surgical procedures. We help protect and preserve your vision with state-of-the-art diagnostics.",
    features: ["Comprehensive Eye Exams", "Cataract Surgery", "Glaucoma Treatment", "LASIK Consultations"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "Comprehensive lab testing with quick turnaround times. Our state-of-the-art laboratory provides accurate results for informed medical decisions.",
    features: ["Blood Tests", "Urinalysis", "Pathology", "Diagnostic Testing"],
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
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
              We offer a complete range of medical services to meet all your healthcare needs under one roof, from preventive care to specialized treatments.
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
              Need a Service Not Listed?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us to discuss your specific healthcare needs. We may be able to help or refer you to a trusted specialist.
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
