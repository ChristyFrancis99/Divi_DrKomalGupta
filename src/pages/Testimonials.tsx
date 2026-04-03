import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "We had a wonderful experience with my son's physiotherapist Dr.Komal Gupta! They are extremely patient, caring, and knowledgeable. The sessions are always fun and engaging, which keeps my child motivated to do the exercises. We've seen great improvement and are truly thankful for the personal attention and gentle approach. Highly recommended for physiotherapy for kids as well as adults!",
    author: "Veer Gala",
    rating: 5,
  },
  {
    quote: "Dr Komal is experienced & knows well how to treat the patients through physiotherapy. She's very caring & would go beyond her capacity to help her patients. She suggests the right amount of exercise needed to heal the pain & is highly focused to get her patients out of their pain. I'd highly recommend to visit her for your physiotherapy related ailments.",
    author: "Tarun Kataria",
    rating: 5,
  },
  {
    quote: "I am taking her treatment from past few days and Komal is simply an amazing person with exceptional experience in her work. She is always smiling and much caring person and that's all we need when you are going with any kind of treatment. When doctor welcomes you with a big smile, patient always feels yes I will be fine for sure. I will highly recommend everyone to visit her if you need any type of physiotherapy treatment.",
    author: "Ratna Desai",
    rating: 5,
  },
  {
    quote: "An excellent experience with Dr. Komal as my physiotherapist. She is highly knowledgeable, patient, and truly cares about her patients' recovery. Her treatment approach is both effective and personalized, ensuring noticeable improvement in a short time. The clinic is well-maintained, and the sessions are always comfortable. I highly recommend Dr. Komal to anyone seeking expert physiotherapy care!",
    author: "Manan Desai",
    rating: 5,
  },
  {
    quote: "I sought physiotherapy for my wrist fracture and my experience with Dr. Komal has been excellent. She has demonstrated deep expertise in this field and her personalized approach has made a significant difference in my recovery. Dr. Komal has always been professional, communicative and supportive throughout the process. I would highly recommend her to anybody who's looking for expert Physiotherapy treatment",
    author: "Riddhi Hindocha",
    rating: 5,
  },
  {
    quote: "I was suffering from severe back pain, and after visiting Dr. Komal, my physiotherapist, I experienced a remarkable improvement. She is extremely knowledgeable, caring, and patient. Her treatment and exercises helped me heal completely. I'm really thankful for her excellent care and highly recommend her to anyone in need of physiotherapy!",
    author: "Harsh Panchal",
    rating: 5,
  },
  {
    quote: "I visited Physiocare for SI joint pain, and Dr. Komal's expertise, friendly attitude, and personalized approach made a significant difference in my recovery. She properly understood my condition and designed a treatment plan that provided noticeable relief. Her warm and approachable nature immediately put me at ease, and her consistent follow-ups ensured steady progress and long-term results. The clinic is well-maintained with modern facilities, creating a comfortable and professional environment. I highly recommend Physiocare for anyone seeking effective and compassionate physiotherapy care!",
    author: "luve mashru",
    rating: 5,
  },
  {
    quote: "I was diagnosed with Bell's Palsy and started treatment with Dr. Komal. Within just a few days, I noticed improvement, and in a month, I was completely cured. Her treatment and guidance were truly effective. She is very kind, knowledgeable, and always made sure I was comfortable during the sessions. I'm really thankful for her support and care throughout my recovery. Highly recommended to anyone who needs a dedicated and skilled physiotherapist. Thank you so much, Dr. Komal!",
    author: "Sejal Bomble",
    rating: 5,
  },
  {
    quote: "I would like to extend my heartfelt gratitude to Dr. Komal Gupta for her exceptional care and expertise during my post-operative recovery from calcaneum surgery. From the very first session, her personalized approach and deep understanding of physiotherapy gave me immense confidence in my recovery journey. Dr. Komal ensured every therapy session was tailored to my specific needs, helping me regain mobility and strength at a pace that was both challenging and comfortable. Her patience, encouragement, and attention to detail made a significant difference in my rehabilitation process. Thanks to her dedication and consistent support, I have made remarkable progress and am on my way to a full recovery. I wholeheartedly recommend Dr. Komal Gupta to anyone in need of a skilled and compassionate physiotherapist. Thank you, Dr. Komal, for your outstanding care and guidance!",
    author: "Chirag Jain",
    rating: 5,
  },
  {
    quote: "I have been visiting the clinic for the past 3 months and have had a very good experience with Dr. Komal Gupta and her team, including Dr. Khushali and Aakash. I took treatment for flat foot and neck pain, and the results have been very satisfying. Dr. Komal Gupta is knowledgeable and patient, and explains the treatment clearly. The sessions were well planned and handled with great care. Dr. Khushali and Aakash were very supportive and attentive throughout. The clinic environment is friendly, hygienic, and comfortable, and I've noticed good improvement in my pain and mobility. I would highly recommend Dr. Komal Gupta and her team for physiotherapy.",
    author: "jill Poojara",
    rating: 5,
  },
];

const Testimonials = () => {
  const testimonialsRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();

  return (
    <Layout>
      {/* Hero Section - Matching About/PatientStories format */}
      <section className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-drift" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-primary-foreground/70 font-medium mb-4 text-sm tracking-wider uppercase">Testimonials</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our trusted Clients
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              Hear what our clients say about their transformative physiotherapy experiences at Dr. Komal's Physiocare.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                <Link to="/contact">Read More Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialsRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our happy clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "group relative rounded-2xl p-8 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-olive-50 hover:border-olive-100 scroll-reveal",
                  `stagger-${index + 1}`
                )}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 flex-shrink-0",
                        i < testimonial.rating ? "text-olive-500 fill-olive-500" : "text-olive-200"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-olive-500 to-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-olive-200/50 to-transparent" />
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the difference personalized physiotherapy can make in your life.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 shadow-lg hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              <Link to="/contact">Book Consultation Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

