"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { products } from "@/lib/products";
import * as Icons from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed z-50 h-24 w-full bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/SVG/prospot_logo_2.svg" 
              alt="ProSpot" 
              width={96} 
              height={26} 
              className="h-5 sm:h-6 w-auto"
              priority
            />
          </Link>
        
          <nav>
            <ul role="list" className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono">
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="hover:underline bg-transparent h-auto p-0 font-mono text-xs sm:text-base font-normal">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] lg:w-[600px] bg-white border border-gray-200 rounded-md shadow-lg">
                          {products.map((product) => {
                            const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                            
                            return (
                              <li key={product.id}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/products/${product.id}`}
                                    className="block p-3 space-y-1 rounded-sm border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      {IconComponent && <IconComponent className="h-4 w-4" />}
                                      <div>
                                        <div className="font-medium text-sm">{product.trademarkedName}</div>
                                        <p className="text-xs text-muted-foreground">
                                          {product.tagline}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li className="sm:before:w-[1px] sm:before:bg-gray-200 before:block flex sm:gap-4 md:gap-6">
                <Link 
                  className="rounded-full flex gap-4 items-center bg-black hover:bg-blue focus:bg-blue py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="/demo"
                >
                  <span className="whitespace-nowrap">Book a Demo</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}