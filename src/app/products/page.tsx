import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Our Products
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          ProSpot tools aren&apos;t one-size-fits-all fluff. They&apos;re proven, plug-and-play solutions 
          that deliver real results—more sales, happier customers, and smarter store teams.
        </p>
      </div>
      
      <div className="grid gap-12">
        {products.map((product, index) => {
          const IconComponent = Icons[product.icon as keyof typeof Icons];
          const isEven = index % 2 === 0;
          
          return (
            <Card key={product.id} className="overflow-hidden">
              <div className={`grid gap-6 md:grid-cols-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                <div className={`p-8 md:p-12 ${isEven ? '' : 'md:order-2'}`}>
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                    </div>
                    <CardTitle className="text-3xl">{product.trademarkedName}</CardTitle>
                    <CardDescription className="text-lg">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pt-6">
                    <p className="mb-6 text-muted-foreground">
                      {product.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="mb-3 font-semibold">What It Does</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {product.whatItDoes.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild>
                      <Link href={`/products/${product.id}`}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
                
                <div className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 ${isEven ? '' : 'md:order-1'}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 font-semibold">Business Impact</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {product.businessImpact?.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-green-600">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}