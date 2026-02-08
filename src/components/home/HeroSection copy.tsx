import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dr_komal.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden  from-primary via-primary to-teal-600 flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Doctor Name – True Center */}
      <h1
        className="absolute left-0 right-0 top-16 tracking-normal md:tracking-wide lg:tracking-wider text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide text-neutral-900 text-center z-30 animate-fade-up opacity-0"
        style={{
          fontFamily: "Nunito, sans-serif",
        }}
      >
        Dr. Komal Gupta
      </h1>

      {/* Center Floating Doctor Image */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative animate-float">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={heroImage}
              alt="Dr. Komal Gupta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-110" />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-screen pt-40 gap-10">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left text-white">

            <h3 className="text-2xl font-bold">
              Experienced orthopedic physiotherapist
            </h3>

            <p className="text-lg text-white/80 max-w-md"> 
            With over 7 years of experience, Dr. Komal R. Gupta is a trusted orthopedic physiotherapist dedicated to helping patients regain mobility and improve their quality of life.
            </p>
          </div>

          {/* CENTER SPACER */}
          <div />

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-center lg:text-right text-white">
            <p className="text-white/100 max-w-md ml-auto">
              Take your first step towards pain-free life with advanced orthopaedic care at Divi.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-white text-[hsl(174,62%,32%)] hover:bg-white/90"
            >
              <Link to="/contact">Book an appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
