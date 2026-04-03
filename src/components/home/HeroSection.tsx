import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dr_komal_1.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-olive-50/60 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-olive-200/20 rounded-full blur-3xl animate-blob-drift" />
        <div className="absolute bottom-32 right-[8%] w-96 h-96 bg-olive-300/15 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-[60%] w-48 h-48 bg-olive-100/25 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "radial-gradient(circle, hsl(90 41% 38%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      {/* ── MOBILE LAYOUT (< lg) ── stacked, no absolute positioning ── */}
      <div className="lg:hidden relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-14 gap-8">
        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl font-bold text-olive-500 leading-tight animate-fade-up opacity-0"
          style={{ fontFamily: "Nunito, sans-serif", WebkitTextStroke: "0.5px white", animationDelay: "0s" }}
        >
          Dr. Komal Gupta
        </h1>

        {/* Circular image */}
        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full border-2 border-olive-300/30 animate-pulse-ring" style={{ margin: "-8px" }} />
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-elevated">
            <img src={heroImage} alt="Dr. Komal Gupta" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110" />
        </div>

        {/* Subtitle & description */}
        <div className="space-y-3 animate-fade-up opacity-0 max-w-sm" style={{ animationDelay: "0.25s" }}>
          <h3 className="text-xl font-bold text-foreground">
            Experienced orthopedic physiotherapist
          </h3>
          <p className="text-base text-muted-foreground">
            With over 8 years of experience, Dr. Komal R. Gupta is a trusted orthopedic
            physiotherapist dedicated to helping patients regain mobility and improve their
            quality of life.
          </p>
        </div>

        {/* CTA text + button */}
        <div className="space-y-4 animate-fade-up opacity-0 max-w-sm" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-sm">
            Take your first step towards a pain-free life with advanced orthopaedic care at Divi.
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

      {/* ── DESKTOP LAYOUT (≥ lg) ── original 3-column with absolute image ── */}
      <div className="hidden lg:block relative min-h-screen">
        {/* Big background title */}
        <h1
          className="absolute left-0 right-0 top-16 tracking-wide lg:tracking-wider text-7xl xl:text-8xl font-bold text-olive-500 text-center z-30 animate-fade-up opacity-0"
          style={{ fontFamily: "Nunito, sans-serif", WebkitTextStroke: "1px white" }}
        >
          Dr. Komal Gupta
        </h1>

        {/* Centered circular image */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full border-2 border-olive-300/30 animate-pulse-ring" style={{ margin: "-8px" }} />
            <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white shadow-elevated">
              <img src={heroImage} alt="Dr. Komal Gupta" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110" />
          </div>
        </div>

        {/* 3-column text grid */}
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-3 items-center min-h-screen pt-40 gap-10">
            <div className="space-y-6 text-left animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
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
            <div className="space-y-6 text-right animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
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
      </div>
    </section>
  );
}
