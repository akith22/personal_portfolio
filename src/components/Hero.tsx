import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Subtle Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-base relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.02] mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-medium text-muted">Available for Internships</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-main leading-[1.1] mb-6">
                        Hi, I'm <br className="hidden sm:block" />
                        <span className="gradient-text-primary typewriter">Akith De Silva</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted font-medium mb-4">
                        Computer Science Undergraduate | Backend &amp; Full-Stack Developer
                    </p>

                    <p className="text-base sm:text-lg text-muted mb-10 leading-relaxed max-w-lg">
                        I engineer resilient distributed systems, build scalable APIs, and craft high-performance web applications focused on clean architecture and optimal user experiences.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="btn-primary group">
                            View Projects
                            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="/Akith_De_Silva_CV .pdf" download className="btn-secondary">
                            <FiDownload className="w-4 h-4" />
                            Download CV
                        </a>
                        <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-secondary p-3">
                            <FiGithub className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Code Window Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden lg:block relative"
                >
                    <div className="premium-card overflow-hidden">
                        {/* Window controls */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm leading-loose">
                            <p><span className="text-primary">const</span> <span className="text-text-main">developer</span> = <span className="text-primary">{'{'}</span></p>
                            <div className="pl-6">
                                <p><span className="text-muted">name:</span> <span className="text-secondary">'Akith De Silva'</span>,</p>
                                <p><span className="text-muted">role:</span> <span className="text-secondary">'Software Engineer'</span>,</p>
                                <p><span className="text-muted">passions:</span> [</p>
                                <div className="pl-6">
                                    <p><span className="text-secondary">'Backend Architecture'</span>,</p>
                                    <p><span className="text-secondary">'Distributed Systems'</span>,</p>
                                    <p><span className="text-secondary">'Full-Stack Web'</span></p>
                                </div>
                                <p>],</p>
                                <p><span className="text-muted">execute:</span> <span className="text-primary">async</span> () <span className="text-primary">{'=>'}</span> {'{'}</p>
                                <div className="pl-6">
                                    <p><span className="text-primary">await</span> <span className="text-secondary">buildScalableSystems</span>();</p>
                                </div>
                                <p>{'}'}</p>
                            </div>
                            <p className="text-primary">{'}'};</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
