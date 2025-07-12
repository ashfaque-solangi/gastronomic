'use client';

import Link from 'next/link';
import { Menu, Utensils } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/shop', label: 'Shop' },
  { href: '/equipments', label: 'Equipments' },
  { href: '/magazines', label: 'Magazines' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Gastronomic Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link
                  href="/"
                  className="mb-6 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Utensils className="mr-2 h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Gastronomic Hub</span>
                </Link>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary',
                         pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex-1 md:hidden">
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Gastronomic Hub</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
