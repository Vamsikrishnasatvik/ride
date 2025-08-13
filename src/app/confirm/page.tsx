"use client"

import { useState } from 'react';
import Image from 'next/image';
import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, CreditCard, Loader2, MapPin, User, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RoamReadyLogo } from '@/components/roam-ready-logo';

const paymentMethods = [
  { id: 'card', name: 'Credit Card', icon: CreditCard, details: '**** **** **** 1234' },
  { id: 'logo', name: 'RoamReady Pay', icon: RoamReadyLogo, details: 'Balance: $50.00' },
];

export default function ConfirmPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [paymentState, setPaymentState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleConfirm = () => {
    setPaymentState('loading');
    setTimeout(() => {
      setPaymentState('success');
    }, 2000);
  };

  if (paymentState === 'success') {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <div className="relative animate-fade-in">
                 <CheckCircle className="size-24 text-green-500" />
            </div>
            <h1 className="font-headline text-4xl font-bold mt-6 animate-fade-up">Payment Successful!</h1>
            <p className="text-muted-foreground text-lg mt-2 animate-fade-up animation-delay-200">Your ride is confirmed. Enjoy your trip!</p>
            <Button className="mt-8 animate-fade-up animation-delay-400" size="lg">View Ride Details</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-3xl font-bold mb-6 animate-fade-up">Confirm Your Ride</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up">
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 rounded-md overflow-hidden mb-4">
                  <Image src="https://placehold.co/600x400" alt="Route map" layout="fill" objectFit="cover" data-ai-hint="route map" />
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="size-4 mr-3 mt-1 text-primary" />
                    <div>
                      <p className="font-semibold">Pickup</p>
                      <p className="text-muted-foreground">123 Market St, San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="size-4 mr-3 mt-1 text-accent" />
                    <div>
                      <p className="font-semibold">Drop-off</p>
                      <p className="text-muted-foreground">456 Main St, San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="size-4 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Driver</p>
                      <p className="text-muted-foreground">John D. - Toyota Camry</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-up animation-delay-200">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Select how you'd like to pay</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map(method => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={cn(
                      'w-full text-left p-4 rounded-lg border flex items-center gap-4 transition-all duration-200',
                      selectedPayment === method.id ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-border'
                    )}
                  >
                    <method.icon className="size-6 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-semibold">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.details}</p>
                    </div>
                    {selectedPayment === method.id && <CheckCircle className="size-5 text-primary" />}
                  </button>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between"><span>Ride Fare</span><span>$15.00</span></div>
                <div className="flex justify-between"><span>Booking Fee</span><span>$2.50</span></div>
                <div className="flex justify-between"><span>Discount</span><span className="text-green-600">-$3.00</span></div>
                <Separator />
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>$14.50</span></div>
              </CardContent>
              <CardFooter>
                 <Button className="w-full" size="lg" onClick={handleConfirm} disabled={paymentState === 'loading'}>
                    {paymentState === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Confirm & Pay
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
