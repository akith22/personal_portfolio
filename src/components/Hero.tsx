import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';

export default function Hero() {
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }
        })
    };

    const textToType = "Akith De Silva";
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if (isDeleting) {
            if (displayText === '') {
                setIsDeleting(false);
                timeout = setTimeout(() => {}, 400);
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(textToType.substring(0, displayText.length - 1));
                }, 40); // Faster delete
            }
        } else {
            if (displayText === textToType) {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 1200); // 1.2s pause
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(textToType.substring(0, displayText.length + 1));
                }, 85); // Smooth typing
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-secondary/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-[30%] right-[20%] w-[25%] h-[25%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-base relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20">
                {/* Left Column */}
                <div className="max-w-2xl">
                    <motion.div
                        custom={0}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border glass border-primary/30 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                        <span className="text-xs font-medium text-primary font-mono">Available for Internships</span>
                    </motion.div>

                    <motion.p
                        custom={1}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xl text-muted font-medium mb-2"
                    >
                        Hi, I'm
                    </motion.p>

                    <div className="mb-4">
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] relative w-max min-h-[1.1em] flex items-center"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            {/* Hidden full text to maintain container width and prevent layout shift */}
                            <span className="invisible pointer-events-none pr-4">{textToType}</span>
                            
                            <span className="absolute inset-0 flex items-center">
                                <span className="gradient-text-primary flex">
                                    {displayText.split('').map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0.2 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </span>
                                <motion.span 
                                    animate={{ opacity: [1, 0] }} 
                                    transition={{ repeat: Infinity, duration: 0.85, ease: "easeInOut", repeatType: "mirror" }}
                                    className="text-primary font-light ml-[1px] -mt-[0.05em]"
                                >
                                    |
                                </motion.span>
                            </span>
                        </h1>
                    </div>

                    <motion.p
                        custom={4}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg sm:text-xl text-muted font-medium mb-4"
                    >
                        Software Engineer &nbsp;|&nbsp; Backend &amp; Full-Stack Developer
                    </motion.p>

                    <motion.p
                        custom={5}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg text-muted mb-10 leading-relaxed max-w-lg"
                    >
                        I engineer resilient backend services, build scalable APIs, and craft high-performance web applications focused on clean architecture and optimal user experiences.
                    </motion.p>

                    <motion.div
                        custom={7}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="#projects" className="btn-glass group">
                            View Projects
                            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="/Akith_De_Silva_CV.pdf" download className="btn-glass">
                            <FiDownload className="w-4 h-4" />
                            Download CV
                        </a>
                        <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-glass p-3">
                            <FiGithub className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Code Window */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
                    className="hidden lg:block relative"
                >
                    <div className="glass-card overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20 backdrop-blur-sm">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-3 text-xs text-muted font-mono">developer.ts</span>
                        </div>
                        <div className="p-6 font-mono text-sm leading-loose">
                            <p><span className="text-secondary">const</span> <span className="text-text-main">developer</span> = <span className="text-primary">{'{'}</span></p>
                            <div className="pl-6">
                                <p><span className="text-muted">name:</span> <span className="text-tertiary">'Akith De Silva'</span>,</p>
                                <p><span className="text-muted">role:</span> <span className="text-tertiary">'Software Engineer'</span>,</p>
                                <p><span className="text-muted">passions:</span> [</p>
                                <div className="pl-6">
                                    <p><span className="text-tertiary">'Backend Architecture'</span>,</p>
                                    <p><span className="text-tertiary">'API Development'</span>,</p>
                                    <p><span className="text-tertiary">'Full-Stack Web'</span></p>
                                </div>
                                <p>],</p>
                                <p><span className="text-muted">available:</span> <span className="text-tertiary">true</span>,</p>
                                <p><span className="text-muted">execute:</span> <span className="text-secondary">async</span> () <span className="text-primary">{'=> '}</span> {'{'}</p>
                                <div className="pl-6">
                                    <p><span className="text-secondary">await</span> <span className="text-primary">buildScalableSystems</span>();</p>
                                </div>
                                <p>{'}'}</p>
                            </div>
                            <p><span className="text-primary">{'}'}</span>;</p>
                        </div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
}
