import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';

const categories = [
    {
        title: 'Programming',
        icon: FiCode,
        skills: ['Java', 'C'],
    },
    {
        title: 'Frontend',
        icon: FiLayout,
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'TailwindCSS'],
    },
    {
        title: 'Backend',
        icon: FiServer,
        skills: ['Spring Boot', 'Spring Security', 'REST APIs', 'JWT Auth'],
    },
    {
        title: 'Databases',
        icon: FiDatabase,
        skills: ['MySQL', 'Firebase', 'Relational Design'],
    },
    {
        title: 'Tools',
        icon: FiTool,
        skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Jira'],
    },
    {
        title: 'Concepts',
        icon: FiCpu,
        skills: ['Microservices', 'RBAC', 'Cloud Architecture', 'Networking'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-base">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="section-title">Technical <span className="gradient-text-primary">Arsenal</span></h2>
                    <p className="section-subtitle">Core technologies and concepts I use to architect robust solutions.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="premium-card premium-card-hover p-6 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main">{cat.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {cat.skills.map(skill => (
                                        <span key={skill} className="tech-badge">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
