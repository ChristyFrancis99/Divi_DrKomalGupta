import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/komal_logo_olive.png";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="flex items-center justify-between">

          {/* LEFT - Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Dr Komal Logo"
              className="w-40 md:w-48 h-auto"
            />
          </Link>

          {/* CENTER - Green Rounded Nav */}
          <div className="hidden lg:flex bg-olive-600 px-12 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-white font-semibold"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT - Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-white text-olive-500 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden bg-olive-500 text-white p-3 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-olive-500 rounded-3xl shadow-lg px-6 py-6">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white text-olive-500 text-center py-3 rounded-full text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-32"></div>
    </>
  );
}
