import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container py-12 md:py-20">
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10">
                {IconComponent && <IconComponent className="h-10 w-10 text-primary" />}
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {product.trademarkedName}
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                {product.tagline}
              </p>
              <p className="mb-8 text-lg">
                {product.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/demo">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Deployment Time</h4>
                    <p>2-4 weeks pilot setup</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Integration</h4>
                    <p>API-first, plug-and-play</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-muted-foreground">ROI Timeline</h4>
                    <p>Measurable results within 12 weeks</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-background">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">What It Does</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {product.whatItDoes.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why You&apos;ll Love It</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {product.whyYouLoveIt.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <p>{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="border-t bg-background">
        <div className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Enterprise Details</h2>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {product.keyCap && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.keyCap.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {product.businessImpact && (
              <Card>
                <CardHeader>
                  <CardTitle>Business Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.businessImpact.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {product.deploymentScalability && (
              <Card>
                <CardHeader>
                  <CardTitle>Deployment & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.deploymentScalability.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-blue-600">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to transform your retail experience with {product.trademarkedName}?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let&apos;s discuss how {product.trademarkedName} can drive measurable results for your stores.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/demo">
                  Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}