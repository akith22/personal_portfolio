import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
];

const socials = [
    { icon: FiGithub, href: 'https://github.com/akith22', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/akith-de-silva-957166317', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:akithdesilva626@gmail.com', label: 'Email' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-bg glass-strong">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-0" />
            
            <div className="container-base relative z-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border/30 pb-12 mb-8">
                {/* Logo & Tagline */}
               
                {/* Quick Nav */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-primary transition-colors hover:tracking-wide">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-main hover:text-bg hover:bg-primary hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container-base text-left pb-8">
                <p className="text-xs text-muted/60 font-medium">
                    {year} Akith De Silva
                </p>
            </div>
        </footer>
    );
}  
