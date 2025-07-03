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
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container py-12 sm:py-20">
          <Link href="/" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to products
          </Link>
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              {IconComponent && (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <IconComponent className="h-8 w-8" />
                </div>
              )}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                  {product.trademarkedName}
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  {product.tagline}
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700">
                {product.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center rounded-full bg-black hover:bg-blue focus:bg-blue py-3 px-6 text-white transition-colors duration-200 font-mono"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 py-3 px-6 transition-colors duration-200 font-mono"
              >
                Contact Sales
              </Link>
            </div>
          </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-100 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-12">What It Does</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {product.whatItDoes.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xs font-mono">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Why You'll Love It</h2>
            <div className="space-y-6">
              {product.whyYouLoveIt.map((item, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-sm p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      {(product.keyCap || product.businessImpact || product.deploymentScalability) && (
        <section className="border-t border-gray-100 py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tight mb-12">Enterprise Details</h2>
              
              <div className="grid gap-12 lg:grid-cols-3">
                {product.keyCap && (
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-6">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {product.keyCap.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.businessImpact && (
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-6">Business Impact</h3>
                    <ul className="space-y-3">
                      {product.businessImpact.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.deploymentScalability && (
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-6">Deployment & Scalability</h3>
                    <ul className="space-y-3">
                      {product.deploymentScalability.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-gray-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Ready to see {product.trademarkedName} in action?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how {product.trademarkedName} can transform your retail experience and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center rounded-full bg-white hover:bg-gray-100 py-3 px-6 text-gray-900 transition-colors duration-200 font-mono"
              >
                Book Your Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-gray-900 py-3 px-6 transition-colors duration-200 font-mono"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}