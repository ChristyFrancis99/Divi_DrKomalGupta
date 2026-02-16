import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import type React from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98701 89389",
    href: "tel:+919870189389",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@healthcare.com",
    href: "mailto:info@healthcare.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Shop A-1, Mathuradas Road, Anand Nagar, Bohra Colony, Dhanukarwadi",
    subtext: "Kandivali West, Mumbai, Maharashtra 400067",
    href: "https://www.google.com/maps/dir//Dr.+Komal's+PHYSIOCARE+:+Back,+Neck,+Knee+%26+Shoulder+pain+%7C+Dry+Needle+%7C+Sports+Rehab+%7C+Physiotherapist+in+Kandivali+-+Malad,+Shop+A-1,+Mathuradas+Road,+Anand+Nagar,+Bohra+Colony,+Dhanukarwadi,+Kandivali+West,+Mumbai,+Maharashtra+400067/@19.1887665,72.8423049,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b777f40523db:0x4544ddebd52b3fb8!2m2!1d72.8402324!2d19.2036332?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Morning: 10 AM-12 PM and Evening: 4 PM-9 PM ",
    subtext: "Sunday: Closed",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cardsRef = useScrollReveal<HTMLElement>();
  const formRef = useScrollReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Appointment request submitted! We'll contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>

      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Book Your Appointment
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              Ready to take the next step in your healthcare journey? Schedule an appointment with our team of dedicated medical professionals.
            </p>
          </div>
        </div>
      </section>


      <section ref={cardsRef} className="py-14 bg-white border-b border-olive-100/60">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                className={cn(
                  "group text-center p-6 rounded-2xl border border-olive-100/50 bg-white",
                  "hover:bg-olive-50/50 hover:border-olive-200/50 hover:-translate-y-1 hover:shadow-medium",
                  "transition-all duration-300 ease-out",
                  "scroll-reveal",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-olive-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-500 group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-5 h-5 text-olive-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{info.title}</h3>
                <p className="text-foreground text-sm">{info.content}</p>
                {info.subtext && <p className="text-xs text-muted-foreground mt-1">{info.subtext}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>


      <section ref={formRef} className="section-padding bg-olive-50/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14">

            <div className="scroll-reveal-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Request an Appointment
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="form-input-enhanced rounded-xl border-olive-200/60 focus:border-olive-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="form-input-enhanced rounded-xl border-olive-200/60 focus:border-olive-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="form-input-enhanced rounded-xl border-olive-200/60 focus:border-olive-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98701 89389"
                      className="form-input-enhanced rounded-xl border-olive-200/60 focus:border-olive-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-label="Service Needed"
                    className="form-input-enhanced w-full h-11 px-4 rounded-xl border border-olive-200/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-olive-400/30 focus:border-olive-400 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="kinesiology-taping">Kinesiology Taping</option>
                    <option value="dry-needling">Dry Needling</option>
                    <option value="cupping">Cupping Therapy</option>
                    <option value="manual-therapy">Manual Therapy</option>
                    <option value="chiropractic">Chiropractic Care</option>
                    <option value="pediatric-physio">Pediatric Physiotherapy</option>
                    <option value="neuro-physio">Neuro Physiotherapy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your healthcare needs or preferred appointment times..."
                    rows={4}
                    className="form-input-enhanced rounded-xl border-olive-200/60 focus:border-olive-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>


            <div className="scroll-reveal-right">
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-card border border-olive-100/50">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-olive-400 rounded-full" />
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "Our team will contact you within 24 hours to confirm your appointment",
                    "Bring your insurance card and photo ID to your visit",
                    "Arrive 15 minutes early to complete any necessary paperwork",
                    "We accept most major insurance plans",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="rounded-2xl overflow-hidden h-80 shadow-card border border-olive-100/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775764!2d-122.41941548468198!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635959481000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HealthCare Medical Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-8 bg-red-50 border-t border-red-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Medical Emergency?
              </h3>
              <p className="text-muted-foreground text-sm">
                If you're experiencing a medical emergency, call 911 or go to your nearest emergency room.
              </p>
            </div>
            <a
              href="tel:911"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call 911
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
