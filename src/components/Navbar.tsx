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
    const { theme, toggle } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-bg/80 backdrop-blur-md border-border'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="container-base h-16 sm:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-md bg-text-main text-bg flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105">
                            A
                        </div>
                        <span className="font-semibold text-text-main text-sm tracking-tight hidden sm:block">
                            Akith<span className="text-primary">.dev</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted hover:text-text-main transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_var(--color-primary)]" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            className="text-muted hover:text-text-main transition-colors p-2 rounded-md hover:bg-white/5"
                        >
                            {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
                        </button>
                        <a
                            href="https://github.com/akith22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-text-main transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                            <FiGithub className="w-4 h-4" />
                            GitHub
                        </a>
                        <a href="/Akith_De_Silva_CV.pdf" download className="btn-secondary !py-2 !px-4 !text-sm">
                            <FiDownload className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-muted hover:text-text-main transition-colors p-2"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <FiMenu className="w-5 h-5" />
                    </button>
                </div>
                {/* Glow line underneath navbar */}
                <div className="glow-line" style={{ opacity: scrolled ? 0.5 : 0, transition: 'opacity 0.3s ease' }} />
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-[60] bg-bg/95 flex flex-col justify-center items-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-muted hover:text-text-main p-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            <FiX className="w-6 h-6" />
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
                                    className="text-2xl font-semibold text-muted hover:text-text-main transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                                onClick={() => { toggle(); setMobileOpen(false); }}
                                className="flex items-center gap-2 text-muted hover:text-text-main transition-colors text-lg"
                            >
                                {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                            </motion.button>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="flex flex-col items-center gap-4 mt-8"
                            >
                                <a
                                    href="https://github.com/akith22"
                                    className="btn-secondary w-full justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub /> GitHub
                                </a>
                                <a href="/Akith_De_Silva_CV.pdf" download className="btn-primary w-full justify-center">
                                    <FiDownload /> Download CV
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
