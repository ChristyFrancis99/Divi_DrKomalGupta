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
    features: ["Muscle & Joint Support", "Pain & Inflammation Reduction", "Sports Injury Management", "Postural Correction","Swelling & Edema Control","Injury Prevention Support"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Dry Needling",
    description: "Dry Needling is a therapeutic technique that uses thin, sterile needles inserted into trigger points (tight muscle knots) to relieve pain and improve movement. It helps release muscle tension, reduce inflammation, and restore proper muscle function. This treatment is highly effective for chronic pain, sports injuries, and muscular stiffness, promoting faster recovery and improved mobility without the use of medication.",
    features: ["Trigger Point Therapy", "Chronic Pain Relief", "Sports Injury Recovery", "Muscle Tightness & Spasm Treatment","Improved Range of Motion"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Cupping",
    description: "Cupping Therapy is a traditional healing technique that uses special cups placed on the skin to create suction. This suction improves blood circulation, reduces muscle tension, and promotes natural healing. It helps relieve pain, decrease inflammation, and detoxify the body. Cupping is commonly used for back pain, neck stiffness, and muscle soreness while supporting overall recovery.",
    features: ["Pain & Inflammation Reduction", "Muscle Relaxation", "Improved Blood Circulation", "Sports Recovery Support","Stress & Tension Relief"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Baby,
    title: "Manual Therapy",
    description: "Manual Therapy is a hands-on treatment approach where skilled techniques are used to mobilize joints, stretch soft tissues, and reduce pain. It helps restore normal movement, improve flexibility, and enhance muscle function. This therapy is beneficial for joint stiffness, postural issues, and musculoskeletal conditions, allowing patients to regain strength and mobility safely.",
    features: ["Joint Mobilization", "Soft Tissue Release", "Posture Correction", "Pain Management","Mobility & Flexibility Improvement"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Bone,
    title: "Chiropractics",
    description: "Chiropractic Care focuses on diagnosing and treating mechanical disorders of the spine and musculoskeletal system. Using precise spinal adjustments and alignment techniques, chiropractic treatment reduces nerve irritation, relieves pain, and improves overall body function. It is effective for back pain, neck pain, headaches, and posture-related issues.",
    features: ["Spinal Adjustments", "Back & Neck Pain Relief", "Postural Alignment", "Headache & Migraine Management","Prenatal and postnatal exercises"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Bone,
    title: "Pediatric physiotherapy",
    description: "Pediatric Physiotherapy is designed to support infants, children, and adolescents who experience developmental delays, movement difficulties, or physical challenges. Through gentle and child-friendly techniques, therapy helps improve strength, coordination, posture, and motor skills. The goal is to promote healthy physical development and enable children to participate confidently in daily activities.",
    features: ["Developmental Delay Management", "Posture & Alignment Correction", "Cerebral Palsy Rehabilitation", "Pediatric Sports Injury Care","Strength & Motor Skill Development","Parent Guidance & Home Exercise Programs"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Bone,
    title: "Neuro physiotherapy",
    description: "Neuro Physiotherapy focuses on the rehabilitation of individuals with neurological conditions that affect movement, balance, coordination, and muscle control. It uses specialized therapeutic techniques to improve mobility, restore functional independence, and enhance quality of life. This treatment is beneficial for conditions such as stroke, spinal cord injuries, Parkinson’s disease, multiple sclerosis, and other nerve-related disorders.",
    features: ["Stroke Rehabilitation", "Balance & Coordination Training", "Gait (Walking) Re-education", "Muscle Strengthening & Control","Post-Surgical Neuro Recovery","Functional Independence Training"],
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
