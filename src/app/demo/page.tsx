import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export default function DemoPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative bg-tile">
          <div className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          <div className="container px-4 sm:px-6">
            <div className="relative min-h-[40vh] max-w-2xl mx-auto pt-10 xl:pt-20 pb-20 space-y-6 lg:max-w-4xl flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                  Schedule a Demo
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black text-center">
                  See ProSpot in Action
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="prose sm:prose-lg max-w-none text-center mb-12">
              <p>
                Get a personalized walkthrough of our retail solutions. 
                Our experts will show you how ProSpot can transform your stores 
                and boost sales by an average of 32%.
              </p>
            </div>

            {/* Demo Scheduling Form */}
            <Card className="border border-gray-200 rounded-sm">
              <CardHeader>
                <CardTitle>Request your demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll reach out within 24 hours to schedule your personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stores">Number of stores</Label>
                    <select 
                      id="stores" 
                      className="w-full px-3 py-2 border rounded-sm bg-background"
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5 stores</option>
                      <option value="6-20">6-20 stores</option>
                      <option value="21-50">21-50 stores</option>
                      <option value="50+">50+ stores</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Products of interest</Label>
                    <select 
                      id="interest" 
                      className="w-full px-3 py-2 border rounded-sm bg-background"
                    >
                      <option value="">Select primary interest</option>
                      <option value="proguide">ProGuide™ - Virtual Shopping Assistant</option>
                      <option value="prosense">ProSense™ - Smart Shelf Sensors</option>
                      <option value="prodisplay">ProDisplay™ - Interactive Signage</option>
                      <option value="prosample">ProSample™ - Product Sampling</option>
                      <option value="proimmersive">ProImmersive™ - AR/VR Experiences</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">What to expect</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-mono text-sm uppercase">01. Discovery</h3>
                <p className="text-gray-700">
                  We'll understand your specific retail challenges and goals
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-mono text-sm uppercase">02. Demo</h3>
                <p className="text-gray-700">
                  See relevant ProSpot solutions tailored to your use cases
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-mono text-sm uppercase">03. ROI Analysis</h3>
                <p className="text-gray-700">
                  Review real metrics and case studies from similar retailers
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-mono text-sm uppercase">04. Roadmap</h3>
                <p className="text-gray-700">
                  Get a custom implementation plan and timeline
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <span>Duration: 30 minutes</span>
                <span>•</span>
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}