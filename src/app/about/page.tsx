import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        <div className="relative container px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              About ProSpot
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gradient">
              Transforming Retail Experiences
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionize brick-and-mortar retail with cutting-edge technology 
              that creates seamless, data-driven shopping experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower retailers with innovative technology solutions that enhance customer experiences, 
                drive sales growth, and create lasting competitive advantages in an evolving marketplace.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every retail interaction is personalized, efficient, and delightful—where 
                technology seamlessly bridges the gap between digital convenience and in-store experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision starts with how it benefits retailers and their customers
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-muted-foreground">
                  We measure success by the tangible ROI we deliver to our partners
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously pushing boundaries to create breakthrough solutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to quality in every product, service, and interaction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Leadership Team</h2>
            <p className="text-lg text-muted-foreground mb-16">
              Our team brings together decades of retail, technology, and innovation expertise 
              to deliver transformative solutions for our partners.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                <h3 className="text-lg font-semibold">Sarah Chen</h3>
                <p className="text-muted-foreground">CEO & Co-Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                <h3 className="text-lg font-semibold">Michael Rodriguez</h3>
                <p className="text-muted-foreground">CTO & Co-Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                <h3 className="text-lg font-semibold">Emily Park</h3>
                <p className="text-muted-foreground">VP of Sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}