
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Github,
  Loader2,
  MapPin,
  MoveRight,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PasswordStrength } from "@/components/password-strength";
import { RoamReadyLogo } from "@/components/roam-ready-logo";

const carouselSlides = [
  {
    icon: MapPin,
    title: "Discover New Horizons",
    description:
      "Find the perfect ride to take you to your next adventure, whether it's across town or across the country.",
    image: "https://placehold.co/1200x900/4B0082/FFFFFF",
    imageHint: "cityscape destination",
  },
  {
    icon: ShieldCheck,
    title: "Safety is Our Priority",
    description:
      "Travel with peace of mind. Our verified drivers and real-time tracking are here for your security.",
    image: "https://placehold.co/1200x900/4B0082/FFFFFF",
    imageHint: "safe travel",
  },
  {
    icon: Wallet,
    title: "Seamless Payments",
    description:
      "Pay for your rides easily and securely within the app. No cash, no hassle.",
    image: "https://placehold.co/1200x900/4B0082/FFFFFF",
    imageHint: "mobile payment",
  },
];

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

export default function OnboardingPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="relative hidden bg-primary text-primary-foreground lg:flex flex-col p-10 justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <RoamReadyLogo className="size-8" />
          <span className="font-headline text-2xl font-semibold">
            RoamReady
          </span>
        </Link>
        <div className="relative z-10 mt-auto max-w-lg">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0 absolute bottom-0"
              }`}
            >
              <slide.icon className="size-12 mb-4" />
              <h2 className="font-headline text-4xl font-semibold mb-2">
                {slide.title}
              </h2>
              <p className="text-lg text-primary-foreground/80">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {carouselSlides.map((slide, index) => (
             <Image
             key={index}
             src={slide.image}
             alt={slide.title}
             width={1200}
             height={900}
             data-ai-hint={slide.imageHint}
             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-20" : "opacity-0"}`}
           />
          ))}
        </div>
        <div className="flex gap-2 mt-8 z-10">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeSlide ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-0">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="flex items-center justify-center gap-2 mb-6 lg:hidden">
            <RoamReadyLogo className="size-8 text-primary" />
            <span className="font-headline text-3xl font-semibold text-primary">
              RoamReady
            </span>
          </div>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // On success, you would redirect. We use a Link for now.
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...form.register("email")}
              autoComplete="email"
              suppressHydrationWarning
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
              autoComplete="current-password"
              suppressHydrationWarning
            />
            {form.formState.errors.password && (
              <p className="text-sm text-destructive">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading} asChild>
            <Link href="/dashboard" suppressHydrationWarning>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Link>
          </Button>
          <Button variant="outline" className="w-full" suppressHydrationWarning>
            <Github className="mr-2 h-4 w-4" /> Login with GitHub
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function SignupForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<SignupFormValues>({
      resolver: zodResolver(signupSchema),
      defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    });
  
    const password = form.watch("password");
  
    const onSubmit = (data: SignupFormValues) => {
      setIsLoading(true);
      console.log(data);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get Started</CardTitle>
        <CardDescription>
          Create an account to start your journey with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" {...form.register("name")} suppressHydrationWarning />
            {form.formState.errors.name && (
                <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...form.register("email")}
              autoComplete="email"
              suppressHydrationWarning
            />
             {form.formState.errors.email && (
                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...form.register("password")} suppressHydrationWarning />
            <PasswordStrength password={password} />
             {form.formState.errors.password && (
                <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" {...form.register("confirmPassword")} suppressHydrationWarning />
             {form.formState.errors.confirmPassword && (
                <p className="text-sm text-destructive">{form.formState.errors.confirmPassword.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading} asChild>
            <Link href="/dashboard" suppressHydrationWarning>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Started
            </Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
