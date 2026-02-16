import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>

      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ease-out",
          scrolled && "top-3"
        )}
      >
        <div className="flex items-center justify-between">


          <Link to="/" className="group flex-shrink-0">
            <img
              src={logo}
              alt="Dr Komal Logo"
              className="w-40 md:w-48 h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>


          <div
            className={cn(
              "hidden lg:flex px-10 py-3.5 rounded-full shadow-lg transition-all duration-500",
              scrolled
                ? "bg-white/85 backdrop-blur-xl shadow-medium border border-olive-100/60"
                : "bg-olive-500 shadow-glow-primary"
            )}
          >
            <div className="flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative text-[15px] font-medium transition-all duration-300 py-1",
                    scrolled
                      ? location.pathname === item.href
                        ? "text-olive-600 font-semibold"
                        : "text-foreground/70 hover:text-olive-600"
                      : location.pathname === item.href
                        ? "text-white font-semibold"
                        : "text-white/85 hover:text-white"
                  )}
                >
                  {item.name}

                  {location.pathname === item.href && (
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-colors duration-300",
                        scrolled ? "bg-olive-500" : "bg-white"
                      )}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>


          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={cn(
                "px-7 py-3 rounded-full text-[15px] font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md",
                scrolled
                  ? "bg-olive-500 text-white hover:bg-olive-600"
                  : "bg-white text-olive-600 hover:bg-olive-50"
              )}
            >
              Contact Us
            </Link>
          </div>


          <button
            className="lg:hidden bg-olive-500 text-white p-3 rounded-full shadow-md hover:bg-olive-600 transition-all duration-200 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  mobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                )}
              />
            </div>
          </button>
        </div>


        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-400 ease-out",
            mobileMenuOpen
              ? "mt-3 max-h-96 opacity-100"
              : "mt-0 max-h-0 opacity-0"
          )}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-elevated border border-olive-100/60 px-6 py-5">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    location.pathname === item.href
                      ? "bg-olive-50 text-olive-600 font-semibold"
                      : "text-foreground/80 hover:bg-olive-50/50 hover:text-olive-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-olive-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-olive-500 text-white text-center py-3 rounded-xl text-base font-semibold hover:bg-olive-600 transition-all duration-200 active:scale-[0.98]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div className="h-28" />
    </>
  );
}
