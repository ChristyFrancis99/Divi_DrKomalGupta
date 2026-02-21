import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
    content:
      "Shop A-1, Mathuradas Road, Anand Nagar, Bohra Colony, Dhanukarwadi",
    subtext: "Kandivali West, Mumbai, Maharashtra 400067",
    href: "https://www.google.com/maps?q=Dr+Komals+PHYSIOCARE+Kandivali+West+Mumbai",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Morning: 10 AM-12 PM and Evening: 4 PM-9 PM",
    subtext: "Sunday: Closed",
    href: "#",
  },
];

const Contact = () => {
  const cardsRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              Reach out to our clinic for appointments, inquiries, or any
              healthcare assistance. We’re here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        ref={cardsRef}
        className="py-16 bg-white border-b border-olive-100/60"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
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

                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {info.title}
                </h3>

                <p className="text-foreground text-sm">{info.content}</p>

                {info.subtext && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {info.subtext}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-olive-50/20">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden h-96 shadow-card border border-olive-100/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.312270042605!2d72.8376575!3d19.2036382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b777f40523db%3A0x4544ddebd52b3fb8!2sDr.%20Komal's%20PHYSIOCARE!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
