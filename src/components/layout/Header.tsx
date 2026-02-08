import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/divi_logo.png";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-teal-600 text-white rounded-3xl mx-4 mt-4">
      <nav className="container-custom flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Devi Logo"
            className="w-16 sm:w-20 md:w-24 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-200",
                location.pathname === item.href
                  ? "text-white"
                  : "text-teal-100",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-medium text-teal-100 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (123) 456-7890
          </a>
          <Button asChild variant="secondary">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-teal-600 border-t border-teal-500 animate-fade-in">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-white"
                    : "text-teal-100 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild variant="secondary" className="w-full mt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
