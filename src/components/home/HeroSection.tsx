import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dr_komal_1.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-olive-50/60 via-white to-white">


      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-olive-200/20 rounded-full blur-3xl animate-blob-drift" />
        <div className="absolute bottom-32 right-[8%] w-96 h-96 bg-olive-300/15 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-[60%] w-48 h-48 bg-olive-100/25 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "1s" }} />

        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "radial-gradient(circle, hsl(90 41% 38%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
      </div>


      <h1
        className="absolute left-0 right-0 top-16 tracking-normal md:tracking-wide lg:tracking-wider text-6xl md:text-7xl lg:text-8xl font-bold text-olive-500 text-center z-30 animate-fade-up opacity-0"
        style={{
          fontFamily: "Nunito, sans-serif",
          WebkitTextStroke: "1px white",
        }}
      >
        Dr. Komal Gupta
      </h1>


      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative animate-float">

          <div className="absolute inset-0 rounded-full border-2 border-olive-300/30 animate-pulse-ring" style={{ margin: "-8px" }} />
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-elevated">
            <img
              src={heroImage}
              alt="Dr. Komal Gupta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110" />
        </div>
      </div>


      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-screen pt-40 gap-10">


          <div className="space-y-6 text-center lg:text-left animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-foreground">
              Experienced orthopedic physiotherapist
            </h3>

            <p className="text-lg text-muted-foreground max-w-md">
              With over 8 years of experience, Dr. Komal R. Gupta is a trusted
              orthopedic physiotherapist dedicated to helping patients regain
              mobility and improve their quality of life.
            </p>
          </div>


          <div />


          <div className="space-y-6 text-center lg:text-right animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground max-w-md ml-auto">
              Take your first step towards pain-free life with advanced
              orthopaedic care at Divi.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-olive-500 text-white hover:bg-olive-600 shadow-lg hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Link to="/contact">Book an appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
