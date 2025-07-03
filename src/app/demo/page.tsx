import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        <div className="relative container px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0">
              Book a Demo
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gradient">
              See ProSpot in Action
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto">
              Get a personalized demo of our retail solutions and discover how ProSpot 
              can transform your customer experience and boost sales.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">What to expect</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  In your personalized 30-minute demo, our retail technology experts will:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Understand Your Challenges</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll discuss your specific retail environment and pain points
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Demonstrate Relevant Solutions</h3>
                    <p className="text-muted-foreground">
                      See our products in action, tailored to your use cases
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Show Real ROI Examples</h3>
                    <p className="text-muted-foreground">
                      Review case studies and metrics from similar retailers
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Create a Custom Roadmap</h3>
                    <p className="text-muted-foreground">
                      Outline implementation steps and timeline for your success
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
                      <Users className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Join 100+ retailers</h3>
                      <p className="text-sm text-muted-foreground">Who have transformed their stores with ProSpot</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Scheduling Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule your demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll send you available time slots.
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
                      className="w-full px-3 py-2 border rounded-md bg-background"
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
                      className="w-full px-3 py-2 border rounded-md bg-background"
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
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto text-center">
            <div>
              <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Choose a time that works best for your team
              </p>
            </div>
            
            <div>
              <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">30-Minute Session</h3>
              <p className="text-sm text-muted-foreground">
                Focused, efficient, and tailored to your needs
              </p>
            </div>
            
            <div>
              <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Connect with our retail technology specialists
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}