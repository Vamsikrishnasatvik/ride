"use client"

import { useState } from 'react';
import Image from 'next/image';
import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock, MapPin, Sparkles, TrafficCone, Users } from 'lucide-react';

export default function RoutePage() {
  const [showSuggestion, setShowSuggestion] = useState(true);

  return (
    <MainLayout>
      <div className="h-[calc(100vh-10rem)] w-full flex relative">
        <div className="flex-1 relative rounded-lg overflow-hidden animate-fade-in">
          <Image src="https://placehold.co/1600x900" alt="Live route map" layout="fill" objectFit="cover" data-ai-hint="city route map" />
        </div>
        
        <div className="absolute top-4 left-4 right-4 md:left-auto md:w-96 space-y-4 z-10">
          {showSuggestion && (
            <Alert className="bg-background/80 backdrop-blur-sm animate-slide-in-from-right">
              <Sparkles className="h-4 w-4" />
              <AlertTitle className="font-headline">AI Suggestion: Traffic Ahead!</AlertTitle>
              <AlertDescription>
                Heavy traffic reported on Main St. Rerouting could save you 8 minutes.
              </AlertDescription>
              <div className="mt-4 flex gap-2">
                <Button size="sm">Accept Reroute</Button>
                <Button size="sm" variant="outline" onClick={() => setShowSuggestion(false)}>Dismiss</Button>
              </div>
            </Alert>
          )}

          <Card className="bg-background/80 backdrop-blur-sm animate-slide-in-from-right animation-delay-200">
            <CardHeader>
              <CardTitle>En Route to Golden Gate Park</CardTitle>
              <CardDescription>Your driver, Sarah, is on the way.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-primary" />
                  <div>
                    <div className="font-bold text-lg">12 min</div>
                    <div className="text-xs text-muted-foreground">Est. Arrival</div>
                  </div>
                </div>
                 <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <div className="font-bold text-lg">3.4 mi</div>
                    <div className="text-xs text-muted-foreground">Distance</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-600 font-semibold p-2 bg-yellow-100 rounded-md">
                <TrafficCone className="size-4" />
                <span>Light traffic reported</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
