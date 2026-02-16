import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Kinesiology Tapping", href: "/services" },
  { name: "Dry Needling", href: "/services" },
  { name: "Cupping", href: "/services" },
  { name: "Manual Therapy", href: "/services" },
  { name: "Chiropractics", href: "/services" },
  { name: "Pediatric physiotherapy", href: "/services" },
  { name: "Neuro physiotherapy", href: "/services" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <footer ref={revealRef} className="relative bg-foreground text-primary-foreground overflow-hidden">

      <div className="h-1 bg-gradient-to-r from-olive-400 via-olive-500 to-olive-600" />

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-6 scroll-reveal">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-olive-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-lg">H+</span>
              </div>
              <span className="text-xl font-bold tracking-tight">HealthCare</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Providing compassionate, comprehensive healthcare for you and your family. Your health is our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/8 flex items-center justify-center hover:bg-olive-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>


          <div className="scroll-reveal stagger-2">
            <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-olive-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group text-primary-foreground/60 hover:text-primary-foreground text-sm inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-olive-400 rounded-full transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="scroll-reveal stagger-3">
            <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-olive-500 rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group text-primary-foreground/60 hover:text-primary-foreground text-sm inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-olive-400 rounded-full transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="scroll-reveal stagger-4">
            <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-olive-500 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-olive-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-olive-500/25 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-olive-400" />
                </div>
                <span className="text-primary-foreground/60 text-sm leading-relaxed">
                  Shop A-1, Mathuradas Road, Anand Nagar, Bohra Colony, Dhanukarwadi,<br/>
                  Kandivali West, Mumbai, Maharashtra 400067
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-olive-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-olive-500/25 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-olive-400" />
                </div>
                <a href="tel:+919870189389" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                    +91 98701 89389
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-olive-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-olive-500/25 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-olive-400" />
                </div>
                <a href="mailto:info@healthcare.com" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                  info@healthcare.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-olive-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-olive-500/25 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-olive-400" />
                </div>
                <span className="text-primary-foreground/60 text-sm leading-relaxed">
                  Morning: 10 AM-12 PM and Evening: 4 PM-9 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-14 pt-8 border-t border-primary-foreground/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map((text) => (
              <a
                key={text}
                href="#"
                className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors duration-200"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
