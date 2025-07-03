import Link from "next/link";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-tile opacity-5"></div>
        <div className="container py-12 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five powerful solutions that work together to transform your retail experience. 
              Each tool is designed to integrate seamlessly with your existing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="container">
          <div className="space-y-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              
              return (
                <article 
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition-shadow relative group"
                >
                  <Link href={`/products/${product.id}`}>
                    <span className="absolute inset-0 z-10"></span>
                  </Link>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                        {IconComponent && <IconComponent className="h-8 w-8" />}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-2 group-hover:underline">
                          {product.trademarkedName}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                          {product.tagline}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 mb-6">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <span className="text-sm font-mono text-muted-foreground">
                            {product.whatItDoes.length} features
                          </span>
                          <span className="text-sm font-mono text-muted-foreground">
                            •
                          </span>
                          <span className="text-sm font-mono text-muted-foreground">
                            {product.whyYouLoveIt.length} benefits
                          </span>
                        </div>
                        <span className="text-sm font-mono group-hover:translate-x-2 transition-transform">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to transform your retail experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which ProSpot solutions are right for your business and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center rounded-full bg-black hover:bg-blue focus:bg-blue py-3 px-6 text-white transition-colors duration-200 font-mono"
              >
                Schedule a Demo
                <Icons.ArrowRight className="ml-2 h-4 w-4" />
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
      </section>
    </main>
  );
}