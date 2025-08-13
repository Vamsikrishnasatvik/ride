"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ThemeProvider({ children, ...props }: any) {
    // This is a placeholder for a real theme provider. 
    // In a real app, you would use something like next-themes.
    // For this project, we'll manage theme via a simple context and local storage.
    const [theme, setTheme] = React.useState("light");
    
    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    return (
        <div {...props}>
             {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { toggleTheme } as React.Attributes & { toggleTheme: () => void; });
                }
                return child;
            })}
        </div>
    )
}

export function SimpleThemeToggle() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const root = window.document.documentElement;
        setIsDark(root.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        root.classList.toggle("dark");
        setIsDark(root.classList.contains('dark'));
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    }

    return (
         <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? 
                <Sun className="h-[1.2rem] w-[1.2rem]" /> : 
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            }
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
