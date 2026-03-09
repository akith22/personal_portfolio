import { motion } from 'framer-motion';
import { FiStar, FiAward } from 'react-icons/fi';

const achievements = [
    {
        title: 'Top 20 Finalist',
        event: 'Startup Spark Competition – Techno 2024',
        icon: FiStar,
        desc: 'Selected among top 20 teams nationwide for proposing novel software architecture methodologies.',
        color: 'text-amber-400'
    },
    {
        title: 'Certificate of Achievement',
        event: 'Smart Sustainable Development Conference 2025',
        icon: FiAward,
        desc: 'Awarded for exceptional implementation of smart systems in addressing ecological sustainability challenges.',
        color: 'text-emerald-400'
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="section-padding relative">
            <div className="container-base max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Awards &amp; <span className="gradient-text-primary">Recognition</span></h2>
                </motion.div>

                <div className="relative border-l border-border/60 ml-4 md:ml-0 space-y-12 pb-4">
                    {achievements.map((ach, i) => {
                        const Icon = ach.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative pl-10 md:pl-12 group"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-primary/50`}>
                                    <Icon className={`w-4 h-4 ${ach.color}`} />
                                </div>

                                <div className="premium-card p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-text-main mb-1 tracking-tight">{ach.title}</h3>
                                    <p className="text-sm font-medium text-primary mb-4">{ach.event}</p>
                                    <p className="text-muted leading-relaxed text-sm md:text-base">{ach.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
