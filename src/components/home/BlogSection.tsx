import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    title: "10 Tips for Maintaining a Healthy Heart",
    excerpt: "Discover simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease.",
    category: "Heart Health",
    author: "Dr. Sarah Mitchell",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
  },
  {
    title: "Understanding Childhood Vaccinations",
    excerpt: "A comprehensive guide to childhood immunizations, their importance, and what parents should know about vaccination schedules.",
    category: "Pediatrics",
    author: "Dr. James Wong",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "Managing Stress in Modern Life",
    excerpt: "Learn effective techniques for managing stress and anxiety, including mindfulness practices and healthy coping strategies.",
    category: "Mental Health",
    author: "Dr. Emily Chen",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <p className="text-primary font-semibold mb-2">Health Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Health Tips & News
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50",
                "animate-fade-up opacity-0"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
