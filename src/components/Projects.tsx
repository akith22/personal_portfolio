import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'CVortex',
        tagline: 'Application Tracking System',
        description: 'Full-stack recruitment platform streamlining the hiring pipeline. Engineered with role-based access control, secure JWT auth, and complex relational mappings for precise application tracking.',
        tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT Auth', 'RBAC', 'REST APIs'],
        github: 'https://github.com/akith22/CVortex-application-tracking-system',
    },
    {
        title: 'AtlasFS',
        tagline: 'Networked File System',
        description: 'Developed a fault-tolerant network storage system from scratch. Implemented reliable data replication and automatic failure recovery across nodes.',
        tech: ['Java', 'Sockets', 'Multithreading', 'Network Programming'],
        github: 'https://github.com/akith22/AtlasFS-Distributed-File-Storage-System',
    },
    {
        title: 'DiagNote',
        tagline: 'Healthcare Management API',
        description: 'Designed a resilient healthcare platform backend connecting doctors, patients, and laboratories to enable seamless appointment scheduling and secure record management workflows.',
        tech: ['Spring Boot', 'MySQL', 'REST APIs', 'TypeScript', 'React', 'JWT Auth'],
        github: 'https://github.com/akith22/DiagNote',
    },
    {
        title: 'TestLang++',
        tagline: 'API Testing Domain-Specific Language',
        description: 'Created a custom compiled DSL allowing QA engineers to script HTTP requests in a highly intuitive syntax, which compilers down into executable, automated JUnit test suites natively.',
        tech: ['C', 'Flex', 'Bison', 'Java', 'JUnit'],
        github: 'https://github.com/akith22/TestLang',
    },
    {
        title: 'FungiFlow',
        tagline: 'Production Management Platform',
        description: 'End-to-end full-stack platform managing localized mushroom lab production batches, utilizing relational architecture to track inventory inputs, timeline scheduling, and sales analytics.',
        tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'RBAC', 'REST APIs'],
        github: 'https://github.com/akith22/FungiFlow',
    },
    {
        title: 'AlertEYE',
        tagline: 'Driver Safety Matrix',
        description: 'Edge-computing system detecting chronic driver fatigue in real-time leveraging raw computer vision heuristics and sensory data streamed to a central Firebase realtime dashboard.',
        tech: ['Python', 'OpenCV', 'Arduino', 'Firebase'],
        github: 'https://github.com/akith22/AlertEYE',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative border-y border-border bg-black/20">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="container-base relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="section-title">Selected <span className="gradient-text-primary">Work</span></h2>
                        <p className="section-subtitle max-w-xl">Deep dives into backend architecture, performance optimization, and full-stack software development.</p>
                    </div>
                    <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-secondary whitespace-nowrap hidden sm:flex">
                        <FiGithub className="w-4 h-4" /> View full GitHub
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="premium-card premium-card-hover p-8 md:p-10 flex flex-col group"
                        >
                            <div className="flex justify-between items-start gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-secondary text-sm font-medium mt-1 uppercase tracking-widest">{project.tagline}</p>
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-text-main bg-white/5 rounded-md hover:bg-white/10 transition-colors shrink-0" aria-label={`View ${project.title} repo`}>
                                        <FiExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <p className="text-muted leading-relaxed mt-2 mb-8 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                {project.tech.map(t => (
                                    <span key={t} className="tech-badge bg-bg/50 border-border/40 text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 sm:hidden">
                    <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center">
                        <FiGithub className="w-4 h-4" /> View full GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
