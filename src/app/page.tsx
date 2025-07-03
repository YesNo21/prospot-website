import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Enterprise-Grade Retail Technology
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Scalable Tools That Make Shopping Easier—and Boost Store Sales
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              ProSpot delivers enterprise-grade, B2B tools that transform brick-and-mortar retail 
              into data-driven, shopper-centric experiences. We combine AI-powered virtual assistants, 
              intelligent shelf sensors, interactive displays, sampling apps, and AR/VR solutions 
              into a unified, modular platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProSpot Section */}
      <section className="border-t bg-background">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why ProSpot?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-2 font-semibold">End-to-end, consultative approach</h3>
                  <p className="text-muted-foreground">
                    Strategy, implementation, analytics, continuous optimization
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-2 font-semibold">Open, API-first architecture</h3>
                  <p className="text-muted-foreground">
                    Plug into existing POS, CRM, inventory, loyalty and DMP systems
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-2 font-semibold">Proven ROI</h3>
                  <p className="text-muted-foreground">
                    10–25% increases in add-to-basket rates and average order value within 12 weeks
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-2 font-semibold">Scalable design</h3>
                  <p className="text-muted-foreground">
                    Deploy a pilot aisle today, roll out 100+ stores tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Solutions</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Every ProSpot tool plugs into your existing store systems and comes with expert setup and support. 
              Best of all, you start measuring real gains—more products sold, fewer frustrated shoppers—within weeks.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const IconComponent = Icons[product.icon as keyof typeof Icons];
              
              return (
                <Card key={product.id} className="relative overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    </div>
                    <CardTitle>{product.trademarkedName}</CardTitle>
                    <CardDescription>{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <Button variant="link" className="px-0" asChild>
                      <Link href={`/products/${product.id}`}>
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to see ProSpot in action?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let&apos;s discuss your unique priorities—whether it&apos;s piloting ProGuide in a single department 
              or rolling out the full suite across hundreds of doors. Our consultative team will craft 
              a tailored roadmap, backed by proof points and a flexible commercial model that scales 
              with your success.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">
                Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}