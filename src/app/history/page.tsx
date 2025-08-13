"use client"

import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bell, Car, CheckCircle, CreditCard, Star, XCircle } from 'lucide-react';
import Image from 'next/image';

const rideHistory = [
  {
    date: '2024-07-20',
    from: 'SFO Airport',
    to: 'Union Square',
    price: '$45.50',
    status: 'Completed',
  },
  {
    date: '2024-07-18',
    from: 'Fisherman\'s Wharf',
    to: 'Golden Gate Bridge',
    price: '$22.00',
    status: 'Completed',
  },
  {
    date: '2024-07-15',
    from: 'Home',
    to: 'Work',
    price: '$15.75',
    status: 'Cancelled',
  },
];

const notifications = [
    { icon: Star, title: "Rate your last trip", description: "Your feedback helps us improve.", time: "2h ago", color: "text-yellow-500" },
    { icon: CreditCard, title: "Payment successful", description: "Your payment of $45.50 was successful.", time: "1d ago", color: "text-green-500" },
    { icon: Car, title: "New vehicle options", description: "Eco-friendly rides are now available in your area.", time: "3d ago", color: "text-primary" },
]

export default function HistoryPage() {
  return (
    <MainLayout>
        <div className="animate-fade-up">
            <h1 className="font-headline text-3xl font-bold">Activity</h1>
            <p className="text-muted-foreground">Review your notifications and ride history.</p>
        </div>
      
      <Tabs defaultValue="history" className="mt-6 animate-fade-up animation-delay-200">
        <TabsList>
          <TabsTrigger value="history">Ride History</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Your Past Rides</CardTitle>
              <CardDescription>
                A log of all your journeys with RoamReady.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rideHistory.map((ride, index) => (
                    <TableRow key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
                      <TableCell>{ride.date}</TableCell>
                      <TableCell>{ride.from}</TableCell>
                      <TableCell>{ride.to}</TableCell>
                      <TableCell>
                        <Badge variant={ride.status === 'Completed' ? 'default' : 'destructive'} className={ride.status === 'Completed' ? "bg-green-600" : ""}>
                          {ride.status === 'Completed' ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
                          {ride.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{ride.price}</TableCell>
                      <TableCell><Button variant="outline" size="sm">View Details</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Stay updated with the latest alerts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
                        <notification.icon className={`size-6 mt-1 ${notification.color}`} />
                        <div className="flex-1">
                            <p className="font-semibold">{notification.title}</p>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
