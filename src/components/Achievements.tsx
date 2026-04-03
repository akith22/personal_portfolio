import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

const achievements = [
    {
        title: 'Top 20 Finalist',
        event: 'Techno 2024',
        date: 'Oct 2024',
        icon: FiAward,
    },
    {
        title: 'Certificate of Achievement',
        event: 'SSD Conference 2025',
        date: 'Jan 2025',
        icon: FiStar,
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};
const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;
        const line = document.querySelector('.timeline-line');
        if (line) line.classList.add('in-view');
        const dots = document.querySelectorAll('.timeline-dot');
        dots.forEach((dot, index) => {
            setTimeout(() => {
                dot.classList.add('in-view');
            }, 300 + index * 400);
        });
    }, [isInView]);

    return (
        <section id="achievements" className="section-padding relative">
            <div className="container-base max-w-4xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="section-title">Awards &amp; <span className="gradient-text-primary">Recognition</span></h2>
                    <p className="section-subtitle">Milestones achieved along the journey.</p>
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* SVG Drawn Timeline */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <line x1="1" y1="0" x2="1" y2="100%" className="timeline-line" stroke="url(#timelineGradient)" strokeWidth="2" />
                            <defs>
                                <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="20%" stopColor="#38BDF8" />
                                    <stop offset="80%" stopColor="#818CF8" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="space-y-16">
                        {achievements.map((ach, i) => {
                            const Icon = ach.icon;
                            const isEven = i % 2 === 0;

                            return (
                                <motion.div key={i} variants={itemVariants} className="relative w-full flex flex-col md:flex-row items-center justify-between">
                                    
                                    {/* Sub-block Left */}
                                    <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'} pl-6 md:pl-0`}>
                                        <div className="glass-card shimmer-effect p-6 flex flex-col items-start md:items-stretch group border-border hover:border-primary/30 transition-all duration-300">
                                            <div className="text-secondary font-mono text-sm tracking-widest uppercase mb-3 flex items-center justify-start md:justify-center">{ach.date}</div>
                                            <h3 className="text-xl font-display font-bold text-text-main mb-2">{ach.title}</h3>
                                            <p className="text-muted">{ach.event}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-[-16px] md:relative md:left-0 md:order-2 w-8 h-8 glass rounded-full z-10 flex items-center justify-center shrink-0 timeline-dot">
                                        <Icon className="w-3.5 h-3.5 text-text-main group-hover:text-primary transition-colors" />
                                    </div>

                                    <div className={`hidden md:block w-full md:w-[45%] ${isEven ? 'md:order-3' : 'md:order-1'}`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
