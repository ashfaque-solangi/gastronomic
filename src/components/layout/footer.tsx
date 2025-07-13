import Link from 'next/link';
import { Utensils, Facebook, Twitter, Instagram } from 'lucide-react';

const footerNavLinks = [
    { href: '/recipes', label: 'Recipes' },
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/techniques', label: 'Techniques' },
    { href: '/equipments', label: 'Equipments' },
    { href: '/shop', label: 'Shop' },
    { href: '/blog', label: 'Blog' },
];

const socialLinks = [
    { href: '#', icon: Facebook, name: 'Facebook' },
    { href: '#', icon: Twitter, name: 'Twitter' },
    { href: '#', icon: Instagram, name: 'Instagram' },
];


export default function Footer() {
    return (
        <footer className="bg-secondary border-t">
            <div className="container px-4 py-12 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-start col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Utensils className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold font-headline">Gastronomic Hub</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">Your ultimate destination for culinary inspiration and recipes.</p>
                    </div>
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                {footerNavLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            <Icon className="h-5 w-5" />
                                            <span className="sr-only">Follow us on {social.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background py-4 border-t">
                <div className="container px-4 text-center text-sm text-muted-foreground max-w-screen-2xl">
                    &copy; {new Date().getFullYear()} Gastronomic Hub. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
