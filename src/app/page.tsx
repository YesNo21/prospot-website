import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative bg-tile">
          <div className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          <div className="container px-4 sm:px-6">
            <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-20 space-y-6 lg:max-w-4xl flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                  Simple, Scalable Retail Tools
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                  <Link className="underline decoration-brand hover-brand underline-offset-8 hover:underline-offset-4 transition-all ease-out" href="/products">
                    ProSpot
                  </Link>
                  +
                  <span className="underline decoration-black text-framework underline-offset-8 hover:underline-offset-4 transition-all ease-out">
                    Retail
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo Animation Section */}
        <div className="flex flex-col items-center">
          <div className="relative flex gap-[0] -mt-16 group">
            <div className="z-10 aspect-square w-32 h-32 flex justify-center items-center rounded-full border-white border-4 bg-white transform translate-x-2 group-hover:scale-110 group-hover:-translate-x-5 transition-all duration-300">
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="currentColor" className="text-brand" />
                <path d="M50 30v40M30 50h40" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-black opacity-0 text-4xl scale-50 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
              +
            </div>
            <div className="aspect-square w-32 h-32 border-white border-4 flex justify-center items-center rounded-full transform -translate-x-2 group-hover:scale-110 group-hover:translate-x-5 transition-all duration-300 bg-black">
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="25" width="40" height="50" fill="white" rx="4" />
                <circle cx="50" cy="45" r="8" fill="black" />
                <path d="M42 60h16" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          
          <div className="container px-4 sm:px-6 relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl flex flex-col items-center">
            <div className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center">
              <p>
                ProSpot transforms brick-and-mortar retail with intelligent technology that creates 
                seamless shopping experiences. Our suite of tools helps retailers boost sales by 32% 
                on average while delighting customers with personalized, engaging interactions.
              </p>
              <div className="flex items-center flex-col gap-4">
                <div className="flex flex-col md:inline-flex md:flex-row rounded-xl md:rounded-full shadow-xl md:whitespace-nowrap text-center bg-gray-900 p-4 md:pr-2 md:pl-6 md:py-2 text-white text-sm lg:text-base mt-6 font-mono gap-4 items-center">
                  <span>Transform your retail experience today</span>
                  <Button
                    asChild
                    className="text-white flex items-center gap-2 relative cursor-pointer bg-blue md:aspect-square px-4 py-2 md:p-2 rounded-xl md:rounded-full hover:bg-yellow hover:text-black transition-colors duration-300"
                  >
                    <Link href="/demo">
                      <span className="md:hidden">Get Started</span>
                      <Icons.ArrowRight className="h-4 md:h-6" />
                    </Link>
                  </Button>
                </div>
                <Link 
                  className="inline-flex text-brand text-xs md:text-sm underline hover:text-gray-900"
                  href="/about"
                >
                  Learn about our mission
                  <Icons.ExternalLink className="w-4 h-4 ml-1 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="py-12 sm:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Our Products
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Five powerful solutions that work together to transform your retail experience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {products.map((product) => {
                const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                
                return (
                  <article 
                    key={product.id}
                    className="border border-gray-200 rounded-sm p-6 bg-white hover:shadow-lg transition-all relative group"
                  >
                    <Link href={`/products/${product.id}`}>
                      <span className="absolute inset-0 z-10"></span>
                    </Link>
                    <div className="mb-4">
                      {IconComponent && (
                        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2">
                        {product.trademarkedName}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-mono text-gray-500 group-hover:text-gray-900 transition-colors">
                        View details →
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by retailers nationwide
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight">100+</div>
                <div className="text-sm text-gray-600 mt-2">Retail Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight">32%</div>
                <div className="text-sm text-gray-600 mt-2">Average Sales Lift</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight">2M+</div>
                <div className="text-sm text-gray-600 mt-2">Daily Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight">4.8</div>
                <div className="text-sm text-gray-600 mt-2">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}