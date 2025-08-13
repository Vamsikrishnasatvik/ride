"use client"

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowRight, Car, DollarSign, Loader2, MapPin, Sparkles, User } from 'lucide-react';
import Image from 'next/image';

const rideOptions = [
  { type: 'Standard', eta: '5 min', price: '$15.50', capacity: 4, image: 'https://placehold.co/100x100', imageHint: "standard car" },
  { type: 'Comfort', eta: '7 min', price: '$22.00', capacity: 4, image: 'https://placehold.co/100x100', imageHint: "comfort car" },
  { type: 'XL', eta: '8 min', price: '$28.75', capacity: 6, image: 'https://placehold.co/100x100', imageHint: "suv car" },
];

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFound, setResultsFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResultsFound(false);
    setTimeout(() => {
      setIsLoading(false);
      setResultsFound(true);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-up">
          <h1 className="font-headline text-3xl font-bold">Find a Ride</h1>
          <p className="text-muted-foreground">Enter your pickup and destination to see available rides.</p>
        </div>
        
        <Card className="animate-fade-up animation-delay-200">
          <form onSubmit={handleSearch}>
            <CardContent className="p-6 grid md:grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="pickup" placeholder="Enter pickup location" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="destination" placeholder="Enter destination" className="pl-10" />
                </div>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <>Search Rides <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>

        {resultsFound && (
          <div className="space-y-6">
            <Alert className="border-primary/50 text-primary animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <AlertTitle className="font-headline">AI Recommendation</AlertTitle>
              <AlertDescription>
                Save 15% by choosing 'Comfort' for a slightly longer wait time. Better ride, better price.
              </AlertDescription>
            </Alert>
            
            <h2 className="font-headline text-2xl font-bold animate-fade-up">Available Rides</h2>
            
            <div className="space-y-4">
              {rideOptions.map((ride, index) => (
                <Card 
                  key={ride.type} 
                  className="p-4 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Image src={ride.image} alt={ride.type} width={80} height={80} className="rounded-md" data-ai-hint={ride.imageHint} />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{ride.type}</h3>
                    <p className="text-sm text-muted-foreground">{ride.eta} away</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{ride.capacity}</span>
                    </div>
                  </div>
                   <div className="text-right">
                    <p className="font-bold text-xl">{ride.price}</p>
                    <Button size="sm" className="mt-1">Select</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
