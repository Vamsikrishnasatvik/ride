"use client"

import React, { useState, useEffect } from "react"
import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Loader2 } from 'lucide-react';
import { SimpleThemeToggle } from "@/components/theme-toggle";
import { Switch } from "@/components/ui/switch";

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);
    
    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    }

  return (
    <MainLayout>
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-up">
                <h1 className="font-headline text-3xl font-bold">Profile & Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <Card className="animate-fade-up animation-delay-200">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your personal details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="Vamsi" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue="vamsi@example.com" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="animate-fade-up animation-delay-400">
                        <CardHeader>
                            <CardTitle>Preferences</CardTitle>
                             <CardDescription>Customize your app experience.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label htmlFor="dark-mode">Dark Mode</Label>
                                    <p className="text-sm text-muted-foreground">Toggle between light and dark themes.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Switch
                                        id="dark-mode"
                                        checked={isDark}
                                        onCheckedChange={() => {
                                            const root = window.document.documentElement;
                                            root.classList.toggle("dark");
                                            setIsDark(root.classList.contains('dark'));
                                            localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
                                        }}
                                    />
                                </div>
                            </div>
                             <div className="flex items-center justify-between">
                                <div>
                                    <Label htmlFor="notifications">Email Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive updates and promotions via email.</p>
                                </div>
                                <Switch id="notifications" defaultChecked />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                     <Card className="text-center animate-fade-up animation-delay-200">
                        <CardHeader>
                            <div className="relative w-24 h-24 mx-auto">
                                <Avatar className="w-24 h-24 text-4xl">
                                    <AvatarImage src="https://placehold.co/100x100.png" alt="Vamsi" data-ai-hint="profile person" />
                                    <AvatarFallback>V</AvatarFallback>
                                </Avatar>
                                <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
                                    <Camera className="h-4 w-4" />
                                    <span className="sr-only">Upload picture</span>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="font-headline">Vamsi</CardTitle>
                            <CardDescription>Joined July 2024</CardDescription>
                        </CardContent>
                     </Card>
                </div>
            </div>

            <div className="flex justify-end animate-fade-up animation-delay-600">
                <Button size="lg" onClick={handleSave} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </div>
        </div>
    </MainLayout>
  );
}
