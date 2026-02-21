import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope, Brain, Baby, Heart, Bone,
  CheckCircle, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Stethoscope,
    title: "Kinesiology Tapping",
    description: "Kinesiology Taping involves applying specialized elastic tape to support joints and muscles without restricting your natural movement.We tackle pain and instability by using specific tension techniques that improve blood flow, reduce swelling, and provide structural support.This approach is ideal for managing sports injuries and correcting posture while allowing you to remain active during recovery.",
    features: ["Muscle & Joint Support", "Pain & Inflammation Reduction", "Sports Injury Management", "Postural Correction","Swelling & Edema Control","Injury Prevention Support"],
    color: "text-olive-500",
    bgColor: "bg-olive-100",
    accentColor: "border-l-olive-500",
  },
  {
    icon: Heart,
    title: "Dry Needling",
    description: "Dry Needling is a therapeutic technique that uses thin, sterile needles inserted into trigger points (tight muscle knots) to relieve pain and improve movement. It helps release muscle tension, reduce inflammation, and restore proper muscle function. This treatment is highly effective for chronic pain, sports injuries, and muscular stiffness, promoting faster recovery and improved mobility without the use of medication.",
    features: ["Trigger Point Therapy", "Chronic Pain Relief", "Sports Injury Recovery", "Muscle Tightness & Spasm Treatment","Improved Range of Motion"],
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    accentColor: "border-l-rose-400",
  },
  {
    icon: Brain,
    title: "Cupping",
    description: "Cupping Therapy is a traditional healing technique that uses special cups placed on the skin to create suction. This suction improves blood circulation, reduces muscle tension, and promotes natural healing. It helps relieve pain, decrease inflammation, and detoxify the body. Cupping is commonly used for back pain, neck stiffness, and muscle soreness while supporting overall recovery.",
    features: ["Pain & Inflammation Reduction", "Muscle Relaxation", "Improved Blood Circulation", "Sports Recovery Support","Stress & Tension Relief"],
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    accentColor: "border-l-violet-400",
  },
  {
    icon: Baby,
    title: "Manual Therapy",
    description: "Manual Therapy is a hands-on treatment approach where skilled techniques are used to mobilize joints, stretch soft tissues, and reduce pain. It helps restore normal movement, improve flexibility, and enhance muscle function. This therapy is beneficial for joint stiffness, postural issues, and musculoskeletal conditions, allowing patients to regain strength and mobility safely.",
    features: ["Joint Mobilization", "Soft Tissue Release", "Posture Correction", "Pain Management","Mobility & Flexibility Improvement"],
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    accentColor: "border-l-pink-400",
  },
  {
    icon: Bone,
    title: "Chiropractics",
    description: "Chiropractic Care focuses on diagnosing and treating mechanical disorders of the spine and musculoskeletal system. Using precise spinal adjustments and alignment techniques, chiropractic treatment reduces nerve irritation, relieves pain, and improves overall body function. It is effective for back pain, neck pain, headaches, and posture-related issues.",
    features: ["Spinal Adjustments", "Back & Neck Pain Relief", "Postural Alignment", "Headache & Migraine Management","Prenatal and postnatal exercises"],
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    accentColor: "border-l-amber-400",
  },
  {
    icon: Bone,
    title: "Pediatric physiotherapy",
    description: "Pediatric Physiotherapy is designed to support infants, children, and adolescents who experience developmental delays, movement difficulties, or physical challenges. Through gentle and child-friendly techniques, therapy helps improve strength, coordination, posture, and motor skills. The goal is to promote healthy physical development and enable children to participate confidently in daily activities.",
    features: ["Developmental Delay Management", "Posture & Alignment Correction", "Cerebral Palsy Rehabilitation", "Pediatric Sports Injury Care","Strength & Motor Skill Development","Parent Guidance & Home Exercise Programs"],
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    accentColor: "border-l-teal-400",
  },
  {
    icon: Bone,
    title: "Neuro physiotherapy",
    description: "Neuro Physiotherapy focuses on the rehabilitation of individuals with neurological conditions that affect movement, balance, coordination, and muscle control. It uses specialized therapeutic techniques to improve mobility, restore functional independence, and enhance quality of life. This treatment is beneficial for conditions such as stroke, spinal cord injuries, Parkinson's disease, multiple sclerosis, and other nerve-related disorders.",
    features: ["Stroke Rehabilitation", "Balance & Coordination Training", "Gait (Walking) Re-education", "Muscle Strengthening & Control","Post-Surgical Neuro Recovery","Functional Independence Training"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    accentColor: "border-l-indigo-400",
  },
];

const Services = () => {
  const servicesRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>

      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              At DR KOMAL'S Physiocare, we provide specialized Physiotherapy Across Orthopedics, Sports, Neuro & More.
            </p>
            <p className="text-xl text-primary-foreground/75 mt-2 leading-relaxed">
              Comprehensive, evidence-based care designed for lasting recovery and better mobility.
            </p>
          </div>
        </div>
      </section>


      <section ref={servicesRef} className="section-padding bg-olive-50/20">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "bg-white rounded-2xl p-8 shadow-card border border-olive-100/50",
                  "grid lg:grid-cols-3 gap-8 items-start",
                  "hover:shadow-card-hover transition-all duration-400 ease-out",
                  "border-l-4",
                  service.accentColor,
                  "scroll-reveal",
                  `stagger-${Math.min(index + 1, 8)}`
                )}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110",
                      service.bgColor
                    )}>
                      <service.icon className={cn("w-7 h-7", service.color)} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{service.description}</p>
                </div>
                <div className="bg-olive-50/60 rounded-xl p-6 border border-olive-100/40">
                  <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase flex items-center gap-2">
                    <span className="w-5 h-0.5 bg-olive-400 rounded-full" />
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-4.5 h-4.5 text-olive-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section ref={ctaRef} className="section-padding bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Your Path to Relief Starts with a Single Call
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Take the first step towards a pain-free life. Our experienced Doctors are here to help you achieve optimal health
            </p>
            <Button asChild size="lg" variant="accent" className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
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
