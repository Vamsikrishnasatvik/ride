"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  Car,
  Lightbulb,
  MapPin,
  Send,
  Sparkles,
  Star,
} from "lucide-react";

const quickActions = [
  { label: "Home", icon: MapPin },
  { label: "Work", icon: MapPin },
  { label: "Send Package", icon: Send },
  { label: "Reserve", icon: Car },
];

const frequentDestinations = [
  {
    name: "SF MOMA",
    address: "151 3rd St, San Francisco",
    image: "https://placehold.co/600x400",
    imageHint: "art museum",
  },
  {
    name: "Golden Gate Park",
    address: "San Francisco, CA",
    image: "https://placehold.co/600x400",
    imageHint: "park bridge",
  },
  {
    name: "Downtown Restaurant",
    address: "789 Mission St, San Francisco",
    image: "https://placehold.co/600x400",
    imageHint: "restaurant interior",
  },
];

export default function DashboardPage() {
  const [greeting, setGreeting] = useState("");
  const [mapLoading, setMapLoading] = useState(true);

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good Morning");
    else if (hours < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    const timer = setTimeout(() => setMapLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="animate-fade-up">
          <h1 className="font-headline text-3xl font-bold">
            {greeting}, Vamsi
          </h1>
          <p className="text-muted-foreground">
            Where are you headed today?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 animate-fade-up animation-delay-200">
            <CardHeader>
              <CardTitle>Where to?</CardTitle>
            </CardHeader>
            <CardContent>
              {mapLoading ? (
                <Skeleton className="h-[250px] w-full" />
              ) : (
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src="https://placehold.co/800x400"
                    alt="Map"
                    layout="fill"
                    objectFit="cover"
                    className="animate-fade-in"
                    data-ai-hint="city map"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="text-primary h-8 w-8" />
                    <div className="absolute top-0 left-0 h-8 w-8 rounded-full bg-primary/20 animate-ping"></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground animate-fade-up animation-delay-400">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="h-8 w-8" />
                <div>
                  <CardTitle className="font-headline">AI Suggestion</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Faster route to work available.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Save 10 minutes on your commute by taking the express lane.
                </p>
                <Button variant="secondary" className="mt-4 w-full">
                  Reroute Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 animate-fade-up animation-delay-600">
              {quickActions.map((action, index) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="h-20 flex flex-col gap-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <action.icon className="h-6 w-6 text-primary" />
                  <span>{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-headline text-2xl font-bold mb-4 animate-fade-up">
            Frequent Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {frequentDestinations.map((dest, index) => (
              <Card
                key={dest.name}
                className="overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-40 relative">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={dest.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dest.name}</CardTitle>
                  <CardDescription>{dest.address}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
