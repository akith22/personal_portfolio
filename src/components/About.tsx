import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="container-base">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="section-title">Beyond the <span className="gradient-text-primary">Code</span></h2>
                    <p className="section-subtitle">Engineering robust backend solutions and scalable architectures.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col justify-center space-y-6 text-muted text-lg leading-relaxed"
                    >
                        <p>
                            I am a driven software engineer with a primary focus on <strong className="text-text-main font-medium">backend engineering and distributed systems</strong>. I thrive on solving complex architectural challenges and writing code that scales.
                        </p>
                        <p>
                            Having worked on projects ranging from Distributed File Systems utilizing Raft consensus, to full-stack Application Tracking Systems with strict RBAC, I understand the importance of building software that is not just functional, but reliable and maintainable.
                        </p>
                        <p>
                            Currently pursuing my BSc in Computer Science, I continuously seek to bridge the gap between academic theory and real-world system engineering.
                        </p>
                    </motion.div>

                    {/* Right Column: Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <div className="premium-card p-8 sm:p-10 w-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] pointer-events-none" />

                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Education</h3>

                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-text-main leading-tight">BSc (Hons) Computer Science</h4>
                                <p className="text-muted font-medium">Sri Lanka Institute of Information Technology (SLIIT)</p>
                                <div className="flex items-center gap-4 mt-6">
                                    <span className="text-sm border border-border bg-white/[0.02] px-3 py-1 rounded-md text-text-main">2023 &mdash; 2027</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <p className="text-sm text-muted mb-4 font-medium">Core Coursework</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Systems', 'Software Engineering'].map((course) => (
                                        <span key={course} className="tech-badge">{course}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
