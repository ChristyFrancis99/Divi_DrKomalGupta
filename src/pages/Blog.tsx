import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const blogPosts = [
  {
    id: "1",
    title: "10 Tips for Maintaining a Healthy Heart",
    excerpt: "Discover simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease. From diet to exercise, we cover it all.",
    category: "Heart Health",
    author: "Dr. Sarah Mitchell",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Childhood Vaccinations",
    excerpt: "A comprehensive guide to childhood immunizations, their importance, and what parents should know about vaccination schedules.",
    category: "Pediatrics",
    author: "Dr. James Wong",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Managing Stress in Modern Life",
    excerpt: "Learn effective techniques for managing stress and anxiety, including mindfulness practices and healthy coping strategies.",
    category: "Mental Health",
    author: "Dr. Emily Chen",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "The Importance of Regular Health Screenings",
    excerpt: "Why preventive care matters and which health screenings you should schedule based on your age and risk factors.",
    category: "Preventive Care",
    author: "Dr. Michael Rodriguez",
    date: "Jan 8, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Nutrition for Optimal Health",
    excerpt: "Understanding the basics of nutrition and how to build a balanced diet that supports your overall health and well-being.",
    category: "Nutrition",
    author: "Dr. Sarah Mitchell",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Exercise Tips for Every Age",
    excerpt: "Staying active is crucial at every stage of life. Learn the best exercises for your age group and fitness level.",
    category: "Fitness",
    author: "Dr. James Wong",
    date: "Jan 3, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Heart Health", "Pediatrics", "Mental Health", "Preventive Care", "Nutrition", "Fitness"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal-600 text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4">Health Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Tips & Medical Insights
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay informed with the latest health news, medical research, and practical tips from our team of healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-[73px] z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
                >
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
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
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
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary via-primary to-teal-600 rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Health Newsletter
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Get the latest health tips, medical news, and wellness advice delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
