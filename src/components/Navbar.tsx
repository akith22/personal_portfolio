import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiDownload, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggle } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, x: "-50%" }}
                animate={{ y: 0, x: "-50%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-4 left-1/2 w-[95%] max-w-[1100px] z-50 transition-all duration-300 rounded-[2rem] ${
                    scrolled ? 'glass border border-white/10' : 'bg-transparent'
                }`}
            >
                <div className="w-full h-14 sm:h-16 px-6 sm:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <img src="/A.jpg" alt="Logo" className="h-8 w-auto object-contain rounded-md transition-transform group-hover:scale-105" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                                        isActive
                                            ? 'text-text-main'
                                            : 'text-muted hover:text-text-main hover:bg-white/[0.03]'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.05)]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={toggle} aria-label="Toggle theme" className="btn-glass !p-2.5">
                            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                        </button>
                        <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-glass !p-2.5">
                            <FiGithub className="w-5 h-5" />
                        </a>
                        <a href="/Akith_De_Silva_CV.pdf" download className="btn-glass ml-2">
                            <FiDownload className="w-4 h-4" /> Download CV
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-hamburger btn-glass !p-2" onClick={() => setMobileOpen(true)}>
                        <FiMenu className="w-6 h-6" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 glass-strong flex flex-col justify-center items-center"
                    >
                        <button className="absolute top-6 right-6 text-muted hover:text-text-main p-3" onClick={() => setMobileOpen(false)}>
                            <FiX className="w-8 h-8" />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-2xl font-display font-bold ${
                                        activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-main'
                                    }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-8 flex gap-6">
                                <button onClick={() => { toggle(); setMobileOpen(false); }} className="btn-glass !p-3">
                                    {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                                </button>
                                <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-glass !p-3">
                                    <FiGithub size={20} />
                                </a>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                <a href="/Akith_De_Silva_CV.pdf" download className="btn-glass mt-4">
                                    <FiDownload className="w-4 h-4" /> Download CV
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
