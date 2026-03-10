import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
    { icon: FiGithub, href: 'https://github.com/akith22', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:akithdesilva626@gmail.com', label: 'Email' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-bg/50 relative">
            <div className="glow-line absolute top-0 left-0" />
            <div className="container-base py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Copyright */}
                <p className="text-sm text-muted font-medium text-center md:text-left">
                    &copy; {year} Akith De Silva. <br className="md:hidden" /> Built with React + Tailwind.
                </p>

                {/* Social Links */}
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
                                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
