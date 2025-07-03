import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        
        <div className="relative container px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Enterprise-Grade Retail Technology
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-gradient">
              Simple, Scalable Tools That Make Shopping Easier
            </h1>
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto">
              ProSpot delivers enterprise-grade, B2B tools that transform brick-and-mortar retail 
              into data-driven, shopper-centric experiences.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white shadow-lg" asChild>
                <Link href="/demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10-25%</div>
              <div className="text-sm opacity-80">Increase in Basket Size</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12 Weeks</div>
              <div className="text-sm opacity-80">Time to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-80">Store Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProSpot Section with icons */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Why Choose ProSpot?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">End-to-end, consultative approach</h3>
                  <p className="text-muted-foreground">
                    Strategy, implementation, analytics, continuous optimization
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Open, API-first architecture</h3>
                  <p className="text-muted-foreground">
                    Plug into existing POS, CRM, inventory, loyalty and DMP systems
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Proven ROI</h3>
                  <p className="text-muted-foreground">
                    10–25% increases in add-to-basket rates and average order value within 12 weeks
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Scalable design</h3>
                  <p className="text-muted-foreground">
                    Deploy a pilot aisle today, roll out 100+ stores tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview with better cards */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold">Our Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Every ProSpot tool plugs into your existing store systems and comes with expert setup and support.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              const colors = ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-pink-500 to-pink-600', 'from-green-500 to-green-600', 'from-orange-500 to-orange-600'];
              const bgColors = ['bg-blue-50', 'bg-purple-50', 'bg-pink-50', 'bg-green-50', 'bg-orange-50'];
              const darkBgColors = ['dark:bg-blue-950/20', 'dark:bg-purple-950/20', 'dark:bg-pink-950/20', 'dark:bg-green-950/20', 'dark:bg-orange-950/20'];
              
              return (
                <Card key={product.id} className="relative overflow-hidden group card-hover border-0 shadow-xl">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${bgColors[index]} ${darkBgColors[index]} rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                  <CardHeader className="relative">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${colors[index]} shadow-lg`}>
                      {IconComponent && <IconComponent className="h-7 w-7 text-white" />}
                    </div>
                    <CardTitle className="text-2xl">{product.trademarkedName}</CardTitle>
                    <CardDescription className="text-base">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="mb-6 text-muted-foreground">
                      {product.description}
                    </p>
                    <Button variant="link" className="px-0 text-lg font-semibold group-hover:translate-x-2 transition-transform" asChild>
                      <Link href={`/products/${product.id}`}>
                        Learn more <ArrowRight className="ml-1 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient" />
        <div className="relative container px-4 sm:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Ready to see ProSpot in action?
            </h2>
            <p className="mb-10 text-xl text-gray-200 max-w-2xl mx-auto">
              Let&apos;s discuss your unique priorities—whether it&apos;s piloting ProGuide in a single department 
              or rolling out the full suite across hundreds of doors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-xl" asChild>
                <Link href="/demo">
                  Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}