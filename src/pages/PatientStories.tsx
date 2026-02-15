import { Layout } from "@/components/layout/Layout";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient since 2019",
    content: "The care I received at HealthCare was exceptional. Dr. Smith took the time to really listen to my concerns and developed a treatment plan that worked perfectly for me. After years of struggling with chronic pain, I finally found relief thanks to their comprehensive approach.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    category: "Primary Care",
  },
  {
    name: "Michael Chen",
    role: "Patient since 2021",
    content: "I've never experienced such personalized healthcare. The staff is friendly, appointments are on time, and the facility is modern and comfortable. What impressed me most was how they coordinated my care across different specialists seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    category: "Cardiology",
  },
  {
    name: "Emily Rodriguez",
    role: "Patient since 2020",
    content: "From pediatric care for my kids to my own annual checkups, HealthCare handles everything. It's wonderful having all our family's healthcare in one place. The pediatric team is especially wonderful - my children actually look forward to their checkups!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    category: "Pediatrics",
  },
  {
    name: "David Thompson",
    role: "Patient since 2018",
    content: "After my heart scare last year, the cardiology team at HealthCare gave me a second chance at life. Their cardiac rehabilitation program helped me regain my strength and confidence. I'm now healthier than I've been in decades.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Cardiology",
  },
  {
    name: "Linda Martinez",
    role: "Patient since 2022",
    content: "The mental health services at HealthCare changed my life. Dr. Chen helped me work through my anxiety with compassion and understanding. The combination of therapy and medication management has made a tremendous difference in my daily life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    category: "Mental Health",
  },
  {
    name: "Robert Kim",
    role: "Patient since 2020",
    content: "I injured my knee playing basketball and thought my active lifestyle was over. The orthopedic team not only fixed my injury but got me back on the court within months. Their physical therapy program was thorough and encouraging.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    category: "Orthopedics",
  },
  {
    name: "Jennifer Williams",
    role: "Patient since 2019",
    content: "As someone with multiple chronic conditions, coordinating my care used to be a nightmare. HealthCare's integrated approach means all my doctors communicate with each other, and I have one team looking out for my overall health.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    category: "Primary Care",
  },
  {
    name: "James Patterson",
    role: "Patient since 2021",
    content: "The preventive care at HealthCare caught a potential problem early, before it became serious. Their thorough approach to annual checkups and screenings quite literally saved my life. I recommend them to everyone I know.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    category: "Primary Care",
  },
];

const PatientStories = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-olive-600 text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4">Patient Stories</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Stories, Real Results
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Hear from our patients about their experiences with HealthCare Medical Center. Their stories inspire us to continue delivering exceptional care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">50,000+</p>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">4.9/5</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">15+</p>
              <p className="text-muted-foreground">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                {/* Category */}
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.category}
                </span>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of satisfied patients who trust HealthCare Medical Center for their healthcare needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-xl text-base font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PatientStories;
