import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog - HEXAD Engineering",
  description:
    "Stay updated with the latest news, insights, and trends in engineering and design from our experts at HEXAD Engineering.",
};

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Mechanical Engineering in Industry 4.0",
    description:
      "Explore how Industry 4.0 technologies are transforming mechanical engineering practices and creating new opportunities for innovation.",
    date: "March 15, 2025",
    author: "Dr. Robert Chen",
    category: "Mechanical Engineering",
    image: "/engineering-services.jpg",
  },
  {
    id: "2",
    title: "Best Practices for Sustainable Engineering Design",
    description:
      "Learn how to incorporate sustainability principles into your engineering designs to reduce environmental impact and increase efficiency.",
    date: "February 28, 2025",
    author: "Sarah Johnson",
    category: "Design",
    image: "/design-services.jpg",
  },
  {
    id: "3",
    title: "Web Development Trends That Will Dominate 2025",
    description:
      "Discover the emerging technologies and approaches that are reshaping web development and user experience in 2025.",
    date: "February 10, 2025",
    author: "Michael Patel",
    category: "Web Development",
    image: "/web-dev.jpg",
  },
  {
    id: "4",
    title: "Advanced Structural Analysis Techniques for Complex Projects",
    description:
      "An in-depth look at cutting-edge structural analysis methods that enable engineers to tackle increasingly complex design challenges.",
    date: "January 22, 2025",
    author: "Dr. Emily Wilson",
    category: "Analysis",
    image: "/analysis-services.jpg",
  },
  {
    id: "5",
    title: "Prototype Development: From Concept to Reality",
    description:
      "A comprehensive guide to the prototype development process, including best practices, common pitfalls, and success strategies.",
    date: "January 5, 2025",
    author: "James Rodriguez",
    category: "Development",
    image: "/development-services.jpg",
  },
  {
    id: "6",
    title: "The Role of Reverse Engineering in Product Innovation",
    description:
      "How reverse engineering can be ethically applied to understand existing products and drive new innovations in your industry.",
    date: "December 18, 2024",
    author: "Alexandra Kim",
    category: "Engineering",
    image: "/other-services.jpg",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Engineering Insights & News
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest trends, insights, and innovations in engineering, design, and technology from
              our team of experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex flex-col text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    <span className="mr-1">Read more</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest engineering insights, industry news, and updates from HEXAD Engineering delivered straight
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
